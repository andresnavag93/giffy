import React from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  console.log("-");
  console.log(gifs);

  return <>{loading ? <div> Loading </div> : <ListOfGifs gifs={gifs} />}</>;
}

export default React.memo(SearchResults);
