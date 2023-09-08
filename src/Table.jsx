import React from "react";

const Table = ({
  toDoList,
  handleDelete,
  handleUp,
  handleDown,
  handleEdit,
}) => {
  console.log(toDoList, handleDelete, "props");
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">To do</th>
              <th scope="col">LastUpdate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {toDoList ? (
              toDoList.map((task, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{task}</td>
                    <td>09.01.2023</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary text-black"
                        onClick={() => handleEdit(i)}
                      >
                        Edit{" "}
                        <span style={{ color: "#fff", fontWeight: "bold" }}>
                          &rarr;
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger text-black"
                        onClick={() => handleDelete(i)}
                      >
                        Delete{" "}
                        <span style={{ color: "#fff", fontWeight: "bold" }}>
                          &larr;
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-success text-black"
                        onClick={() => handleUp(i)}
                      >
                        Up{" "}
                        <span style={{ color: "#fff", fontWeight: "bold" }}>
                          &uarr;
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-success text-black"
                        onClick={() => handleDown(i)}
                      >
                        Down{" "}
                        <span style={{ color: "#fff", fontWeight: "bold" }}>
                          &darr;
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1 className="text-danger">
                List is Empty, Please add your List
              </h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
