import axios from "axios";
import React, { useState } from "react";
import Accordion from "./Accordion";
import Lesson from "./Lesson";

function Chapter(props) {
  const { item, index } = props;
  const [lessonObj, setLesson] = useState([]);
  const [lessonID, setLessonID] = useState(0);
  const callingChapter = () => {
    axios
      .get(`http://localhost:4000/api/book/maths/section/${item.id}`)
      .then(chapterdata => {
        console.log("this id was clicked", item.id);
        setLessonID({ lessonID: item.id });
        setLesson({ lessonObj: chapterdata.data.response[item.id] });
      })
      .catch(err => console.log(err));
  };

  return (
    <div
      key={item.sequenceNO}
      style={{ display: "flex", justifyContent: "flex-start" }}
      onClick={callingChapter}
    >
      {item ? <Accordion item={item} index={index} content="parmar" /> : null}
      <span style={{ padding: "0 1rem" }}>{index + 1}</span>
      <span style={{ color: "grey" }}>{item.title}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1rem"
        }}
      >
        {lessonObj && lessonObj.lessonObj
          ? lessonObj.lessonObj.map((lessonItem, index) => (
              <Lesson lesson={lessonItem} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Chapter;
