import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1> App Component</h1>
        <h3> {title}</h3>
        <p>Liked {likes} times </p>
        <p>{Math.random() * 100}</p>
        <a href={link}>Google Sites</a>
      </div>
    </div>
  );
}

export default App;
