import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Accordion.css";
import Lesson from "./Lesson";

function Accordion(props) {
  const { item, index } = props;
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
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

  useEffect(callingChapter, []);
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    callingChapter();
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {item && item ? (
          <>
            <span className="accordion_index">{index + 1}</span>
            <p className="accordion__title">{item.title}</p>
          </>
        ) : null}
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div style={{ listStyle: "circle" }}>
          {lessonObj && lessonObj.lessonObj ? (
            lessonObj.lessonObj.map((lessonItem, index) => (
              <Lesson lesson={lessonItem} />
            ))
          ) : (
            <p>Lessons are not available right now</p>
          )}
        </div>
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
