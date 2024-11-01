import { createServer } from "http";
import { parse } from "url";

createServer((req, res) => {
  // true : 쿼리스트링(url 중에서 "?" 뒷 부분)을 객체 형식으로 가져옴
  // false : 쿼리스트링을 문자열 형식으로 가져옴
  const path = parse(req.url, true).pathname; // URL에서 URI(pathname)을 분리

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  // 상태 코드 설정
  res.statusCode = 200;

  if(path === "/new") {
    res.end("<h1>신상품⭐ 소개</h1>")
  } else if(path === "/hot") {
    res.end("<h1>🔥hot 상품🔥 소개</h1>")
  } else {
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다.😭</h1>")
  }
}).listen("8000", () => {
  console.log("Router server start!!")
})
