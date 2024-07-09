import './App.scss'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz/Quiz.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/counter'>Counter</NavLink>
                        </li>
                        <li>
                            <NavLink to='/modal'>Modal</NavLink>
                        </li>
                        <li>
                            <NavLink to='/quiz'>Quiz</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/modal' element={<Modal />} />
                    <Route path='/quiz' element={<Quiz />} />
                </Routes>
            </div>

        </BrowserRouter>


    </>
  )
}

export default App
