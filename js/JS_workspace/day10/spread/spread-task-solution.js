const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!response.ok) {
    return;
  }
  const users = await response.json();
  return users;
}

getData()
  .then((users) => {
    return users.map((u) => {
      const {address, ...user} = u;
      return user;
    })
  })
  .then(console.log)
  .catch(console.error)