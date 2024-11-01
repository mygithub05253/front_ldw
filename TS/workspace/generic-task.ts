// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1. fetching 후 전체 console.log로 출력
// 2. fetching 후 unknown 오류 생기는 것을 해결하는 실습
// 3. 데이터 중에 post.title만 출력하기
// .then(), .catch() 사용하여 출력

// 함수의 이름은 getPosts

interface Posts {
  userId : number;
  id : number;
  title : string;
  body : string;
}

const fetchData = async <T>(url:string):Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getPosts = async () => {
  const getData = await fetchData("https://jsonplaceholder.typicode.com/posts");
  return getData;
}

getPosts()
.then((data) => console.log(data))
.catch((error) => {
  console.error(error)
})