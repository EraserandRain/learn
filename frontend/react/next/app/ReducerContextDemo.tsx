import React, { useReducer, useState } from 'react';

interface Task {
    id: number;
    text: string;
    done: boolean;
}
interface TaskProps {
    task: Task;
    onChange: (task: Task) => void;
    onDelete: (taskId: number) => void;
}
interface AddTaskProps {
    onAddTask: (text: string) => void
}
interface TaskListProps {
    tasks: Task[]
    onChangeTask: (task: Task) => void
    onDeleteTask: (taskId: number) => void
}
interface Action {
    type: string
    id?: number
    text?: string
    task?: Task
}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

const Task: React.FC<TaskProps> = ({ task, onChange, onDelete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => onChange(task)}
            />
            <span>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [newTaskText, setNewTaskText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(e.target.value);
    };

    const handleAddClick = () => {
        if (newTaskText.trim() !== '') {
            onAddTask(newTaskText);
            setNewTaskText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newTaskText}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};


const TaskList: React.FC<TaskListProps> = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onChange={onChangeTask}
                    onDelete={onDeleteTask}
                />
            ))}
        </ul>
    );
};

const tasksReducer: React.Reducer<Task[], Action> = ( tasks, action ) => {
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

export default function ReducerContextDemo() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    let nextId = 3
    const handleAddTask = (text: string) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    const handleChangeTask = (task: Task) => {
        dispatch({
            type: 'changed',
            task: task,
        });
    }

    const handleDeleteTask = (taskId: number) => {
        dispatch({
            type: 'deleted',
            id: taskId,
        });
    }

    return (
        <>
            <p>Prague itinerary</p>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}
