import { FC } from "react";
import { ExpenseItem, IExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

interface IExpenses extends IExpenseItem {
  readonly id: string;
}

export const Expenses: FC<{
  readonly expenses: ReadonlyArray<IExpenses>;
}> = ({ expenses }) => (
  <div className="expenses">
    {expenses.map((e) => (
      <ExpenseItem key={e.id} {...e} />
    ))}
  </div>
);
