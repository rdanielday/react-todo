const React = require('react');

const AddTodo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Add Todo Item" />
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  },
});

module.exports = AddTodo;
