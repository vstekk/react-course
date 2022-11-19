import { FC } from "react";

export const ExpenseDate: FC<{ readonly date: Date }> = ({ date }) => (
  <div className="date">
    <div>{date.toLocaleString("en-US", { month: "long" })}</div>
    <div>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
    <div>{date.getFullYear()}</div>
  </div>
);
