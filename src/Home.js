import { useState } from "react";

const Home = () => {
  //  +++ let name = "Drilon";
  const [name, setName] = useState("drilon");
  const [age, setAge] = useState(21);
  const handleClick = function (e) {
    setName("luigi");
    setAge(34);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
