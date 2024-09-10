// 이름 : 이동원 => 상수로 선언
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 총점 구하기

// if문을 사용해서 평균 60점 이상은 합격, 60점 이하는 불합격 출력하기(console로 출력)

// 최종 문장
// 이동원님의 이번 총점은 00, 평균은 00점으로 (합격 또는 불합격)입니다.

const name = "이동원";
let korean = 80;
let math = 70;
let english = 90;
let science = 20;
let totalScore = korean + math + english + science;
let averageScore = totalScore / 4;

if(averageScore >= 60) {
  let result = "합격";
  console.log(`${name}님의 이번 총점은 ${totalScore}, 평균은 ${averageScore}으로 ${result}입니다.`);
} else {
  let result = "불합격";
  console.log(`${name}님의 이번 총점은 ${totalScore}, 평균은 ${averageScore}으로 ${result}입니다.`);
}