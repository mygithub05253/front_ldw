import http from 'k6/http';

// 200명이 동시에 10초동안 요청을 보내는 테스트 코드
export const options = {
  // virtual user의 약자로, 가상 유저의 수
  vus : 200,

  // 테스트를 진행할 시간(초)
  duration : "10s"
}

export default function(){
  // 성능 테스트 시 실행되는 함수이며, 전달된 경로로 get방식의 요청을 보낸다.
  http.get("http://localhost:8000")
}