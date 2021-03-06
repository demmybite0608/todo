import React from "react";

export default class TodoItem extends React.Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button
          className="removeTodo"
          onClick={e => {
            this.removeTodo(this.props.id);
          }}
        >
          delete
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}
