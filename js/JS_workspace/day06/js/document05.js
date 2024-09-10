globalThis.number = 0;

function createDIV() {
  const color = new Array(
    "yellow",
    "red",
    "blue",
    "green",
    "skyblue",
    "orange",
    "pink"
  );
  // Math
  // Math.floor(Math.random() * n) : 0 ~ (n-1)까지 랜덤 값 출력
  const i = Math.floor(Math.random() * color.length);
  const div = document.createElement("div");
  div.innerText = `새로 생성된 div ${++globalThis.number}`;
  div.style.backgroundColor = color[i];  
  
  // 추가
  document.getElementById("wrap").appendChild(div);

  // 삭제
  div.onclick = function() {
    this.parentElement.removeChild(this);
  }
}
