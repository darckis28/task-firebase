import { SiTask } from "react-icons/si";
import Links from "../components/Links";
import { BsListTask } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
function Dashboard() {
  return (
    <div
      id="containner"
      className="bg-slate-100 h-screen w-full"
    >
      <header className="[grid-area:header] relative p-4 text-white text-3xl shadow-xl bg-slate-800">
        <h1 className="flex gap-2 items-center ">
          <SiTask /> My tasks
        </h1>
      </header>
      <aside className="[grid-area:aside] bg-slate-400">
        <Links
          refe={"tasks"}
          icon={<BsListTask />}
        >
          My tasks
        </Links>
        <Links
          refe={"create"}
          icon={<MdAddBox />}
        >
          Create new task
        </Links>
      </aside>
      <main className="[grid-area:main]">
        <Outlet />
      </main>
    </div>
  );
}
export default Dashboard;
