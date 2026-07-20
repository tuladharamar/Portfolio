

const TaskList = () => {
    const tasks = [
    { title: "Create Account", done: true },
    { title: "Update Roadmap Progress", done: true },
    { title: "Setup Public Profile", done: true },
    { title: "Complete your first project", done: false },
    { title: "Invite your Friends", done: false },
  ];
  return (
   <div className="bg-gray-100 rounded-[40px] p-10 w-full max-w-md">
      <ul className="space-y-5">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`text-2xl ${
              task.done
                ? "line-through text-gray-400"
                : "text-black"
            }`}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList