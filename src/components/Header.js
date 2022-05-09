import React from "react";
import "../styles/layout/_header.scss";

const Header = () => {
  let imgUrl =
    "https://cdn.eldeforma.com/wp-content/uploads/2020/08/81756021-100375161499854-7473042640326361088-n-1.jpg";
  return (
    <div className="header__container">
      <header className="header">
        <img src={imgUrl} alt="owen-logo" className="header__image" />
        <h1 className="header__title">Owen Wilson's "wow"</h1>
      </header>
    </div>
  );
};
export default Header;
