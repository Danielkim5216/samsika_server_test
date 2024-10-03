import React, { useEffect } from 'react';

// map - naver
const { naver } = window;

const MainMap = () => {
  useEffect(() => {
    const location = new naver.maps.LatLng(
      37.64379489999975,
      127.11052699999952
    );
    // 지도에 표시할 위치의 위도와 경도 설정

    const mapOptions = {
      center: location,
      // 중앙에 배치할 위치
      zoom: 17.5,
      // 확대 단계
    };

    const map = new naver.maps.Map('map', mapOptions);
    // DOM 요소에 지도 삽입 (지도를 삽입할 HTML 요소의 id, 지도의 옵션 객체)

    new naver.maps.Marker({
      map,
      position: location,
    });
    // 지도에 마커 생성
  }, []); // 빈 배열은 이 useEffect가 처음에만 실행되도록 설정

  return (
    <section id="Mainmap" className="Mainmap__section">
      <div id="map" className="Mainmap__map"></div>
    </section>
  );
};

export default MainMap;
