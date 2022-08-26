import React from "react";

function InputText(props) {
  const {
    label: labelInput,
    type: inputType,
    placeholder: inputPlaceholder,
    for: inputFor,
    id: inputId,
    value: inputValue,
  } = props;
  return (
    <>
      <div className="mb-3 px-5 mx-5">
        <label for={inputFor} className="form-label mb-3">
          {labelInput}
        </label>
        <input
          type={inputType}
          className="form-control py-3 ps-4"
          id={inputId}
          placeholder={inputPlaceholder}
          value={inputValue}
        />
      </div>
    </>
  );
}

export default InputText;
