import React from "react";
//css
import styles from "../../css/Home.module.css";

function Footer() {
  return (
    <>
      <footer className={`bg-warning ${styles.d_footer}`}>
        <h1>Eat, Cook, Repeat</h1>
        <p className="text-muted">Share your best recipe By uploading here</p>
        <ul className={`text-muted fw-bold ${styles.list_footer}`}>
          <li className="list-group mx-4">Product</li>
          <li className="list-group mx-4">Company</li>
          <li className="list-group mx-4">Learn More</li>
          <li className="list-group mx-4">Get In Touch</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
