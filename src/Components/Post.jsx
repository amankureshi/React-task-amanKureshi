import React, { useEffect, useState } from "react";
import post from "./posts.json";

const Post = () => {
  console.log(post);
  // <-------- state-manage ------->
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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
    <div>
      {/*  <---------- Header-input ----------> */}
      <header>
        <input
          type="text"
          placeholder="seach here"
          onChange={(e) => {
            e.target.value;
          }}
        />
      </header>
      <main>
        <div className="card-container">
          {/*  <---------- Loading ----------> */}
          {loading ? (
            <h2>Loading data.....</h2>
          ) : error ? (
            <p>Error : {error}</p>
          ) : (
            <div className="card-list">
              {/*  <---------- Table Data ----------> */}
              <table>
                <th>id</th>
                <th>Titlte</th>
                <th>Image</th>
                <th>price</th>

                {data.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>
                        <img src={item.images} alt="" />
                      </td>
                      <td>{item.price}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Post;
