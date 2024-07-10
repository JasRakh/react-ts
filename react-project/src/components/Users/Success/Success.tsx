import "./Success.scss";
import { FC, memo } from "react";

interface ISuccessProps {
  count: number;
}
const Success: FC<ISuccessProps> = memo(({ count }) => {
  return (
    <div>
      <div className="success-block">
        <img src="/src/assets/images/Users/success.svg" alt="Success" />
        <h3>Успешно!</h3>
        <p>Всем {count} пользователям отправлено приглашение.</p>
        <button
          onClick={() => window.location.reload()}
          className="send-invite-btn"
        >
          Назад
        </button>
      </div>
    </div>
  );
});

export default Success;
