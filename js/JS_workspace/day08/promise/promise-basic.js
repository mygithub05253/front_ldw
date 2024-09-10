// promise 비동기 연산이 종료된 이후 결과에 맞게 처리할 수 있도록 도와주는 자료구조

const promise = new Promise((resolve, reject) => {
  let check = false;
  if(check) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

// promise.then((result) => { console.log(result); }).catch((err) => {console.log(err);})
// 참조형
promise.then(console.log).catch(console.log)