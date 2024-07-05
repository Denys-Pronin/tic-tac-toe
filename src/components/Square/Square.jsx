import s from "./Square.module.css";

const Square = ({ value, onClick }) => {
  return (
    <div>
      <button className={s.btn} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
