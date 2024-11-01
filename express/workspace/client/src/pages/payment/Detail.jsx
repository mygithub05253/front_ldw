import React from 'react';
import { useSelector } from 'react-redux';
import PaymentButton from './PaymentButton';

const Detail = () => {
  const { email, name } = useSelector((state) => state.user.currentUser);
  console.log(email, name || "김세환")

  const productName = "빌딩";
  const productPrice = 2000000000;

  return (
    <div>
      결제 상품 : {productName}
      결제 가격 : {productPrice}
      <PaymentButton 
        productPrice={productPrice}
        orderName={productName}
        customerName={name || "김세환"}
        customerEmail={email}
      />
    </div>
  );
};

export default Detail;