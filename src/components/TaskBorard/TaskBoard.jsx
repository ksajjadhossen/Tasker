import { useState } from "react";
import SearchTask from "../SearchTask/SearchTask";
import TaskActions from "../TaskActions/TaskActions";
import TaskList from "../TaskList/TaskList";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
const defaultTasks = {
  id: crypto.randomUUID(),
  title: "Task 1",
  description: "Description for Task 1",
  tags: ["tag1", "tag2"],
  priority: "High",
  isFavorite: true,
};
export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  // const [taskToEdit, setTaskToEdit] = useState(null);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setShowAddTaskModal(false);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddTaskModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <SearchTask></SearchTask>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowAddTaskModal(true)}
          ></TaskActions>
          <TaskList tasks={tasks}></TaskList>
        </div>
      </div>
    </section>
  );
}
