import { createServer } from "http";
import { parse } from "url";
import User from "./user_schema.js" // 확장자
import connect from './connect.js'
import fs from "node:fs";
import qs from "node:querystring";
import path from "path";

connect();

// VSCode에서 open folder로 연 경로를 절대 경로로 가져온다.
const __dirname = path.resolve();

createServer((req, res) => {
  const path = parse(req.url, true).pathname; // url를 분리
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;

  if(path in pathMap){
    pathMap[path](req, res);
  }else {
    notFound(req, res);
  }

}).listen("8000", () => {
  console.log("Router Server Start!")
})

// 라우팅
const join = async (req, res) => {
  if(req.method == "GET"){
    // 해당 경로의 파일을 읽은 뒤 callback 함수로 에러 혹은 결과를 전달 받는다.
    fs.readFile(__dirname + "/join.html", (err, result) => {
      if(err){
        console.log("read error", err.message)
        res.writeHead(404, {"Content-Type" : "text/html"})
        ("<h1>페이지를 찾을 수 없습니다.😥</h1>")
      }else{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(result);
      }
    })
  }else if(req.method == "POST"){
    let body = "";

    // 헤더를 통해 정보가 전달되었을 때
    req.on("data", function(data){
      // body에 해당 내용을 문자열로 담는다.
      body += data;
      console.log("on data", body)
    })
    
    req.on("end", async function(){
      // qs(queryString)객체의 parse()를 통해 객체로 전달해준다.
      let data = qs.parse(body);
      console.log("end data", data)
      
      // 받은 데이터를 mongoose문법을 사용해서 collection에 추가한다.
      const userCreated = await User.create(data);
      console.log(userCreated);

      fs.readFile(__dirname + "/login.html", (err, result) => {
        if(err){
          console.log("file read failed..", err.message)
          res.writeHead(404, {"Content-Type" : "text/html"})
          ("<h1>페이지를 찾을 수 없습니다.😥</h1>")
        }else{
          res.writeHead(200, {"Content-Type" : "text/html"})
          res.end(result);
        }
      })

    })
  }
}

const login = async (req, res) => {
  if(req.method == "GET"){
    
    fs.readFile(__dirname + "/login.html", (err, result) => {
      if(err){
        console.log("file read failed..", err.message)
        res.writeHead(404, {"Content-Type" : "text/html"})
        ("<h1>페이지를 찾을 수 없습니다.😥</h1>")
      }else{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(result);
      }
    })

  }else if(req.method == "POST"){
    let body = "";
    
    req.on("data", function(data){
      body += data;
    })
  
    req.on("end", async function(){
      let data = qs.parse(body);
      let path = __dirname + "/login.html";
      const user = await User.findOne({ id : data.id});

      if(user){
        if(user.password === data.password){
          // 비밀번호를 검사해서 일치한다면, 해당 문서 경로로 path에 저장
          path = __dirname + "/login_ok.html";
        }
      }

      fs.readFile(path, (err, result) => {
        if(err){
          console.log("file read failed..", err.message)
          res.writeHead(404, {"Content-Type" : "text/html"})
          ("<h1>페이지를 찾을 수 없습니다.😥</h1>")
        }else{
          res.writeHead(200, {"Content-Type" : "text/html"})
          res.end(result);
        }
      })

    })
  
  }
}

const main = (req, res) => {
  res.statusCode = 200;
  res.end("<h1 style='text-align:center;'>환영합니다!😃</h1>")
}

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다.😥</h1>")
}

const pathMap = {
  "/" : main,
  "/join" : join,
  "/login" : login,
}