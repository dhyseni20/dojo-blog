const Home = () => {
  const handleClick = function (e) {
    console.log("Heloo Drilon", e);
  };
  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain("drilon");
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
