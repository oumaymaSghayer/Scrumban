import React, { useState } from "react";
import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Modal } from "react-bootstrap";
import Task from "./Task";
import addIcon from "./../icons/add.svg";
import Popup from "./Popup";
import close from "./../icons/close.svg";
import check from "./../icons/check-mark.svg";
function Column({ columnName, tasks, addTask, darkTheme }) {
  const [showModal, setShowmodal] = useState(false);
  const [taskName, setTaskname] = useState("");
  const handleClose = () => setShowmodal(false);
  const handleShow = () => setShowmodal(true);
  const handleChange = (event) => {
    setTaskname(event.target.value);
  };
  const add = () => {
    addTask(columnName, taskName);
    setTaskname("");
    handleClose();
  };
  return (
    <Card className={darkTheme ? "card-dark column " : "column"}>
      <div className="header">
        <div className="title">{columnName}</div>
        <div className="add-task">
          <img className="icon" src={addIcon} onClick={handleShow} />
        </div>
      </div>
      <div className="body">
        {tasks.map((e, i) => {
          return <Task task={e} key={i} darkTheme={darkTheme} />;
        })}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Popup
          handleClose={handleClose}
          fieldname={taskName}
          handleChange={handleChange}
          add={add}
          target="Task"
          darkTheme={darkTheme}
        />
      </Modal>
    </Card>
  );
}

export default Column;
