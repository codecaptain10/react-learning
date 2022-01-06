import React from "react";

class Todo extends React.Component {
  state = {
    elements: [
      { id: "345678", title: "Work out" },
      { id: "123458", title: "Sleeping" },
      { id: "111832", title: "Coding" },
    ],
  };

  render() {
    const elements = this.state.elements.map(element => {
      return (
        <div className='card' key={element.id}>
          {element.title}
        </div>
      );
    });
    return <div> Hello To Do App {elements}</div>;
  }
}

export default Todo;
