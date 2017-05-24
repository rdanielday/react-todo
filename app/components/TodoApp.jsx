const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo(text) {
    alert(`new todo: ${text}`);
  },
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowercase(),
    });
  },
  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  },
});

module.exports = TodoApp;
