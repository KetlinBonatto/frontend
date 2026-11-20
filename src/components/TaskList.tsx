
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface Task {
    id: number;
    title: string;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("donafrost-tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState("");
    const { theme } = useTheme();

    useEffect(() => {
        localStorage.setItem("donafrost-tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Lista de tarefas ativa");
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    function addTask() {
        if (newTask.trim() === "") return;

        const task: Task = {
            id: Date.now(),
            title: newTask
        };

        setTasks([...tasks, task]);
        setNewTask("");
    }

    function removeTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <section className={`mx-auto my-10 max-w-2xl rounded-xl p-6 shadow-lg ${
            theme === "light"
                ? "bg-white text-gray-800"
                : "bg-gray-800 text-white"
        }`}>
            <h2 className="mb-4 text-2xl font-bold">
                Minha lista de tarefas
            </h2>

            <p className="mb-4 text-sm text-gray-500">
                Tema atual: {theme === "light" ? "Claro" : "Escuro"}
            </p>

            <div className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                    placeholder="Digite uma tarefa"
                    aria-label="Nova tarefa"
                    className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="button"
                    onClick={addTask}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                >
                    Adicionar
                </button>
            </div>

            <ul className="space-y-3">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between gap-3 rounded-lg bg-gray-100 p-3 text-gray-800"
                    >
                        <span className="break-words">{task.title}</span>

                        <button
                            type="button"
                            onClick={() => removeTask(task.id)}
                            className="shrink-0 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
