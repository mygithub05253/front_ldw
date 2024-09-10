// fetch("경로", option)
// 리턴 값 Promise
fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  // 통신에 실패한 경우
  if(!response.ok) {
    throw new Error(`response : ${response.status}`);
  }
  // response 정보를 담고 있으므로, 실제 데이터를 가져오기 위해 .json()
  return response.json();
}).then((users) => {
  if(!users) {
    throw new Error(`none result`);
  }
  return users;
}).then((users) => {
  users.forEach((user) => {
    console.log(user.name);
  })
}).catch()