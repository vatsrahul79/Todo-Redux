import React from "react";
import { connect } from "react-redux";
import { removeFromList, toggleStatus } from "../redux/action";

const TodoItem = ({ title, id, status, toggleStatus, removeFromList }) => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <p>{title}</p>
    <button onClick={() => toggleStatus(id)}>
      {status ? "Done" : "Not Done"}
    </button>
    <button onClick={() => removeFromList(id)}>Remove</button>
  </div>
);

function TodoList({ todo, toggleStatus, removeFromList }) {
  return (
    <div style={{ textAlign: "center" }}>
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          removeFromList={removeFromList}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  toggleStatus: (id) => dispatch(toggleStatus(id)),
  removeFromList: (id) => dispatch(removeFromList(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
