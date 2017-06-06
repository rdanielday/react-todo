const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');
const expect = require('expect');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Wash the car',
    },
    {
      id: 2,
      text: 'Walk the dog',
    }];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render no todos message if there are no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
