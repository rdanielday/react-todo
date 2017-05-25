const React = require('react');
const ReactDOM = require('react-dom');
<<<<<<< HEAD
const expect = require('expect');
const jquery = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');
=======
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');
const expect = require('expect');

const TodoApp = require('Todo');
>>>>>>> 540f988e0991097319788c53295f999f20319fef

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
<<<<<<< HEAD
  });
=======
   }); 
>>>>>>> 540f988e0991097319788c53295f999f20319fef
});
