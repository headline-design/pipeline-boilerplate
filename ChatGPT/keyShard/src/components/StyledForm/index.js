const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0052cc;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Output = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;