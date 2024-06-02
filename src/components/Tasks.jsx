import Task from "./Task"

const tasks = [
    {id:1, taskTodo:'Create Guest Experience mobile check-in' , status:'not completed'},
    {id:2, taskTodo:'Document current CI/CD process' , status:'not completed'},
    {id:3, taskTodo:'Perform Code Review for final Pillow-Talk Release' , status:'not completed'},
    {id:4, taskTodo:'Implement new color Palette from Design Team' , status:'not completed'},
    {id:5, taskTodo:'Fix Image uploading process for guest check-in' , status:'not completed'},
    {id:6, taskTodo:'Provide on-boarding documentation' , status:'not completed'}
]


function Tasks(){
    return(
        <div>
            <div className="flex flex-col text-white">
                <h3 className="text-center py-3 text-xl">Chores ToDo List</h3>
                <Task task={tasks[0].taskTodo}/>
                <Task task={tasks[1].taskTodo}/>
                <Task task={tasks[2].taskTodo}/>
                <Task task={tasks[3].taskTodo}/>
                <Task task={tasks[4].taskTodo}/>
                <Task task={tasks[5].taskTodo}/>
                <hr />
                <h3 className="text-center py-2 text-xl">Done : 0</h3>
            </div>
        </div>
    )

}

export default Tasks