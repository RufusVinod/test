// import "./App.css";
// import Table from "./Table.jsx";
// import React, { useState } from "react";

// function App() {
//   const [toDo, settoDo] = useState("");
//   const [toDoList, settoDoList] = useState(null);
//   const [Status, setStatus] = useState(false);
//   const [index, setindex] = useState(null);

//   const handleDelete = (i) => {
//     // console.log(i, "Del");
//     let newList = [...toDoList];
//     newList.splice(i, 1);
//     settoDoList(newList);
//   };

//   const handleUpdate = () => {
//     setStatus(false);
//     let newList = [...toDoList];
//     newList[index] = toDo;
//     settoDoList(newList);
//     settoDo("");
//   };

//   const handleEdit = (i) => {
//     setStatus(true);
//     setindex(i);
//     settoDo(toDoList[i]);
//   };

//   const handleUp = (i) => {
//     if (i === 0) {
//       alert("you have reached the upper limit");
//     } else {
//       let newList = [...toDoList];
//       let x = newList[i];
//       newList[i] = newList[i - 1];
//       newList[i - 1] = x;
//       settoDoList(newList);
//     }
//   };

//   const handleDown = (i) => {
//     if (i === toDoList.length - 1) {
//       alert("you have reached the lower limit");
//     } else {
//       let newList = [...toDoList];
//       let x = newList[i];
//       newList[i] = newList[i + 1];
//       newList[i + 1] = x;
//       settoDoList(newList);
//     }
//   };

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     settoDo(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (toDoList == null) {
//       settoDoList([toDo]);
//       settoDo("");
//     } else {
//       settoDoList([...toDoList, toDo]);
//       settoDo("");
//     }
//   };

//   return (
//     <div className="App">
//       <h1 className="text-2xl mt-10">TO DO LIST</h1>
//       <input
//         type="text"
//         placeholder="Enter your task"
//         className="mt-10 mx-4 p-4 border border-black
//         rounded-xl
//         "
//         onChange={handleChange}
//         value={toDo}
//       />
//       {!Status ? (
//         <button
//           type="button"
//           className="px-6 py-2 text-xl text-white bg-blue-500 rounded-xl border-black
//         hover:bg-blue-950"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       ) : (
//         <button
//           type="button"
//           className="px-6 py-2 text-xl text-white bg-blue-500 rounded-xl border-black
//         hover:bg-blue-950"
//           onClick={handleUpdate}
//         >
//           Update
//         </button>
//       )}

//       <Table
//         toDoList={toDoList}
//         handleDelete={handleDelete}
//         handleUp={handleUp}
//         handleDown={handleDown}
//         handleEdit={handleEdit}
//       />
//     </div>
//   );
// }

// export default App;

import React from "react";
import User from "./User.jsx";

const App = () => {
  return (
    <div>
      <User />
    </div>
  );
};

export default App;
