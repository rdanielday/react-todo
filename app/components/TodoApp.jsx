const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
        },
        {
          id: 2,
          text: 'Rake the yard',
        },
        {
          id: 3,
          text: 'Do laundry',
        },
        {
          id: 4,
          text: 'Wash the car',
        },
      ],
    };
  },
  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  },
});

module.exports = TodoApp;
