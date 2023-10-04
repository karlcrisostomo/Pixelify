import React from "react";
import Home from "./home";
import { Category, SearchBar } from "@/components";

import SearchProvider from "@/context/SearchContext";
const index = () => {
  return (
    <>
      <main className="main">
        <SearchProvider>
        <SearchBar />
          <Category/>
          <Home />
        </SearchProvider>
      </main>
    </>
  );
};

export default index;
