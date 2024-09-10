// 1분전, 5분전, 하루 전, 한달 전

function timeForToday(dateTime) {
  const today = new Date();
  const date = new Date(dateTime);
  
  // 분
  let gap = Math.floor(today.getTime() - date.getTime()) / 1000 / 60;

  if(gap < 1) {
    return "방금 전";
  }

  if(gap < 60) {
    return `${gap}분 전`;
  }

  // 시간
  gap = Math.floor(gap / 60);
  if(gap < 24) {
    return `${gap}시간 전`;
  }

  // 일
  gap = Math.floor(gap / 24);
  if(gap < 32) {
    return `${gap}일 전`;
  }

  // 월
  gap = Math.floor(gap / 31);
  if(gap < 13) {
    return `${gap}개월 전`;
  }

  // 년
  gap = Math.floor(gap / 12);

  return `${gap}년 전`;
}

console.log(timeForToday("2024-01-10 09:00:00"))