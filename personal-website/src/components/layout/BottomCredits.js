import classes from "./BottomCredits.module.css";
import githubLogo from "../../extra/GitHub-Mark-32px.png";
import { Link } from "react-router-dom";

function BottomCredits() {
  return (
    <div className={classes.header}>
      made with ReactJS and Firebase
      <nav>
        <ul>
          <li>
              <a href="https://github.com/earlsab">
              ejqs &copy;2021
              </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomCredits;
