import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import close from "./../icons/close.svg";
import check from "./../icons/check-mark.svg";
function Popup({ handleClose, fieldname, handleChange, add, target }) {
  return (
    <div>
      <div className="modal-header">
        Add {target}
        <img className="icon" onClick={handleClose} src={close} />
      </div>
      <div className="modal-body">
        <input
          type="text"
          id="listName"
          name="listName"
          placeholder={target + " name.."}
          value={fieldname}
          onChange={handleChange}
        />
        <img className="check-icon" src={check} onClick={() => add()} />
      </div>
    </div>
  );
}

export default Popup;
