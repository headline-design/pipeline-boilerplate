import React, { useState } from 'react';
import { FormContainer, StyledForm, OfferInput, OfferButton, OfferLabel } from '../GlobalStyles';
import usePipe from '../hooks/usePipe';

const OfferForm = () => {
  const [amount, setAmount] = useState('');
  const [nftId, setNftId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [response, setResponse] = useState(null);

  const { contract, connection } = usePipe('true');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);

    const result = await contract.makeOffer(amount, nftId, recipient, {
      connection
    });

    setResponse(result);
  };


  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <OfferLabel>Amount:</OfferLabel>
        <OfferInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <OfferLabel>NFT ID:</OfferLabel>
        <OfferInput
          type="text"
          value={nftId}
          onChange={(e) => setNftId(e.target.value)}
          required
        />
        <OfferLabel>Recipient:</OfferLabel>
        <OfferInput
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <OfferButton type="submit">Make Offer</OfferButton>
      </StyledForm>
      {response && <p>{response.message}</p>}
    </FormContainer>
  );
};

export default OfferForm;