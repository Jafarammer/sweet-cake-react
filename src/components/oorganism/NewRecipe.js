import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// axios
import axiosInstance from '../../helper/axios';
// molecules
import HeadSection from '../molecules/HeadSection';
// css
import styles from '../../css/Home.module.css';
// image
import newImg from '../../images/default.svg';

function NewRecipe() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance.get('/recipe').then((res) => setData(res.data.data));
  });
  return (
    <div className={`pt-5 mb-5 ${styles.content}`}>
      <HeadSection className="row mt-5 mb-5" label="New Recipe" />
      <div className="row mt-5">
        <div className="col-6 p-0">
          <div
            className={`card bg-warning border-0 pt-2 ${styles.card_left_article2}`}
          >
            <img
              src={data[0]?.photo || newImg}
              className="card-img-top mt-5"
              alt="image"
              crossOrigin="anonymous"
            />
          </div>
        </div>
        <div
          className={`col-6 ${styles.col_right_article2}`}
          key={data[0]?.id}
        >
          <h1 className="text-center">
            Healthy
            {' '}
            {data[0]?.title_recipe || 'not'}
          </h1>
          <h1 className="text-center border-bottom border-2 border-warning mb-4 py-3 px-5">
            (Quick & Easy)
          </h1>
          <p className="text-muted">
            Quick + Easy
            {' '}
            {data[0]?.title_recipe || 'Not'}
          </p>
          <p className="text-muted">
            Healthy
            {' '}
            {data[0]?.title_recipe || 'Not'}
            {' '}
            in a hurry ? That's
            right!
          </p>
          <Link to={`/detail/${data[0]?.id}`}>
            <button
              type="button"
              className="btn btn-warning text-white py-3 px-5 fw-bold mt-4 border"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewRecipe;
