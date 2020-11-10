import { useState, useEffect } from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import getGifs from "../services/getGifs";

const SearchResults = ({ params }) => {
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
  return <ListOfGifs gifs={gifs} />;
};

export default SearchResults;
