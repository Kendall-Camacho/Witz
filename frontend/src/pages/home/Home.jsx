import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
// import SideBar from "../../components/sidebar/SideBar";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
      <Posts />
      </div>
    </>
  );
};

export default Home;