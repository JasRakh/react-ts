import "./Users.scss";
import Skeleton from "./Skeleton/Skeleton.tsx";
import UserItem from "./UserItem/UserItem.tsx";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../interfaces.tsx";
import Success from "./Success";

const Users: FC = memo(() => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [invites, setInvites] = useState<number[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((idOfItem) => idOfItem !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="box">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <div>
          <div className="search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
              value={searchValue}
              onChange={onChangeValue}
              type="text"
              placeholder="Найти пользователя..."
            />
          </div>
          {isLoading ? (
            <div className="skeleton-list">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            users
              .filter((obj) => {
                const fullName = (obj.first_name + obj.last_name).toLowerCase();
                return (
                  fullName.includes(searchValue.toLowerCase()) ||
                  obj.email.includes(searchValue.toLowerCase())
                );
              })
              .map((user) => (
                <UserItem
                  isInvited={invites.includes(user.id)}
                  onClickInvite={onClickInvite}
                  key={user.id}
                  user={user}
                />
              ))
          )}
          {invites.length > 0 && (
            <button onClick={onClickSendInvites} className="send-invite-btn">
              Отправить приглашение
            </button>
          )}
        </div>
      )}
    </div>
  );
});

export default Users;
