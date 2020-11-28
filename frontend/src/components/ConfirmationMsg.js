import React from "react";
import styled from "styled-components";

const ConfirmationMsg = (props) => {
  console.log(props);
  let order = props.formData;
  return (
  <Wrapper>Your order of {order.order} will be sent to your home in {order.province}, Canada. Thank you for participating {order.givenName}!</Wrapper>
  );
};

const Wrapper = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  z-index: 4;
`;

export default ConfirmationMsg;
