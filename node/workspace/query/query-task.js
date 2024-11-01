// "/user?name=홍길동" "홍길동님 환영합니다!" 응답
// "/product?p1=축구공&p2=농구공&p3=배구공"일 때 "축구공, 농구공, 배구공은 판매중입니다!!!"
// 위 경로 외의 다른 경로는 모두 "페이지를 찾을 수 없습니다."
import { createServer } from "http";
import { parse } from "url";

createServer((req, res) => {
  const path = parse(req.url, true).pathname;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.statusCode = 200;

  if(path in pathMap) {
    pathMap[path](req, res);
  } else {
    notFound(req, res);
  }

}).listen("8000", () => {
  console.log("Query-task server start!!!")
})

const user = (req, res) => {
  const query = parse(req.url, true).query;

  res.end(
    `
    <h1 style="text-align:center">${query.name}님 환영합니다</h1>
    `
  )
}

const product = (req, res) => {
  const query = parse(req.url, true).query;

  res.end(
    `
    <h1 style="text-align:center">${query.product1}, ${query.product2}, ${query.product3}은 판매중입니다</h1>
    `
  )
}

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("<h1>페이지를 찾을 수 없습니다</h1>")
}

const pathMap = {
  "/user" : user,
  "/product" : product,
}