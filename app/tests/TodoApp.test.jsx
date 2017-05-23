const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');
const expect = require('expect');

const TodoApp = require('Todo');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
   }); 
});
