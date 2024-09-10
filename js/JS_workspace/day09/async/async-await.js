// async-await, ES8(2017)

function getTitle() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => posts.slice(0, 5)) // 5개만 추출
    .then((posts) => posts.map((post) => post.title)) // title만 배열로 추출
    .then((titles) => titles.forEach((title) => { console.log(title) })) // title만 출력
    .catch(console.error)
}

getTitle()

