import styled from "styled-components";
export const EditCardForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const EditInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 4px;
`;

export const EditCancelButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background-color: rgb(51, 51, 51);
  color: white;
  &hover {
    opacity: 0.5rem;
  }
`;
