import React from "react";
import "./styles.css";
import { InstantSearch, SearchBox, Configure } from "react-instantsearch-dom";
import Stats from "./Stats.js";
import Content from "./Content";
import { url } from "./image";

export default function App() {
  return (
    <InstantSearch
      appId="SQ3LNW4EV0"
      apiKey="909f3e6581e400d0cf23498a1f8e6fda"
      indexName="star"
    >
      <main className="search-container">
        <Configure hitsPerPage={5} />
        <div class="contents">
          <img alt="starwars logo" src={url} />
          <div id="searchbox">
            <SearchBox translations={{ placeholder: "Search for character" }} />
          </div>
          <div id="stats">
            <Stats />
          </div>
          <div id="hits">
            <Content />
          </div>
        </div>
      </main>
    </InstantSearch>
  );
}
