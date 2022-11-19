import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>19.11.2022</div>
      <div className="expense-item__description">
        <h2>Exciting Title</h2>
        <div className="expense-item__price">250 CZK</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
