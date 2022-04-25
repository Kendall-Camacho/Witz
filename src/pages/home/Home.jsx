import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"
import Posts from "../../components/posts/Posts"
import TopBar from "../../components/topbar/TopBar"
import "./home.css"

export default function Home() {
  const user = true;
    return (
      <>
        <TopBar />
        <Header />
        <div className="home">
          <Posts/>
          <SideBar/>
        </div>
      </>
    )
  }
