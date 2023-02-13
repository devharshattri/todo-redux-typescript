import styled from "styled-components";

export const TaskCard = styled.div`
  border: 2px solid rgb(234, 232, 232);
  width: 300px;
  background-color: rgb(234, 232, 232);
  border: none;
  margin: 10px;
  border-radius: 7px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  background-color: rgb(63, 79, 134);
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 5px;
  &hover {
    opacity: 0.5;
  }
`;

export const CancelButton = styled.button`
  border: none;
  background-color: rgb(165, 20, 17);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  &hover {
    opacity: 0.5;
  }
`;
