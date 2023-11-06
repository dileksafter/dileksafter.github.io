import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ListContainer = styled.li`
text-align: left !important;
`;


function Details({ details }) {
  const problemsList = details.problems.split(';').map((problem, index) => (
    <ListContainer key={index}>{problem}</ListContainer>
  ));

  const skillsList = details.skills.split(';').map((skill, index) => (
    <ListContainer key={index}>{skill}</ListContainer>
  ));

  return (
    <DetailsContainer>
      <h4>{details.title}</h4>
      <div>
        <p>Challenges:</p>
        <ul>{problemsList}</ul>
      </div>
      <div>
        <p>Skills:</p>
        <ul>
          {skillsList}
        </ul>
      </div>

    </DetailsContainer>
  );
}

export default Details;
