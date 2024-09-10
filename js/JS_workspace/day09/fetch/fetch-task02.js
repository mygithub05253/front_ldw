// fetch("https://jsonplaceholder.typicode.com/users").then((response) => { return response.json() }).then(console.log)
// fetch("https://jsonplaceholder.typicode.com/users").then(console.log)

// post를 가져와서 0번부터 5개만 가져와서 title을 출력하기
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => posts.slice(0, 5)) // 5개만 추출
  .then((posts) => posts.map((post) => post.title)) // title만 배열로 추출
  .then((titles) => titles.forEach((title) => { console.log(title) })) // title만 출력
  .catch(console.error)

// html로 title을 화면에 뿌리기