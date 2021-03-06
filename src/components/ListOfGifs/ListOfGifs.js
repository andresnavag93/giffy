import Gif from "components/Gif/Gif";
import "./ListOfGifs.css";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => {
        return <Gif key={id} title={title} url={url} id={id} />;
      })}
    </div>
  );
};

export default ListOfGifs;
