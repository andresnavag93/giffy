import { useState, useEffect } from "react";

import Gif from "./Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return <div> Loading </div>;
  }

  return (
    <>
      {gifs.map(({ id, title, url }) => {
        return <Gif key={id} title={title} url={url} />;
      })}
    </>
  );
};

export default ListOfGifs;
