import React from "react";

function todo({todo}) {
  const {id, title, completed} = todo; // This pulls all of values of the todo object based on the hey names
  const h1 = <h1>{title}</h1>
  const text = completed ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>; // This will display the titles of the 
}

export default todo;