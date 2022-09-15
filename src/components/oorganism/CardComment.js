import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// axios
import axiosInstance from '../../helper/axios';
// css
import styles from '../../css/DetailRecipe.module.css';
import defaultImg from '../../images/avatar.jpg';

function CardComment() {
  const paramsResult = useParams();
  const [dataComment, setDataComment] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/comment/comment/${paramsResult.id}`)
      .then((res) => setDataComment(res.data.data));
  }, []);
  const addDefaultSrc = (e) => {
    e.target.src = defaultImg;
  };
  return (
    <div className="mb-5 container">
      {dataComment.map((item) => (
        <div className="d-flex align-items-center mb-3">
          <div className="flex-shrink-0 rounded-circle border border-warning">
            <img
              src={item?.photo || defaultImg}
              onError={addDefaultSrc}
              alt="image"
              className={`${styles.img_comment} rounded-circle`}
              crossOrigin="anonymous"
            />
          </div>
          {/* <br /> */}
          <div className="flex-grow-1 ms-3">
            <p className="fw-bold text-decoration-underline">{item?.name}</p>
            <p>
              <small className="text-muted">{item?.comment_message}</small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComment;
