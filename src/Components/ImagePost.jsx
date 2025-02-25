import React, { useEffect, useState } from "react";
import "../index.css";
import "./posts.json";

const Post = () => {
  // <-------- state-manage ------->
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // <---------- Fetch-API ---------->
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError();
      });
  }, []);

  return (
    <>
      <main>
        <div className="card">
          {loading ? (
            <p>Loading data.....</p>
          ) : error ? (
            <p>Error : {error}</p>
          ) : (
            <ul className="card-container">
              {data.map((item) => (
                <img key={item.id} src={item.images} alt="" />
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Post;
