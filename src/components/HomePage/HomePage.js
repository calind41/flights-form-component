import React from "react";
import "./HomePage.css";

import Header from "./Header/Header";
import SearchForm from "./SearchForm/SearchForm";

export default function HomePage() {
  return (
    <div className='homepage-c'>
      <Header />
      <SearchForm />
    </div>
  );
}
