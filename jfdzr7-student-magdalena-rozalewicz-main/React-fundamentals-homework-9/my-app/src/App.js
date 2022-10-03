// import players from './players';

import React, { useEffect } from "react";
import './App.css';
import styled from "styled-components";
import { useState } from 'react';
import { Headers } from './components/Headers';
import { StyledHeaders } from './components/Headers.style';



const StyledHighlightingColorButtons = styled.div`
  display: flex;
  justify-content: center;
`
const HighlightingColorButtons = ({ handleSwitchColor }) => {
  return (
    <StyledHighlightingColorButtons>
      <button onClick={() => { handleSwitchColor("red") }}>RED</button>
      <button onClick={() => { handleSwitchColor("blue") }}>BLUE</button>
    </StyledHighlightingColorButtons>
  )
}

const StyledPlayersList = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${player => {
    return player.pointss > 100 ? player.color : "pink"
  }};
  color:${player => {
    return player.pointss > 100 ? "#fff" : "#000"
  }};
  margin: 8px 8px;
`

const PlayersList = ({ highlightingColor, players }) => {
  return players.map(player =>
    <StyledPlayersList pointss={player.points} color={highlightingColor}>
      <p>{player.username}</p>
      <p>{player.points}</p>
    </StyledPlayersList>
  )
}

const TotalPointsCounter = ({ players }) => {
  return players && players.reduce((prevValue, player) => {
    return prevValue + player.points;
  }, 0)
}

const TotalPoints = ({ players }) => (
  <StyledHeaders>
    <h2>TOTAL Points</h2>
    <h2><TotalPointsCounter players={players} /></h2>
  </StyledHeaders>
)

const AveragePointsCounter = ({ players }) => {
  return (TotalPointsCounter({ players }) / players.length)
}

const AveragePoints = ({ players }) => (
  <StyledHeaders>
    <h2>AVERAGE Points</h2>
    <h2><AveragePointsCounter players={players} /></h2>
  </StyledHeaders>
)



function App() {

  const [players, setDataPlayers] = useState([]);
  const getDataPlayers = () => {
    fetch("http://localhost:3001/players.json"
      , {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then((response) => response.json())
      .then((players) => {
        setDataPlayers(players)
      });
  }

  useEffect(() => {
    getDataPlayers()
  }, []);

  const [highlightingColor, setHighlightingColor] = useState("red")
  const handleSwitchColor = (color) => {
    setHighlightingColor(color)
  }

  return (
    <div>
      <HighlightingColorButtons handleSwitchColor={handleSwitchColor} />
      <Headers />
      <PlayersList players={players} highlightingColor={highlightingColor} />
      <TotalPoints players={players} />
      <AveragePoints players={players} />
    </div>
  );
}



export default App;
