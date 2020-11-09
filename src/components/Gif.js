const Gif = (singleGif) => {
  return (
    <div>
      <h4> {singleGif.title} </h4>
      <img src={singleGif.url} alt="Panda" />
    </div>
  );
};

export default Gif;
