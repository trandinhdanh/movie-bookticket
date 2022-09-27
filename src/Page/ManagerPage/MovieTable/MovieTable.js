import React, { useState, useEffect } from "react";

import MovieAction from "./MovieAction";
import { Table } from "antd";
import { columns } from "../utils/movieManager.utils";
import { movieService } from "../../../Services/movie.service";
import "./MovieTable.scss";
function MovieTable({ search }) {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    let fetchListUser = () => {
      movieService
        .getMovieList(search)
        .then((res) => {
          let movieList = res.data.content.map((movie, index) => {
            return {
              key: index,
              ...movie,
              action: (
                <MovieAction
                  key={index}
                  movieID={movie.maPhim}
                  handleOnSuccess={fetchListUser}
                />
              ),
            };
          });
          setDataUser(movieList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListUser();
  }, [search]);

  return (
    <Table
      onRow={() => {
        return {
          onClick: (event) => {
            console.log(event);
          }, // click row
        };
      }}
      columns={columns}
      dataSource={dataUser}
    />
  );
}

export default MovieTable;
