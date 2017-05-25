const React = require('react');
const ReactDOM = require('react-dom');
<<<<<<< HEAD
const expect = require('expect');
const jquery = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
=======
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');
const expect = require('expect');

const TodoList = require('TodoList');
const Todo = require('Todo');
>>>>>>> 540f988e0991097319788c53295f999f20319fef

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
<<<<<<< HEAD
  });

  it('should render one todo component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Wash car',
    },
    {
      id: 2,
      text: 'Walk dog',
    },
    ];
=======
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
>>>>>>> 540f988e0991097319788c53295f999f20319fef
  });
});
