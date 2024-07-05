import Board from "./components/Board/Board";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}> Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

export default App;
