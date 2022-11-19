import { FC } from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";

export interface IExpenseItem {
  readonly id: string;
  readonly date: Date;
  readonly title: string;
  readonly amount: number;
}

export const ExpenseItem: FC<IExpenseItem> = ({ id, date, title, amount }) => (
  <div className="expense-item">
    <ExpenseDate date={date} />
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{amount} CZK</div>
    </div>
  </div>
);
