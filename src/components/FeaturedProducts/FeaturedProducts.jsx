import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
        As designers, it’s important for us to stay up-to-date with the latest design trends, and ideas. One way we often do this is by finding inspiration from other designers’ work. There are many places online to find ideas, but Dribbble and Behance are two of the most popular.

However. one of the biggest problems with using Dribbble as a source of ideas is that most of the designs on Dribbble don't solve UX problems. While the work on Dribbble may be visually stunning, it may not necessarily be functional or solve real-world problems.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
