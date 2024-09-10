import React, { useRef, useState } from 'react';

// 한국 음식 이름과 영어 음식 이름을 받고 추가
// 등록된 음식을 선택하고 삭제 버튼을 누르면 해당 음식이 추가되고 삭제

const FoodContainer = () => {

  // 한국 음식 이름, 영어 음식 이름, 음식 리스트 상태 설정
  const [koreanName, setKoreanName] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [foodList, setFoodList] = useState([]);

  const inputRef = useRef([]);
  const formRef = useRef();

  // 한국 음식 이름 가져오기
  const onChangeKorean = (e) => {
    setKoreanName(e.target.value);
  }

  // 영어 음식 이름 가져오기
  const onChangeEnglish = (e) => {
    setEnglishName(e.target.value);
  }

  // 추가 버튼을 눌렀을 때 한국, 영어 음식 이름을 foodList에 저장하기
  const onClickToAdd = (e) => {
    // 한국 음식 이름과 영어 음식 이름이 둘 다 입력된 경우
    if(koreanName && englishName) {
      setFoodList((prevList) => [...prevList, {korean: koreanName, english: englishName}])
      setKoreanName("")
      setEnglishName("")
    }
  }

  // li 태그 내에 있는 한국, 영어 음식 이름과 일치하면 그 li 태그를 삭제하기
  const onClickToDelete = (e) => {
    // 입력한 한국 음식 이름과 영어 음식 이름이 일치하는 경우를 걸러내기
    setFoodList((prevList) => prevList.filter((food) => food.korean !== koreanName || food.english !== englishName))
    setKoreanName("")
    setEnglishName("")
  }

  return (
    <div>
      <form ref={formRef}>
        <input type="text" placeholder="한국 음식 이름 추가" onChange={onChangeKorean} ref={(element) => {inputRef.current[0] = element}} value={koreanName} />
        <input type="text" placeholder="영어 음식 이름 추가" onChange={onChangeEnglish} ref={(element) => {inputRef.current[1] = element}} value={englishName} />
        <button type="button" onClick={onClickToAdd}>추가</button>
        <button type="button" onClick={onClickToDelete}>삭제</button>
      </form>

      <div>
        {/* foodList에 들어가있는 음식 이름들을 반복적으로 불러서 li 태그로 나타내기 */}
        {foodList.map((food, i) => (<p><li key={i}><input type="checkbox" />{food.korean} ({food.english})</li></p>))}
      </div>
      
    </div>
  );
};

export default FoodContainer;