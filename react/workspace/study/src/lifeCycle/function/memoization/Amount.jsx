import React from 'react';

const Amount = ({
  props,
  divStyle,
  pStyle,
  buttonStyle,
  onClickToAddAmount,
  onClickToSubtractAmount,
  onClickToAddCoupon,
  onClickToSubtractCoupon,
}) => {

  console.log("자식(Amount) 랜더링 👶")
  const { amount, coupon } = props;

  return (
    <div style={divStyle}>
      { amount > 1 && <button onClick={onClickToSubtractAmount} style={buttonStyle}>-</button> }
      <p style={pStyle}>수량: {amount}</p>
      <button onClick={onClickToAddAmount} style={buttonStyle}>+</button>
      
      { coupon > 0 && <button onClick={onClickToSubtractCoupon} style={buttonStyle}>-</button> }
      <p style={pStyle}>쿠폰: {coupon}</p>
      <button onClick={onClickToAddCoupon} style={buttonStyle}>+</button>
    </div>
  );
};

export default Amount;