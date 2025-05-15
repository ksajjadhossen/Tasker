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
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleAddEditTask(task, isAdd) {
    if (isAdd) {
      // Add new task
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...task, id: crypto.randomUUID() },
      ]);
    } else {
      // Edit existing task
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
    }
    setShowAddTaskModal(false);
    setTaskToEdit(null);
  }

  function handleEditTask(task) {
    setTaskToEdit(task);
    setShowAddTaskModal(true);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddTaskModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToEdit={taskToEdit}
        ></AddTaskModal>
      )}
      <div className="container">
        <SearchTask></SearchTask>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => {
              setTaskToEdit(null);
              setShowAddTaskModal(true);
            }}
          ></TaskActions>
          <TaskList tasks={tasks} onEdit={handleEditTask}></TaskList>
        </div>
      </div>
    </section>
  );
}
