// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1. fetching 후 전체 console.log로 출력
// 2. fetching 후 unknown 오류 생기는 것을 해결하는 실습
// 3. 데이터 중에 post.title만 출력하기
// .then(), .catch() 사용하여 출력

// 함수의 이름은 getPosts

// {
//   userId: 10,
//   id: 100,
//   title: 'at nam consequatur ea labore ea harum',
//   body: 'cupiditate quo est a modi nesciunt soluta\n' +
//     'ipsa voluptas error itaque dicta in\n' +
//     'autem qui minus magnam et distinctio eum\n' +
//     'accusamus ratione error aut'
// }

interface Post {
  userId : number;
  id : number;
  title : string;
  body : string;
}

const getPost = async <Post>():Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

const getTitles = (posts:Post[]):string[] => {
  return posts.map((post) => post.title)
}

getPost<Post>()
.then(getTitles)
.then(console.log)
.catch(console.error)
