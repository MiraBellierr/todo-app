import React from "react";
import TodoItem from "./TodoItem";
import items from "./items.json";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: items
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const newTodos = prevState.todos.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }

                return item;
            });

            return {
                todos: newTodos
            }
        })
     }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App;