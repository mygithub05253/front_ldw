// Q. 당신이 좋아하는 색을 선택하세요.
// let choice = 1;
// 1. 빨간색 2. 노란색 3. 검은색 4. 흰색
// 1. 불 같고 열정적이고 적극적이다
// 2. 발랄하고 밝고 귀엽고 개성있고 착하다.
// 3. 묵묵하고 든든하고 냉철하고 멋지다.
// 4. 천사같고 깔끔하고 정리를 좋아하고 배려심이 많다.
// 5. 잘못 선택하였습니다.

// if문, else if문, if~if문
/* if(choice == 1) {
  console.log("불 같고 열정적이고 적극적이다.");
}
else if(choice == 2) {
  console.log("발랄하고 밝고 귀엽고 개성있고 착하다.");
}
else if(choice == 3) {
  console.log("묵묵하고 든든하고 냉철하고 멋지다.");
}
else if(choice == 4) {
  console.log("천사같고 깔끔하고 정리를 좋아하고 배려심이 많다.");
} else {
  console.log("잘못 선택하였습니다.");
} */
  
/* let result = "";
let message = "1. 빨간색 2. 노란색 3. 검은색 4. 흰색"
let redMessage = "불 같고 열정적이고 적극적이다.";
let yellowMessage = "발랄하고 밝고 귀엽고 개성있고 착하다.";
let blackMessage = "묵묵하고 든든하고 냉철하고 멋지다.";
let whiteMessage = "천사같고 깔끔하고 정리를 좋아하고 배려심이 많다.";
let failedMessage = "잘못 선택하였습니다.";

console.log(message);
if(choice === 1) {
  result = redMessage;
} else if(choice === 2) {
  result = yellowMessage;
} else if(choice === 3) {
  result = blackMessage;
} else if(choice === 4) {
  result = whiteMessage;
} else {
  result = failedMessage;
}
console.log(result); */


// switch문
/* switch(1) {
  case 1:
    console.log("1번 case 실행!!");
    break;
  case 2:
    console.log("2번 case 실행!!");
    break;
  case 3:
    console.log("3번 case 실행!!");
    break;
  default:
    console.log("1번, 2번, 3번에 해당되지 않습니다.");
    break;
} */

// for(초기식; 조건시기 증감식) {}문
/* for(let i = 0; i < 10; i++) {
  console.log(i);
} */

// continue를 만나면 다음 반복으로 넘어감
/* for(let i = 0; i < 10; i++) {
  if(i === 2) {
    continue;
  }
  console.log(i);
} */  

  // 2씩 증가하고 싶은 경우
for(let i = 0; i < 10; i += 2) {
  console.log(i);
}




