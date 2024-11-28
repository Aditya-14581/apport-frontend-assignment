import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";

const Card = ({ id, title, tag, status, priority, imageUrl }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";

  // Function to get the status icon
  const getStatusIcon = () => {
    switch (status) {
      case "Backlog":
        return <BiLoader style={{ fontSize: "14px" }} />;
      case "Todo":
        return <FaRegCircle style={{ fontSize: "13px", color: "#ddeded" }} />;
      case "In progress":
        return <BiAdjust style={{ fontSize: "14px", color: "#f2d750" }} />;
      case "Done":
        return <BsCheckCircleFill />;
      default:
        return <IoMdCloseCircleOutline />;
    }
  };

  // Function to get the priority icon
  const getPriorityIcon = () => {
    if (priority === 1 || priority === 2 || priority === 3) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-signal"
          viewBox="0 0 16 16"
        >
          <rect x="1" y="10" width="3" height="2" />
          <rect
            x="5"
            y="7"
            width="3"
            height="5"
            opacity={priority === 2 || priority === 3 ? 1 : 0.25}
          />
          <rect
            x="9"
            y="4"
            width="3"
            height="8"
            opacity={priority === 3 ? 1 : 0.25}
          />
        </svg>
      );
    } else if (priority === 4) {
      return <BsFillExclamationSquareFill />;
    }
    return <p>...</p>;
  };

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span className="color-grey" style={{ textTransform: "uppercase" }}>
          {id}
        </span>
        <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
          <img
            src={imageUrl || "https://imgs.search.brave.com/JRAT4QAYMcMK4STTbNniPu7_KdWvoEmfkNpyViwQDo8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NjIwNTcxNjgxNTQt/ODkzMDA3OTFhZDZl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1qQjhmR3h2/WjI4bE1qQmtaWE5w/WjI1bGNueGxibnd3/Zkh3d2ZIeDhNQT09.jpeg"}
            alt="UserImage"
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
          />
          <div className="showStatus"></div>
        </div>
      </div>

      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus && getStatusIcon()}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>

      <div className="cardTags">
        {!isPriority && <div className="tags color-grey">{getPriorityIcon()}</div>}

        {tag && tag.length > 0 ? (
          tag.map((element, index) => (
            <div key={index} className="tags color-grey">
              <span>•</span> {element}
            </div>
          ))
        ) : (
          <div className="tags color-grey">No tags available</div>
        )}
      </div>
    </div>
  );
};

export default Card;
