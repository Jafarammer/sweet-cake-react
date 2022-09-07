import React from "react";
// css
import styles from "../../css/Home.module.css";

function HeadSection(props) {
  const { className: inputClassName, label: inputLabel } = props;
  return (
    <>
      <div className={inputClassName}>
        <div className={`col-1 ${styles.heading_content}`}></div>
        <div className="col-11 my-5 px-5">
          <h1>{inputLabel}</h1>
        </div>
      </div>
    </>
  );
}

export default HeadSection;
