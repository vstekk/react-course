import { FC } from "react";
import { Expenses } from "./components/Expenses";

const expenses = [
  {
    id: "e1",
    title: "Exciting Title wwooohooo!",
    amount: 250,
    date: new Date(2022, 11, 19),
  },
  {
    id: "e2",
    title: "just a tp",
    amount: 69,
    date: new Date(2022, 10, 7),
  },
  {
    id: "e3",
    title: "Loads of Loafs",
    amount: 420,
    date: new Date(2022, 12, 24),
  },
  {
    id: "e4",
    title: "Uhhmmm IDK",
    amount: 2739,
    date: new Date(2022, 11, 8),
  },
];

export const App: FC = () => (
  <div className="App">
    <h1>THE EXPEN DEER</h1>
    <p>And you are just a monke.</p>
    <Expenses expenses={expenses} />
  </div>
);
