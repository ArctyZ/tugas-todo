import { FaTrashAlt } from "react-icons/fa";

function Task({ task }) {
  return (
    <div className="flex gap-4 justify-between items-center py-2">
      <input type="checkbox" id="task" className="appearance-none w-4 h-4 border-2 border-green-500 rounded-sm bg-gray-900 hover:cursor-pointer p-1" />
      <div className="w-full">
        <label id="task" className="text-left">
          {task}
        </label>
      </div>
      <button className="border-2 border-gray-400 p-2 rounded-md ">
        <FaTrashAlt size={12} className="text-red-500" />
      </button>
    </div>
  );
}

export default Task;
