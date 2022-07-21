import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodos, completedTodos } from "../Reducers/todoReducers";
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    completeTodo: (id) => dispatch(completedTodos(id)),
  };
};

const Todo = (props) => {
  const [inputData, setInputData] = useState("");
  const [sort, setSort] = useState("incompleted");
//   console.log("props from store", props);
  return (
    <>
      <div className="child-div">
        <h2>Add Your Todos here</h2>
      </div>
      <br />
      <div className="add-items">
        <label htmlFor="add-todo">
          Todo's :
          <input
            type="text"
            placeholder="Add your todo task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </label>
        <button
          type="button"
          className="btn btn-primary ml-3"
          onClick={() =>
            props.addTodo({
              id: Math.floor(Math.random() * 1000),
              item: inputData,
              completed: false,
            })
          }
        >
          Add Task
        </button>
        <br />

        <ul>
          {props.todos.map((item) => {
            return (
              <li key={item.id}>
                {item.item}
                <button
                  className="btn btn-success ml-3"
                  onClick={() => props.completeTodo(item.id)}
                >
                  Complete{" "}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn btn-primary ml-3" onClick={() => setSort("all")}>
          {" "}
          All Todos
        </button>
        <button
          className="btn btn-success ml-3"
          onClick={() => setSort("completed")}
        >
          {" "}
          Completed
        </button>
        <button
          className="btn btn-danger ml-3"
          onClick={() => setSort("incomplete")}
        >
          {" "}
          Incompleted
        </button>

        <div className="todo-list-items">
          <ul>
            
            {props.todos.length > 0 && sort === "incomplete"
              ? props.todos.map((item) => {
                  return item.completed === false && <li key={item.id}>{item.item}</li>;
                })
              : null}
              <br />
          </ul>

          <ul>
            
            {props.todos.length > 0 && sort === "all"
              ? props.todos.map((item) => {
                  return <li key={item.id}>{item.item}</li> ;
                })
              : null}
              <br />
          </ul>

          <ul>
            
            {props.todos.length > 0 && sort === "completed"
              ? props.todos.map((item) => {
                  return<li key={item.id}>{item.item}</li> ;
                })
              : null}
              <br />
          </ul>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
