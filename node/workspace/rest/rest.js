import { createServer } from "http";
import { parse } from "url";

createServer((req, res) => {
  const path = parse(req.url, true).pathname;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // CORS(Coress-Origin Resource Sharing)
  // 프로토콜, 도메인, 포트 번호가 하나라도 다를 경우 발생
  // 세션을 탈취하여 악의적으로 정보를 추출하거나 다른 사람의 정보를 입력하는 등 공격 가능하기 때문에
  // 브라우저에서 이를 보호하고 Coress-Origin이 필요한 경우 따로 설정이 필요

  // 서버가 응답할 때 브라우저가 요청한 Origin과 응답한 헤더 Access-Control-Request-Headers의 값을 비교하여
  // 유효한 요청이라면 리소스를 응답
  // 만약 유효하지 않은 요청이라면 브라우저에서 이를 막고 에러가 발생

  if(path === "/api/user/1") {
    res.end(
      JSON.stringify({
        id : 1,
        name : "이동원",
        address : "서울특별시 성동구"
      })
    )
  }
}).listen("8000", () => {
  console.log("Rest Server start!")
})