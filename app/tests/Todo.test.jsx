const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jquery = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
