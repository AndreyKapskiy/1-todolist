import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {

    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "hlml css", isDone: true},
        {id: 2, title: "es6 ts", isDone: true},
        {id: 3, title: "REACT", isDone: false}
    ]

    const tasks_2: Array<TaskType> = [
        {id: 1, title: "h", isDone: true},
        {id: 2, title: "e", isDone: false},
        {id: 3, title: "R", isDone: false}
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>

        </div>
    );
}

export default App;
