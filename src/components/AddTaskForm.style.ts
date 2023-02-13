import styled from "styled-components";

export const H2 = styled.h2`
  text-align: center;
  margin: 0px 0px 1rem;
  font-size: 2rem;
  font-weight: 600;
  font-family: Poppins, sans-serif;
`;

export const AddTaskFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const TaskInputForm = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1.5px solid rgb(51, 51, 51);
  border-radius: 4px;
  outline: none;
  &focus {
    border: 2px solid rgb(75, 75, 255);
  }
`;

export const ActionButton = styled.button`
  background-color: rgb(50, 50, 50);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  &hover {
    opacity: 0.5;
  }
`;
