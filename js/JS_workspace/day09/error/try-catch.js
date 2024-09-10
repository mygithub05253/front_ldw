
try {
  badRunTimeCode();
} catch (error) {
  console.log(error.name)
  console.log("에러를 잡았습니다.")
} finally {
  console.log("반드시 한 번 실행")
}