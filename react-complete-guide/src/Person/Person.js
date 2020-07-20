import React from "react";
import styled from "styled-components";

// import "./Person.css";
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  const { name, age, children } = props;
  return (
    //<div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I am {name} and I am {age}... I am from the Person component and here I
        am generating a random number: {Math.floor(Math.random() * 100)}
      </p>
      <p>{children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
