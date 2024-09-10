// fetch와 spread, destructuring 실습
// fetch 함수로 구현(async-await 활용)
// https://jsonplaceholder.typicode.com/users
// user 정보 중 address만 제외하고 나머지 user 정보를 모두 가져와서 콘솔에 출력하기
// 데이터를 가져오는 함수

/* 
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error("이상한 오류");
    }
    const users = await response.json();
    
    users.forEach(user => {
      const { address, ...userData } = user;
      console.log(userData);
    });
  } catch (error) {
    console.error(error.name)
    console.error(error.message)
  }
*/
const loadUserData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  users.map((user) => {
    const { address, ...userData } = user;
    console.log(userData);
  })
}

loadUserData()




// 화면에는 address.city 출력하기