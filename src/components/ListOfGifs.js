import { useState, useEffect } from "react";

import Gif from "./Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ keyword = "panda" }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, []); //eslint-disable-line

  return gifs.map(({ id, title, url }) => {
    return <Gif key={id} title={title} url={url} />;
  });
};

export default ListOfGifs;
