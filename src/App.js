import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [playerChoice, setplayerChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [playerPoints, setplayerPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

 const handleClick = (value) => {
    setplayerChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = playerChoice + computerChoice
    if (playerPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // playerPoints.current += 1
        const updatedplayerPoints = playerPoints + 1
        setplayerPoints(updatedplayerPoints)
        setTurnResult('player gets the point!')
        if (updatedplayerPoints === 5){
          setResult('player Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, playerChoice])

  return (
    <>
    <Navbar/>
    {/* <div className="container" style={{backgroundColor: " rgb(43, 53, 189)",}}> */}
    <div className="App "> 
      {/* <h1 className='heading'style={{fontSize: "50px",color:'white'}}>Rock-Paper-Scissors</h1> */}
      
      <div className='score'>
        <h1>Player Points: {playerPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className='choice'style={{margin:"30px"}}>
        <div className='choice-player'>
          <img className='player-hand' src={`../images/${playerChoice}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`} alt=''></img>
        </div>
      </div>
      
      <div className='button-div'>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
        )}
      </div>
      
      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={() => reset()}>Restart Game</button>
        }
      </div>
    </div>
    {/* </div> */}
    <Footer/>
    </>
  )
}

export default App
