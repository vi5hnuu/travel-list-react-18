import { ChangeEvent } from "react";
import { TaskModel } from "./../model/task-model";

export function Task({
  task,
  onStatusChange,
  onTaskDelete,
}: {
  task: TaskModel;
  onStatusChange: (id: number, completed: boolean) => void;
  onTaskDelete: (id: number) => void;
}) {
  return (
    <li
      title={`${task.count} ${task.itemName}/s`}
      className="relative flex items-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] transition-all bg-white px-2 py-1 rounded-md"
    >
      <input
        type="checkbox"
        id={`${task.id}`}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onStatusChange(task.id, event.target.checked)}
        checked={task.completed}
        className="accent-burnt-orange w-6 h-6"
      ></input>
      <label
        className={`select-none text-[1.3rem] flex-1 font-Quicksand line-clamp-1 mr-6 ${
          task.completed ? "line-through" : ""
        }`}
        htmlFor={`${task.id}`}
      >
        {`${task.count} ${task.itemName}${task.count > 1 ? "'s" : ""}`}
      </label>
      <button
        onClick={() => onTaskDelete(task.id)}
        className="absolute top-1 capitalize right-2 text-sm hover:scale-[1.2] transition-all"
      >
        ❌
      </button>
    </li>
  );
}
