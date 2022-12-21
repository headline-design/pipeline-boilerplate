import styled from 'styled-components'

// Create a container for the interface
export const OfferContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
`

// Create a form for making an offer
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
`

// Create a input for the offer amount
export const OfferInput = styled.input`
  width: 50%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  margin: 0.5em 0;
`

// Create a button for submitting the offer
export const OfferButton = styled.button`
  width: 50%;
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`

// Create a container for the offers
export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
`

// Create a container for an individual offer
export const Offer = styled.div`
  width: 50%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  margin: 0.5em 0;
  display: flex;
  justify-content: space-between;
`

// Create a button for accepting an offer
export const AcceptButton = styled(OfferButton)`
  background-color: #6dce49;
`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 0 auto;
`;

export const OfferLabel = styled.label`
font-size: 1.5em;
margin-bottom: 0.5em;
`;
