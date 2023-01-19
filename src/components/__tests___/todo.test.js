import { render, screen, cleanup } from "@testing-library/react";
// These come from the testing library in React
import Todo from "../todo";
// We need to render our component in order to test it. In order to do so, we got back to the previous directory 'components' and and then import the todo component. 


test("should render non-completed todo component", () => {
  const todo = { id: 1, title: "wash dishes", completed: false }
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-1');
  // Screen is used to retrieve a component from the tree using its test id. We use .getByTestId to test the individual ID that we provided to the component that we created.

  // next we create some assertions on the test 

  expect(todoElement).toBeInTheDocument();
  // The toBeInTheDocument() function asserts where or not the element is present in the document or not 
  expect(todoElement).toHaveTextContent('wash dishes');
  // The .toHaveTextContent() function checks whether the given element has text content or not. When a string argument is passed through, it will perform a partial case-sensitive math to the element content.


});

test("should render completed todo component", () => {
  const todo = { id: 2, title: "make dinner", completed: true }
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-2');
  // Screen is used to retrieve a component from the tree using its test id. We use .getByTestId to test the individual ID that we provided to the component that we created.

  // next we create some assertions on the test 

  expect(todoElement).toBeInTheDocument();
  // The toBeInTheDocument() function asserts where or not the element is present in the document or not 
  expect(todoElement).toHaveTextContent('make dinner');
  // The .toHaveTextContent() function checks whether the given element has text content or not. When a string argument is passed through, it will perform a partial case-sensitive math to the element content.


});

