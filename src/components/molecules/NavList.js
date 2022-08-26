import React from "react";

function NavList(props) {
  const {
    className: inputClassName,
    href: inputHref,
    labelLink: inputLabelLink,
  } = props;
  return (
    <>
      <li className={inputClassName}>
        <a href={inputHref} className="text-decoration-none text-muted">
          {inputLabelLink}
        </a>
      </li>
    </>
  );
}

export default NavList;
