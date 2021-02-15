import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import edit from "./../icons/draw.svg";
import trash from "./../icons/trash.svg";

function Task({ task, darkTheme }) {
  return (
    <Card
      className={darkTheme ? "taskcard card-dark hovercard-dark" : "taskcard"}
    >
      <div className="tasktext">{task}</div>
      <div className="taskicons ">
        <img className="icon " src={edit} />
        <img className="icon " src={trash} />
        <span class="tooltiptext">Coming soon</span>
      </div>
    </Card>
  );
}

export default Task;
