import { useState } from "react";
import List from "./list/List";

function MyTasks() {
  const [tasks, setTasks] = useState([
    {
      icon: "🛩",
      description: "Viajar por el mundo",
    },
    {
      icon: "🍔",
      description: "Comer mas sano",
    },
  ]);
  console.log(tasks);
  return (
    <div className="container p-4">
      <h2 className="text-3xl text-slate-700 font-bold">My Tasks</h2>
      <ul>
        {tasks.map((task, idx) => (
          <List
            key={idx}
            description={task.description}
            icon={task.icon}
          />
        ))}
      </ul>
    </div>
  );
}
export default MyTasks;
