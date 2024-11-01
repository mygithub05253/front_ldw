import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Success = () => {
  
  const navigate = useNavigate();
  const [ searchParams ] = useSearchParams();
  const [ responseData, setResponseData ] = useState(null);
  const [ isReqeustSent, setIsReqeustSent ] = useState(false);

  useEffect(() => {

    const confirm = async () => {
      const requestData = {
        orderId : searchParams.get("orderId"),
        amount : searchParams.get("amount"),
        paymentKey : searchParams.get("paymentKey")
      };
  
      const response = await fetch("http://localhost:8000/payment/toss", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(requestData)
      })
      if(!response.ok) { return; }
      const datas = await response.json()
      return datas;
    }

    if(!isReqeustSent){
      confirm()
        .then((data) => {
          setIsReqeustSent(true);
          setResponseData(data);
        })
        .catch((error) => {
          navigate(`/fail?payment=false`)
        })
    }

  }, [searchParams, isReqeustSent, navigate])

  return (
    <div>
      <h1>결제가 성공적으로 완료되었습니다.😁</h1>
      <h2>주문번호 : {searchParams.get("orderId")}</h2>
      <h2>주문가격 : {searchParams.get("amount")}</h2>
      <Link to={"/payment"}>다른 상품 보러가기</Link>
    </div>
  );
};

export default Success;