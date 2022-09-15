import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// css
import styles from '../../css/Logout.module.css';

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate('/login');
    }, 2000);
  });

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${styles.d_loading}`}
    >
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Logout;
