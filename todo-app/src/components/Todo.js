import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  state = {
    elements: [
      { id: "345678", title: "Work out", isCompleted: true },
      { id: "123458", title: "Sleeping", isCompleted: false },
      { id: "111832", title: "Coding", isCompleted: true },
    ],
  };

  render() {
    const elements = this.state.elements.map(element => {
      return <TodoItem element={element} />;
    });
    return <div> Hello To Do App {elements}</div>;
  }
}

export default Todo;
