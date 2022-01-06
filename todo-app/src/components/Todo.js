import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  state = {
    elements: [
      { id: "345678", title: "Work out", isCompleted: false },
      { id: "123458", title: "Sleeping", isCompleted: true },
      { id: "111832", title: "Coding", isCompleted: false },
    ],
  };

  markCompleted(id) {
    const index = this.state.elements.findIndex(x => x.id == id);
    const newElements = this.state.elements;
    newElements[index].isCompleted = true;

    this.setState({ elements: newElements });
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
    return <div> Hello To Do App {elements}</div>;
  }
}

export default Todo;
