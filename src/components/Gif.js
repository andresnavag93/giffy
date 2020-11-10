import "./Gif.css";

const Gif = ({ title, url, id }) => {
  return (
    <a href={`#${id}`} className="Gif">
      <h4> {title} </h4>
      <img src={url} alt="Panda" />
    </a>
  );
};

export default Gif;
