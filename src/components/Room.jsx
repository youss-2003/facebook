import React from "react";

function Room(props) {
  return (
    <>
      <div className="item">
        <div className="user">
          <div className="profile">
            <img src={props.img} alt />
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;
