import React from "react";
import TodoList from "./TodoList/TodoList";

export default function Todo() {
  return (
    <>
      <div className="wrapper flex justify-center items-center min-h-screen flex-col">
        <div className="card w-[500px] lg:w-[800px] h-fit relative overflow-hidden bg-slate-200 shadow-lg rounded-lg p-5">
          <div className="card-heading bg-indigo-500 text-white flex justify-center items-center py-10 w-full absolute left-0 top-0">
            <h1 className="text-3xl">Todo List</h1>
          </div>
          <div className="card-content mt-28">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}
