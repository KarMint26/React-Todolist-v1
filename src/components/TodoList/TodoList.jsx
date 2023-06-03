import React from "react";
import {
  getDataFromAPI,
  postDataAPI,
  deleteDataAPI,
  putDataAPI,
} from "../../api";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ItemTodo from "./ItemTodo";
import Swal from "sweetalert2";

export default function TodoList() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [todo, setTodo] = React.useState("");

  const showAlertFailed = () => {
    Swal.fire({
      title: "Invalid Input",
      text: "Expected More Than 2 Characters",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#EF4444",
    });
  };

  const showAlertSuccess = (q) => {
    Swal.fire({
      title: "Great👌",
      text: q,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#6366F1",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length > 2) {
      const dataPost = { todo };
      postDataAPI(dataPost);
      setTodo("");
      setCount((prev) => (prev += 1));
      showAlertSuccess("Add Todo Success");
    } else {
      setTodo("");
      showAlertFailed();
    }
  };

  const handleDelete = (id) => {
    deleteDataAPI(id);
    setCount((prev) => (prev -= 1));
    showAlertSuccess("Delete Todo Success");
  };

  const handleUpdate = (id, data) => {
    if (data.length > 2) {
      const dataUpdate = { todo: data };
      putDataAPI(id, dataUpdate);
      setCount((prev) => (prev += 1));
      showAlertSuccess("Update Data Success");
    } else {
      showAlertFailed();
    }
  };

  React.useEffect(() => {
    getDataFromAPI()
      .then((res) => {
        setData(res);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
        setLoading(false);
      });
  }, [count]);
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-center p-2 px-0 gap-2"
          >
            <input
              type="text"
              className="rounded-2xl text-slate-600 bg-white outline-none border-none py-2 px-4 w-[690px]"
              placeholder="add todo..."
              value={todo}
              onChange={({ target }) => setTodo(target.value)}
            />
            <button type="submit" className="btn btn-add">
              Add
            </button>
          </form>
          <ul className="flex flex-col justify-center gap-3 mt-4">
            {data.map((res) => {
              return (
                <ItemTodo
                  handleDeleteButton={handleDelete}
                  handleUpdateButton={handleUpdate}
                  dataFromTodo={res}
                  key={res.id}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
