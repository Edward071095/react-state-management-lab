import './App.css'
import { useState } from 'react'


const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]

  );

  const handleAddFighter = (fighter) => {
    // Check if we have enough money to add this fighter
    if (money >= fighter.price) {
      setTeam([...team, fighter]); // Add the fighter to the team
      setMoney(money - fighter.price); // Deduct the money
      setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
    } else {
      alert("Not enough money to add this fighter!");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setMoney(money + fighter.price);
    setZombieFighters([...zombieFighters, fighter]);
  };

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <>
      <h1>Field Of Zombies!</h1>
      <ul>
        {zombieFighters.map((zombieFighter) =>
          <div key={zombieFighter.id}>
            <li>{zombieFighter.name}</li>
            <li>{zombieFighter.price}</li>
            <li>{zombieFighter.strength}</li>
            <li>{zombieFighter.agility}</li>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add Fighter</button> 
          </div>
        )}
      </ul>

      <h2>Your Team:</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
      <ul>
        {team.map((fighter) => (
          <div key={fighter.id}>
            <img src={fighter.img} alt="" />
            <li>Name: {fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </div>
        ))}
      </ul>
      )}

    <h2>Total Team Strength: {totalStrength}</h2>
    <h2>Total Team Agility: {totalAgility}</h2>
    <h2>Money: {money}</h2> 
    </>
  )
}




export default App 