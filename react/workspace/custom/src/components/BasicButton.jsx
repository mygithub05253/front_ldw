import React from 'react';
import Button from './style';

const BasicButton = ({children, variant, size, shape, ...rest}) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default BasicButton;