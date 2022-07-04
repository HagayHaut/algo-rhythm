import React, { useState } from "react";
import AddChallenge from "./AddChallenge";
import AddSolution from "./AddSolution";
import AddResource from "./AddResource";
import styled from "styled-components";

const SubmissionPage = styled.div`
  text-align: center;
  background-color: lightgrey;
  position: relative;
  top: 30px;
  height: calc(100vh - 30px);
  background-color: rgb(57, 57, 57);
`;

const ToggleContainer = styled.div`
  padding-top: 20px; ;
`;

const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: auto;
  color: #fefefe;
`;

const VertDivider = styled.div`
  border-right: 1px solid #fefefe;
  width: 1px;
  height: 1.5rem;
  margin: 2px;
`;

const ToggleButtons = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

function Submission({ user }) {
  const [displayForm, setDisplayForm] = useState("solution");

  const addNew = () => {
    switch (displayForm) {
      case "solution":
        return <AddSolution user={user} />;
      case "challenge":
        return <AddChallenge />;
      default:
        return <AddResource />;
    }
  };

  function handleClick(e) {
    const btns = document.querySelectorAll(".toggle-btn");
    btns.forEach((btn) => (btn.className = "toggle-btn"));
    e.target.className += " active";
    const text = e.target.textContent;
    switch (text) {
      case "Solution":
        setDisplayForm("solution");
        break;
      case "Challenge":
        setDisplayForm("challenge");
        break;
      default:
        setDisplayForm("resource");
    }
  }

  return (
    <SubmissionPage>
      <ToggleContainer>
        <Toggle>
          <ToggleButtons>
            <VertDivider />
            <p
              className="toggle-btn active"
              name="solution"
              onClick={handleClick}
            >
              Solution
            </p>
            <VertDivider />
            <p className="toggle-btn" name="challenge" onClick={handleClick}>
              Challenge
            </p>
            <VertDivider />
            <p className="toggle-btn" name="resource" onClick={handleClick}>
              Resource
            </p>
            <VertDivider />
          </ToggleButtons>
        </Toggle>
      </ToggleContainer>

      {addNew()}
    </SubmissionPage>
  );
}

export default Submission;
