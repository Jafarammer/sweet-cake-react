import React from "react";

function CheckBox(props) {
  const { type: inputType, label: labelInput } = props;
  return (
    <>
      <div className="form-check px-5 mx-5 mb-5">
        <input
          className="form-check-input ms-1"
          type={inputType}
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label ms-3" for="flexCheckDefault">
          {labelInput}
        </label>
      </div>
    </>
  );
}

export default CheckBox;
