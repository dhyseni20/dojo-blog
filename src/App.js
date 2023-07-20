import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1> App Component</h1>
        <h1> {title}</h1>
        <p>Liked {likes} times </p>
        <p>{Math.random() * 100}</p>
        <a href={link}>Google Sites</a>
      </div>
    </div>
  );
}

export default App;
