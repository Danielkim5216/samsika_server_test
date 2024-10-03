import React from 'react';
// 링크로 페이지 이동. Navigate도 존재함.
import { Link } from 'react-router-dom';

const HomeIntro = () => {
  return (
    <section id="Homeintro" className="Homeintro__section">
      <div className="Homeintro__inner">
        <h1 className="Homeintro__title">안녕하세요</h1>
        <p className="Homeintro__font">
          삼식아는 <br />
          삼육대 근처 밥집과 카페의 메뉴와 가격을 <br /> 알려주는 서비스입니다.
        </p>
        <button className="custom-btn btn-3">
          <span>
            <Link to="/main">클릭하고 이동하기</Link>
          </span>
        </button>
      </div>
    </section>
  );
};

export default HomeIntro;
