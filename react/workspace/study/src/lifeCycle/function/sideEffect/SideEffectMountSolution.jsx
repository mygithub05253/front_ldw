import React, { useEffect, useState } from 'react';

const SideEffectMountSolution = () => {

  const [albums, setAlbums] = useState([]);
  const [isAlbumsUpdate, setIsAlbumsUpdate] = useState(false);

  const onClickToAlbumsUpdate = () => {
    setIsAlbumsUpdate(!isAlbumsUpdate)
  }

  useEffect(() => {
    // album의 데이터를 가져오는 코드는 밖에 선언해도 되고 useEffect 안에 선언해도 상관없음
    // 즉, 단순 분류를 위해서지 side effect가 발생하는 코드만 useEffect 안에 넣어도 상관없음
    const getAlbums = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      const datas = await response.json();
      console.log("리랜더링")
      console.log(datas)
      return datas;
    }

    getAlbums().then(setAlbums)
  }, [isAlbumsUpdate])

  const printAlbumTitle = albums.map(({title}, i) => <li key={i}>{title}</li>)

  return (
    <div>
      <button onClick={onClickToAlbumsUpdate}>리랜더링 버튼</button>
      <ul>
        {printAlbumTitle}
      </ul>
    </div>
  );
};

export default SideEffectMountSolution;