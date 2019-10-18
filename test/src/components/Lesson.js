import React from "react";

function Lesson(props) {
  const { lesson } = props;
  return (
    <div className="lesson_container">
      {lesson.status == "COMPLETE" ? (
        <div
          className="timeline__progress"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 10px"
          }}
        >
          <span className="timeline__bubble_complete"></span>
          <span>|</span>
        </div>
      ) : (
        <div className="timeline__progress">
          <span className="timeline__bubble_left"></span>
          <span>|</span>
        </div>
      )}
      <div className="lesson_title">{lesson.title}</div>
    </div>
  );
}

export default Lesson;
