import "./App.scss";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz/Quiz.tsx";
import Users from "./components/Users";
import { FC, memo } from "react";
import Todo from "./components/Todo/Todo.tsx";

const App: FC = memo(() => {
  return (
    <>
      <BrowserRouter>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <NavLink to="/counter">Counter</NavLink>
              </li>
              <li>
                <NavLink to="/modal">Modal</NavLink>
              </li>
              <li>
                <NavLink to="/quiz">Quiz</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/Todo">Todo</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Todo" element={<Todo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
});

export default App;
