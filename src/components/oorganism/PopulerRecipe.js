import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// molecules
import HeadSection from "../molecules/HeadSection";
import Pagination from "../molecules/Pagination";
// utils
import { paginate } from "../../utils/paginate";
// css
import styles from "../../css/Home.module.css";
// image
import populerImg from "../../images/default.svg";

function PopulerRecipe() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [sortType, setSortType] = React.useState("default");
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => {
    let result = data;

    if (sortType === "descending") {
      result = [...data].sort((a, b) => {
        return b.id.toString().localeCompare(a.id.toString());
        // return parseInt(b.id.localeCompare(a.id));
      });
    } else if (sortType === "ascending") {
      result = [...data].sort((a, b) => {
        return a.id.toString().localeCompare(b.id.toString());
        // return parseInt(a.id.localeCompare(b.id));
      });
    }
    return result;
  }, [data, sortType]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/recipe/all`);
    const data = await response.json();
    setData(data.data);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(sortedData, currentPage, pageSize);

  return (
    <div className={`mb-5 ${styles.content}`}>
      <HeadSection
        className={`row mt-5 ${styles.row_heading_article3}`}
        label="Populer Recipe"
      />

      {/* Sort */}

      <div className="container ps-5">
        <div>
          <select
            className="form-select my-5"
            aria-label="Default select example"
            defaultValue="default"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option disabled value="default">
              sort by
            </option>
            <option value="ascending">Longest</option>
            <option value="descending">Latest</option>
          </select>
        </div>
        <div className="row ms-5">
          {paginatePosts.map((item) => (
            <div
              className={`card ms-3 mb-3 bg-dark border-0 px-1 pb-1 ${styles.card_article3}`}
              onClick={() => navigate(`/detail/${item?.id}`)}
            >
              <img src={item?.photo || populerImg} className="card-img-top" />
              <p className="position-absolute fixed-bottom ms-4 text-light">
                {item?.title_recipe}
              </p>
            </div>
          ))}
          <Pagination
            items={data?.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PopulerRecipe;
