import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  return (
    <>
    <div className="appContainer">
     <SideBar></SideBar>
     <div className="content">
      <Header></Header>
      <CreatePost></CreatePost>
      <PostList></PostList>
      <Footer></Footer>
      </div>
      </div>
    </>
  );
}

export default App;
