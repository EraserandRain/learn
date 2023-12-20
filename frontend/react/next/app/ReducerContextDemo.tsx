import { useReducer, useState } from 'react';

const Task = ({ task, onChange, onDelete }) => {
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

const AddTask = ({ onAddTask }) => {
    const [newTaskText, setNewTaskText] = useState('');

    const handleInputChange = (e) => {
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


const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
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


export default function ReducerContextDemo() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'changed',
            task: task,
        });
    }

    const handleDeleteTask = (taskId) => {
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

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
