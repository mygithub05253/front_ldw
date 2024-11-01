// http 모듈 불러오기
import http from "http";
let count = 0;

function log(count) {
  console.log(count++)
}

// 서버 객체 생성
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  // 응답할 데이터 설정
  response.write("Hello! World 😎\n");
  
  setTimeout(() => {
    // 2초 후 "Node.js"를 출력한 다음 http 연결을 끊어주기
    response.end("Node.js");
  }, 3000)
})

// port : 49152 ~ 65535
// 0 ~ 1023, 1024 ~ 49151은 시스템에서 기본으로 사용하는 포트 존재 가능
// 충돌을 피하기 위해 보통은 49152 포트부터 사용
// 서버가 시작할 때 실행할 문장을 콜백 함수에 작성하여 listen 메서드로 요청 받는 것 가능
server.listen(8000, () => {
  console.log("8000 port 서버 실행 중!")
});