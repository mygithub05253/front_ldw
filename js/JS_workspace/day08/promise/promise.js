const DB = [];
// DB 저장
function saveDB(user) {
  const beforeLength = DB.length;
  const afterLength = DB.push(user);
  console.log(`save to DB, ${user.name}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(beforeLength < afterLength) {
        resolve(user);
      } else {
        reject(new Error("saveDB() Error"));
      }
      console.log("saveDB 3초 뒤에 실행");
    }, 3000)
  })
}

// 이메일 전송
function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
      console.log("sendEmail 2초 뒤에 실행");
    }, 2000)
  })
}

// 성공 메세지
function getResult(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`success register ${user.name}`);
      console.log("getResult 1초 뒤에 실행");
    }, 1000)
  })
}

/* function register(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  result.then(console.log);
} */

function register(user) {
  // 순서가 상관없는 경우
  // 먼저 끝나는 것부터 끝내게 함
  // 비동기 안에 있는 동기들을 비동기로 바꿈
  // Promise.all
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user)
  ])
  resultAsync.then(console.log);
}

const user = {
  name : "이동원",
  email : "dongwon0525@naver.com"
}

register(user);