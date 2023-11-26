import { Task } from "./Task";
import { TaskModel } from "./../model/task-model";
import { filterType } from "./../model/types";
import { ChangeEvent, useEffect, useState } from "react";

export function TaskList({
  tasks,
  onTaskDelete,
  onTaskStatusChange,
}: {
  tasks: TaskModel[];
  onTaskDelete: (id: number) => void;
  onTaskStatusChange: (id: number, completed: boolean) => void;
}) {
  const [filterValue, setFiltervalue] = useState<filterType>("All");
  const [filteredTasks, setFilteredTask] = useState<TaskModel[]>([]);

  useEffect(() => {
    console.log("running");
    setFilteredTask(
      filterValue === "All"
        ? tasks
        : filterValue === "Completed"
        ? tasks.filter((task) => task.completed)
        : tasks.filter((task) => !task.completed)
    );
  }, [filterValue, tasks]);

  return (
    <>
      <div className="sticky top-0 z-10 flex gap-4 items-center justify-end px-6 pt-3">
        <div className="hover:scale-[1.03] transition-all opacity-25 hover:opacity-100 rounded-full flex items-center px-4 py-1 bg-saffron-gold">
          <select
            className="outline-none bg-saffron-gold text-sm "
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setFiltervalue(event.target.value as filterType)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
      <ul className="grid p-4 list-none sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {filteredTasks.map((task: TaskModel) => (
          <Task key={task.id} task={task} onStatusChange={onTaskStatusChange} onTaskDelete={onTaskDelete} />
        ))}
      </ul>
    </>
  );
}
