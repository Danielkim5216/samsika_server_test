import React from 'react';

const HomeHeader = () => {
  return (
    <header id="Homeheader" role="banner">
      <nav className="Homeheader__nav" role="navigation" aria-label="메인 메뉴">
        <div className="Homeheader__logo">
          <h1 className="Homeheader__title">삼식아</h1>
        </div>
      </nav>
    </header>
  );
};

export default HomeHeader;
