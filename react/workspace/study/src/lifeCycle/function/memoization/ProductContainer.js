import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {

  console.log("부모(Product) 랜더링 🤷‍♀️")

  let [like, setLike] = useState(0);
  let [amount, setAmount] = useState(1);
  let [coupon, setCoupon] = useState(0);

  // 값은 캐시에 저장되어 있지만, 의존성 배열로 아무것도 전달하지 않았기 때문에 리랜더링 되지 않음
  // const props = useMemo(() => { return {amount : amount, coupon : coupon} }, [amount, coupon]);

  const amountMemo = useMemo(() => {
    console.log("amount 연산")
    return amount;
  }, [amount]);

  const couponMemo = useMemo(() => {
    console.log("coupon 연산")
    return coupon;
  }, [coupon]) 

  const props = { amount: amountMemo, coupon: couponMemo };

  const onClickToAddAmount = useCallback(() => {
    setAmount(amount + 1)
  }, [amount])

  const onClickToSubtractAmount = useCallback(() => {
    setAmount(amount -1)
  }, [amount])

  const onClickToAddCoupon = useCallback(() => {
    setCoupon(coupon + 1)
  }, [coupon])

  const onClickToSubtractCoupon = useCallback(() => {
    setCoupon(coupon - 1)
  }, [coupon])

  const containerStyle = {
    width : "500px",
    height : "300px",
    margin : "20px auto",
  }

  const productStyle = {
    border : "1px solid lightgray",
    padding : "30px",
    lineHeight : "1.3"
  }

  const divStyle = {
    border : "1px solid blue",
    height : "60px",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    marginTop : "20px",
    padding : "20px"
  }

  const pStyle = {
    lineHeight : "0",
  }

  const buttonStyle = {
    width : "40px",
    height : "40px"
  }

  const onClickToAddLike = () => {
    setLike(like + 1)
  }

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 미움 받을 용기</p>
        <button onClick={onClickToAddLike}>좋아요 {like}</button>
        <Amount
          props={props}
          divStyle={divStyle}
          pStyle={pStyle}
          buttonStyle={buttonStyle}
          onClickToAddAmount={onClickToAddAmount}
          onClickToSubtractAmount={onClickToSubtractAmount}
          onClickToAddCoupon={onClickToAddCoupon}
          onClickToSubtractCoupon={onClickToSubtractCoupon}
        />
      </div> 
    </div>
  );
};

export default ProductContainer;