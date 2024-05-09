import React from "react";
import SideBar from "../components/templates/SideBar";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/user";
import { ColorRing } from "react-loader-spinner";
import Main from "../components/templates/Main";

const style = { display: "flex" };

function HomePage() {
  const { isLoading } = useQuery(["post-list"], getAllPosts);

  return (
    <>
      {isLoading ? (
        <ColorRing
          wrapperClass="loader"
          colors={["#03AED2", "#CAF4FF", "#C40C0C", "#FC4100", "#803D3B"]}
        />
      ) : (
        <div style={style}>
          <SideBar />
          <Main />
        </div>
      )}
    </>
  );
}

export default HomePage;
