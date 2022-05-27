import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topbar/TopBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="home">
        <Posts/>
        <SideBar />
      </div>
    </>
  );
};
