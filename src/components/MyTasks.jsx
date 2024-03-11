import { useEffect, useState } from "react";
import List from "./list/List";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function MyTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(
    () => async () => {
      try {
        const database = await getDocs(collection(db, "tasks"));
        const datos = [];
        database.forEach((data) => datos.push({ ...data.data(), id: data.id }));
        setTasks(datos);
      } catch (e) {
        console.log(e);
      }
    },
    [tasks]
  );
  return (
    <div className="container p-4">
      <h2 className="text-3xl text-slate-700 font-bold mb-4">My Tasks</h2>
      <ul>
        {!tasks.length > 0 && <h1>cargando....</h1>}
        {tasks?.map((task) => (
          <List
            key={task.id}
            description={task.description}
            icon={task.icon}
            id={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
export default MyTasks;
