import React from "react";

const Header = () => {
  let imgUrl =
    "https://cdn.eldeforma.com/wp-content/uploads/2020/08/81756021-100375161499854-7473042640326361088-n-1.jpg";
  return (
    <nav>
      <div>
        <header className="header">
          <img src={imgUrl} alt="owen-logo" className="header-image" />
          <h1 className="title">Owen Wilson's "wow"</h1>
        </header>
      </div>
    </nav>
  );
};
export default Header;
