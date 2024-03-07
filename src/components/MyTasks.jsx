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
    {
      icon: "🚨",
      description: "Ir a conseguir mas cosas",
    },
  ]);
  return (
    <div className="container p-4">
      <h2 className="text-3xl text-slate-700 font-bold mb-4">My Tasks</h2>
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
