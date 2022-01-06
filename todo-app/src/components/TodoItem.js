import React from "react";

const TodoItem = props => {
  return (
    <div className='card' key={props.element.id}>
      {props.element.title}
    </div>
  );
};

export default TodoItem;
