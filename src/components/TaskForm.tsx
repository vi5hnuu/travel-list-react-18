import { ChangeEvent, useState } from "react";
import { TaskModel } from "../model/task-model";

export function TaskForm({ onTaskAdd }: { onTaskAdd: (task: TaskModel) => void }) {
  const [taskData, setTaskData] = useState({ count: 1, itemName: "" });

  function onAddTaskHandle() {
    const task: TaskModel = {
      id: Date.now(),
      completed: false,
      count: taskData.count,
      itemName: taskData.itemName,
    };
    onTaskAdd(task);
    setTaskData({ count: 1, itemName: "" });
  }

  return (
    <form className="flex flex-col gap-4 lg:flex-row items-center justify-center bg-burnt-orange py-4">
      <p className="text-sm mr-6">What do you need for your 😍 trip ?</p>
      <div className="flex  items-center gap-2">
        <input
          className="border-none outline-none focus:ring-2 focus:ring-cocoa-bean px-4 py-2  text-xs rounded-full bg-pale-peach w-24"
          type="number"
          id="item-count"
          placeholder="1"
          value={taskData.count}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTaskData({ ...taskData, count: +event.target.value })}
        />
        <input
          className="border-none outline-none focus:ring-2 å focus:ring-cocoa-bean px-4 py-2  text-xs rounded-full bg-pale-peach"
          type="text"
          id="item-count"
          placeholder="laptop"
          value={taskData.itemName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTaskData({ ...taskData, itemName: event.target.value })
          }
        />
        <button
          type="button"
          disabled={taskData.count <= 0 || !taskData.itemName?.trim().length}
          onClick={onAddTaskHandle}
          className="hover:scale-[1.03] shadow-sm transition-all text-xs rounded-full px-6 py-2 bg-aqua-marine"
        >
          Add
        </button>
      </div>
    </form>
  );
}
