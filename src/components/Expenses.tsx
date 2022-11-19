import { FC } from "react";
import { ExpenseItem, IExpenseItem } from "./ExpenseItem";

export const Expenses: FC<{
  readonly expenses: ReadonlyArray<IExpenseItem>;
}> = ({ expenses }) => (
  <>
    {expenses.map((e) => (
      <ExpenseItem key={e.id} {...e} />
    ))}
  </>
);
