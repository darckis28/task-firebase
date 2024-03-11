import { deleteDoc, doc } from "firebase/firestore";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { db } from "../../firebase/firebase";
function List({ description, icon, id }) {
  async function borrar() {
    try {
      await deleteDoc(doc(db, "tasks", id));
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <li className="w-full bg-slate-200 rounded-xl mb-2 shadow-xl p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className=" bg-slate-500 rounded-full p-1 mr-1 shadow ">
          {icon}
        </span>{" "}
        <p className="font-medium">{description}</p>{" "}
      </div>
      <div>
        <button
          onClick={borrar}
          className="text-gray-400 transition-all hover:text-red-600 text-xl mr-2"
        >
          <MdDelete />
        </button>
        <button className="text-gray-400 text-xl transition-all hover:text-emerald-500">
          <MdEdit />
        </button>
      </div>
    </li>
  );
}
export default List;
