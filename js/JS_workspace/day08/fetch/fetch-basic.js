// promise
// json

// fetch 결론!
// resolve 성공, reject 실패
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => { return response.json() }).then(console.log).catch(console.log);