import React from "react";
import { connect } from "@pipeline-ui-2/pipeline";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const MySmartContract = ({ makeOffer, acceptOffer }) => {
  return (
    <Container>
      <Button onClick={makeOffer}>Make Offer</Button>
      <Button onClick={acceptOffer}>Accept Offer</Button>
    </Container>
  );
};

export default connect(MySmartContract, {
  makeOffer: "MAKE_OFFER",
  acceptOffer: "ACCEPT_OFFER",
});
