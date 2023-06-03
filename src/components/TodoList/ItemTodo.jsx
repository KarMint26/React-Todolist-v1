import React from "react";

export default function ItemTodo({
  dataFromTodo,
  handleDeleteButton,
  handleUpdateButton,
}) {
  const [buttonTwo, setButtonTwo] = React.useState(false);
  const [updateData, setUpdateData] = React.useState("");

  return (
    <li
      key={dataFromTodo.id}
      className="flex justify-between items-center bg-white px-4 ps-7 py-3 overflow-hidden rounded-md shadow-lg"
      style={{ boxShadow: "inset 8px 0 0 rgb(99,102,241)" }}
    >
      {buttonTwo ? (
        <>
          <form>
            <input
              type="text"
              value={updateData}
              className="w-[550px] input-field edit-mode outline-none text-slate-700"
              disabled={false}
              placeholder="update data here..."
              onChange={({ target }) => setUpdateData(target.value)}
              autoComplete="off"
            />
          </form>
          <div className="button-field flex gap-3">
            <button
              className="btn-1 btn btn-save"
              onClick={() => {
                handleUpdateButton(dataFromTodo.id, updateData);
                setButtonTwo((prev) => !prev);
              }}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn-2 btn btn-cancel"
              onClick={() => setButtonTwo((prev) => !prev)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              value={dataFromTodo.todo}
              className="w-[550px] input-field outline-none text-slate-700"
              disabled={true}
              autoComplete="off"
            />
          </form>
          <div className="button-field flex gap-3">
            <button
              className="btn-1 btn btn-edit"
              onClick={() => {
                setButtonTwo((prev) => !prev);
                setUpdateData("");
              }}
            >
              Edit
            </button>
            <button
              type="submit"
              className="btn-2 btn btn-delete"
              onClick={() => {
                handleDeleteButton(dataFromTodo.id);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
