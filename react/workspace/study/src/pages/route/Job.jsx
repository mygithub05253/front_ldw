import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Job = () => {

  // const [ searchParams ] = useSearchParams();

  // 쿼리 스트링의 key 값을 넘기는 value 값을 가져오는 것 가능
  // const job = searchParams.get("title");

  const {title} = useParams();

  return (
    <div>
      <h1>{title} 소개 페이지!</h1>
    </div>
  );
};

export default Job;