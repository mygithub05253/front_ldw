const file = require("fs");

// const user = new Object;
// user.name = "홍길동";
// user.id = "hgd5678";
// user.password = "5678";

// console.log(user);
// const userJSON = JSON.stringify(user);
// console.log(userJSON);

// file.writeFile("경로", "내용", "인코딩 방식", "콜백함수");
/* file.writeFile("user.json", userJSON, "utf-8", (error) => {
  if(error) {
    console.error(error);
  } else {
    console.log("출력 성공");
  }
}); */

let user;
// file.readFile("경로", "인코딩 방식", "콜백함수");
/* file.readFile("user.json", "utf-8", (error, content) => {
  user = JSON.parse(content);
  console.log(user.id);
}) */
  
user = JSON.parse(file.readFileSync("user.json", "utf-8"));
console.log(user);

