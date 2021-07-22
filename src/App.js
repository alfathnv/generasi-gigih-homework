import Login from "./containers/pages/Login";
import Playlist from "./containers/pages/Playlist";

function App() {
  let page;
  console.log(window.location.href);
  if (window.location.href === "http://localhost:3000/") {
    page = <Login />;
  } else {
    page = <Playlist />;
  }
  return <div>{page}</div>;
}

export default App;
