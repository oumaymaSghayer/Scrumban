import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Modal } from "react-bootstrap";
import Column from "./components/Column";
import add from "./icons/add.svg";
import moon from "./icons/half-moon.svg";
import sun from "./icons/sun.svg";
import Popup from "./components/Popup";
function App() {
  const [darkTheme, setDarktheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  const [data, setData] = useState([
    {
      columnName: "Todo",
      tasks: ["Build api", "Add dark mode"],
    },
    {
      columnName: "Doing",
      tasks: [
        "Design interface",
        "Choose color palette for both themes, dark theme blue",
      ],
    },
    {
      columnName: "Done",
      tasks: ["Build new react project", "Install css library"],
    },
  ]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const addList = () => {
    if (name != "") {
      setData([...data, { columnName: name, tasks: [] }]);
    }
    setName("");
    handleClose();
  };
  const addTask = (colName, newTask) => {
    let obj = data.filter((e) => e.columnName == colName);
    obj[0].tasks.push(newTask);
  };
  const switchDarkTheme = () => {
    setDarktheme(true);
    localStorage.setItem("darkTheme", true);
  };
  const switchLightTheme = () => {
    setDarktheme(false);
    localStorage.setItem("darkTheme", false);
  };
  return (
    <div className={darkTheme ? "App-dark" : "App"}>
      <Navbar className={darkTheme ? "navbar-dark" : "navbar"}>
        <Navbar.Brand href="#">ALLOcloud</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {darkTheme ? (
            <img
              src={sun}
              className="icon"
              onClick={() => switchLightTheme()}
            />
          ) : (
            <img
              src={moon}
              className="icon"
              onClick={() => switchDarkTheme()}
            />
          )}
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        {data.map((e, i) => {
          return (
            <Column
              darkTheme={darkTheme}
              addTask={addTask}
              columnName={e.columnName}
              tasks={e.tasks}
              key={i}
            />
          );
        })}
      </div>

      <div className="chat" onClick={handleShow}>
        <img className="icon" src={add} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Popup
          handleClose={handleClose}
          fieldname={name}
          handleChange={handleChange}
          add={addList}
          target="List"
        />
      </Modal>
    </div>
  );
}

export default App;
