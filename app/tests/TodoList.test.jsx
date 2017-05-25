const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jquery = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
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
  });
});
