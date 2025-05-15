import SearchTask from "../SearchTask/SearchTask";
import TaskActions from "../TaskActions/TaskActions";
import TaskList from "../TaskList/TaskList";

export default function TaskBoard() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchTask></SearchTask>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions></TaskActions>
          <TaskList></TaskList>
        </div>
      </div>
    </section>
  );
}
