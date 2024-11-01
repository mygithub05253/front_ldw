// 어떤 요청에도 "Good-bye"를 응답하는 서버 제작하기
// 제작 후 k6를 통해 100명이 10초 동안 동시에 요청하는 성능 테스트 구현

import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.write("Good-bye");

  setTimeout(() => {
    res.end();
  }, 3000)
})

server.listen(8000, () => {
  console.log("8000 port 서버 실행 중!")
});