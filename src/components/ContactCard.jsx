import React, { useState } from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  padding: 10px;
  color: #ffffff;
  background-color: rgb(42, 84, 104);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 10px 10px 25px -16px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  max-width: 500px;
  max-height: 125px;
  margin-bottom: 10px;
`;
const TextParrafos = styled.p`
  margin-left: 10px;
  margin-top: 0;
`;
const AgeButton = styled.button`
  border-radius: 1em;
  background-color: transparent;
  margin: 0.5em;
  padding: 1em;
  color: #fff;
`;
const AgeParrafo = styled.p`
  color: #fff;
  display: inline-flex;
  float: right;
`;

const ContactCard = ({ Avatar, Name, Email, Age }) => {
  const [showAge, setSohowAge] = useState(false);
  return (
    <ContainerCard>
      <img src={Avatar} alt="profile" />
      <div>
        <TextParrafos>{Name}</TextParrafos>
        <TextParrafos>{Email}</TextParrafos>
        <AgeButton onClick={() => setSohowAge(!showAge)}>Show Age</AgeButton>
        {showAge === true ? <AgeParrafo>{Age}</AgeParrafo> : null}
      </div>
    </ContainerCard>
  );
};

export default ContactCard;
