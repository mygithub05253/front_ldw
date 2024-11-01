// "api/product/3" 요청 시, 아래 JSON 데이터 응답하기
// {"number" : 3, "name" : "노트북", "brand" : "삼성"}
import { createServer } from "http";
import { parse } from "url";

createServer((req, res) => {
  const path = parse(req.url, true).pathname;

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if(path === "/api/product/3") {
    res.end(
      JSON.stringify({
        number : 3,
        name : "노트북",
        price : 128000,
        brand : "삼성"
      })
    )
  }
}).listen("8000", () => {
  console.log("Rest-task server start!")
})