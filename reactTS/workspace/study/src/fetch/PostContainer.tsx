import React, { useEffect, useState } from 'react';
import { Post } from '../models/post';

// https://jsonplaceholder.typicode.com/posts
// fetch로 posts의 데이터를 요청해서 화면에 post.title을 모두 출력하세요.
// 단, 타입을 모두 붙여야한다.
// useState()
// fetch 함수 이름은 getPosts
const PostContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    
    const getPosts = async ():Promise<Post[]> => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const datas = response.json()
      return datas;
    }

    getPosts().then(setPosts).catch(console.error)

  }, [])

  return (
    <div>
      {posts && posts.map((post:Post, i:number) => <li key={i}>{post.title}</li>)}
    </div>
  );
};

export default PostContainer;
