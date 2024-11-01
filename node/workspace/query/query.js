import { createServer } from "http";
import { parse } from "url";

createServer((req, res) => {
  const path = parse(req.url, true).pathname; // URL에서 URI(pathname)을 분리

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;

  if(path in pathMap) {
    pathMap[path](req, res);
  } else {
    notFound(req, res);
  }


}).listen("8000", () => {
  console.log("Query server start!!")
})

const newProduct = (req, res) => {
  // 쿼리스트링 분리
  const query = parse(req.url, true).query;

  res.end(
    `
    <h1 style="text-align:center">신상품 소개</h1>
      <ul style="text-align:center; list-style:none;">
        <li>${query.new1}</li>
        <li>${query.new2}</li>
      </ul>
    `
  )
}

const hotProduct = (req, res) => {
  // 쿼리스트링 분리
  const query = parse(req.url, true).query;

  res.end(
    `
    <h1 style="text-align:center">HOT 상품 소개</h1>
      <ul style="text-align:center; list-style:none;">
        <li>${query.hot1}</li>
        <li>${query.hot2}</li>
      </ul>
    `
  )
}

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("<h1>페이지를 찾을 수 없습니다.</h1>")
}

const pathMap = {
  "/new" : newProduct,
  "/hot" : hotProduct,
}