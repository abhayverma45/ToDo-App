import React, { useEffect, useState } from "react";
import Logo from "./images/todologo.jpg";
import "../App.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

// GETTING DATA

const getLocalItem = () => {
  let list = localStorage.getItem('list');
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const Todo = () => {
  const [Data, setData] = useState("");
  const [items, setitems] = useState(getLocalItem());

  const additems = () => {
    if (!Data) {
    } else {
      setitems([...items, Data]);
      setData("");
    }
  };

  //   delete
  const handleDelete = (id) => {
    console.log(id);
    const update = items.filter((element, ind) => {
      return ind !== id;
    });
    setitems(update);
  };

  //   remove all

  const handleRemove = () => {
    setitems([]);
  };

  //   local storage

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src={Logo}
              alt="logo"
              style={{ height: "60px", width: "80px", borderRadius: "10%" }}
            />
            <figcaption>add your todo list</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="📝...add "
              value={Data}
              onChange={(e) => setData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Items"
              onClick={additems}
            >
              <AddIcon />
            </i>
          </div>
          <div className="showItems">
            {items.map((element, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{element}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => handleDelete(ind)}
                  >
                    <DeleteSharpIcon />
                  </i>
                </div>
              );
            })}
            <div className="showItems">
              <button
                className="btn effect04"
                data-sm-link-text="Remove All"
                onClick={handleRemove}
              >
                <span> Check list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
