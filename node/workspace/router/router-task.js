// "/user"일 경우 "홍길동님 환영합니다!" 응답
// "/product"일 경우 "상품1, 상품2, 상품3"은 판매 중입니다!" 응답
// 위 경로 외의 다른 경로는 모두 "페이지를 찾을 수 없습니다" 응답

import { createServer } from "http";
import { parse } from "url";

// function pathList(req, res) {
//   const path = parse(req.url, true).pathname;

//   res.setHeader("Content-Type", "text/html; charset=utf-8");

//   res.statusCode = 200;

//   if(path === "/user") {
//     res.end("<h1>홍길동님 환영합니다!</h1>")
//   } else if(path === "/product") {
//     res.end("<h1>상품1, 상품2, 상품3은 판매 중입니다!</h1>")
//   } else {
//     res.statusCode = 404;
//     res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다.😭</h1>")
//   }
// }

const user = (req, res) => {
  res.end("<h1>홍길동님 환영합니다</h1>")
}

const product = (req, res) => {
  res.end("<h1>상품1, 상품2, 상품3은 판매 중입니다</h1>")
}

const notFound = (req, res) => {
  res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다</h1>")
}

const pathMap = {
  "/users" : user,
  "/product" : product
}

createServer((req, res) => {
  // pathList(req, res);
    
  const path = parse(req.url, true).pathname;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.statusCode = 200;

  if(path in pathMap) {
    pathMap[path](req, res);
  } else {
    notFound(req, res)
  }
}).listen("8000", () => {
  console.log("Router-task server start!!")
})