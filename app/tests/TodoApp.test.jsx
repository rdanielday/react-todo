const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jquery = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
});
