import React, { useEffect, useState } from 'react';

// 사이드 이펙트가 발생하는 fetch 코드를 useEffect()로 해결하기
// fetch로 요청 https://jsonplaceholder.typicode.com/albums
// 화면에 title 출력하기

const SideEffectMount = () => {

  const [title, setTitle] = useState([]);

  const getDatas = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const datas = await response.json();
    console.log(datas)
    return datas;
  }

  useEffect(() => {
    console.log("title이 바뀔 때만 실행")
    getDatas()
      .then((data) => {
        const titles = data.map((titleData) => titleData.title);
        setTitle(titles)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      {title.map((titles, i) => <p key={i}>{titles}</p>) }
    </div>
  );
};

export default SideEffectMount;