import React, { ReactNode, createContext, useContext, useReducer, useState } from 'react';

interface Task {
    id: number;
    text: string;
    done: boolean;
}
interface Action {
    type: string
    id?: number
    text?: string
    task?: Task
}
interface TasksProviderProps {
    children: ReactNode
}
const initialTasks: Task[] = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

const TasksContext = createContext<Task[] | null>(null)
const TasksDispatchContext = createContext<React.Dispatch<Action>>(()=>{})
let nextId = 3

const Task: React.FC<{ task: Task }> = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useContext(TasksDispatchContext)
    let taskContent = isEditing ? (
        <>
            <input
                value={task.text}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            text: e.target.value
                        }
                    })
                }} />
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    ) : (
        <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    )
    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    })
                }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                })
            }}>Delete</button>
        </label>
    );
};

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext)

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setText(e.target.value);
                }}
                placeholder="Add a new task"
            />
            <button onClick={() => {
                setText('')
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                })
            }}>Add</button>
        </div>
    );
};


const TaskList = () => {
    const tasks = useContext(TasksContext)
    return (
        <ul>
            {tasks?.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};

const tasksReducer: React.Reducer<Task[], Action> = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id!,
                    text: action.text!,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((t) => (t.id === action.task!.id) ? action.task! : t);
        }
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export default function ReducerContextDemo() {
    return (
        <TasksProvider>
            <p>Prague itinerary</p>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
