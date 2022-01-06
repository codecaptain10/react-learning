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

  render() {
    const elements = this.state.elements.map(element => {
      return <TodoItem element={element} />;
    });
    return <div> Hello To Do App {elements}</div>;
  }
}

export default Todo;
