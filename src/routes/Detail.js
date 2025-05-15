import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);

    if (json.status !== "ok") {
      console.log("not fetched");
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);
  const keys = Object.keys(detail);
  console.log(keys);
  return (
    <div>
      <h1>{detail.title}</h1>
      <p>Rates: {detail.rating}</p>
      <p>lang: {detail.language}</p>
    </div>
  );
}
export default Detail;
