import React from "react";

const ChatList = (props) => {
  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action bg-dark text-light"
      >
        <div className="d-flex align-items-start">
          <img
            src={props.src}
            className="rounded-circle mt-1"
            width="40"
            height="40"
          />
          <div className="flex-grow-1 ms-3 text-start">
            <p className="m-0 fw-bold">{props.user}</p>
            <div>{props.messages}</div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ChatList;
