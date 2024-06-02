function Addtask(){
    return (
        <div className="flex flex-col w-full">
            <label className="text-white text-sm font-semibold" >Add todo</label>
            <input type="text" name="task-item" className="text-white bg-gray-900 border-2 border-gray-700 rounded-lg my-2"/>
            <button className="w-fit font-bold text-sm rounded-lg bg-blue-400 py-2 px-3 hover:opacity-90 hover:scale-105 ease-in duration-200 ">ADD TASK</button>
        </div>
    )


}

export default Addtask