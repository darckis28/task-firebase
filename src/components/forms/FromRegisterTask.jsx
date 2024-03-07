import { useState } from "react";

const icons = ["🍔", "👷‍♂️", "🛩", "🚨"];
function FromRegisterTask() {
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const crear = (e) => {
    e.preventDefault();
    const newTask = {
      icon,
      description,
    };
    console.log(newTask);
  };
  return (
    <form
      onSubmit={crear}
      className="container p-6"
    >
      <h2 className="text-3xl font-bold text-slate-700 mb-5">Create Task</h2>
      <div>
        <label htmlFor="">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="block w-full p-2 rounded-lg bg-slate-300"
        />
      </div>
      <div>
        <label htmlFor="">Icono</label>
        <select
          onChange={(e) => setIcon(e.target.value)}
          className="block w-full p-2 rounded-lg bg-slate-300"
        >
          {icons.map((i, idx) => (
            <option
              key={idx}
              value={i}
            >
              {i}
            </option>
          ))}
        </select>
      </div>
      <button className="py-2  px-5 rounded-lg bg-green-500 mt-4 text-white">
        Crear
      </button>
    </form>
  );
}
export default FromRegisterTask;
