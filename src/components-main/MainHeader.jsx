import React from 'react';
import { Link } from 'react-router-dom';

// 핵심 데이터 부품화
const headerNav = [
  {
    title: 'Home',
    url: '#Mainintro',
  },
  {
    title: 'Map',
    url: '#Mainmap',
  },
  {
    title: 'End',
    url: '#Mainfooter',
  },
];

const MainHeader = () => {
  return (
    <header id="Mainheader" role="banner">
      <nav
        className="Mainheader__nav"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        <div className="Mainheader__logo">
          <h1 className="Mainheader__title">
            <Link to="/"> 삼식아</Link>
          </h1>
        </div>
        <ul className="Mainheader__ul topBotomBordersOut">
          {headerNav.map((nav, key) => (
            <li key={key}>
              <a href={nav.url}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
