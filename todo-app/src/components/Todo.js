import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  state = {
    elements: [
      { id: "345678", title: "Work out", isCompleted: false },
      { id: "123458", title: "Sleeping", isCompleted: true },
      { id: "111832", title: "Coding", isCompleted: false },
    ],
    inputValue: "",
  };

  markCompleted(id) {
    const index = this.state.elements.findIndex(x => x.id === id);
    const newElements = this.state.elements;
    newElements[index].isCompleted = true;

    this.setState({ elements: newElements });
  }

  addItem() {
    const item = {
      id: Math.random(),
      title: this.state.inputValue,
    };
    const newElements = [item, ...this.state.elements];
    this.setState({ elements: newElements });
  }

  inputHandler(event) {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
  }

  render() {
    const elements = this.state.elements.map(element => {
      return (
        <TodoItem
          element={element}
          markClicked={this.markCompleted.bind(this)}
        />
      );
    });
    return (
      <div>
        Hello To Do App
        <input
          type='text'
          value={this.state.inputValue}
          onChange={this.inputHandler}
        />
        <button onClick={this.addItem.bind(this)}>Add to list</button>
        {elements}
      </div>
    );
  }
}

export default Todo;
