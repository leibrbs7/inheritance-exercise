const character = {
    attack: (target) => { console.log(target.name + ' takes damage') },
    heal: (target) => { console.log(target.name + ' heals himself') } 
  }
  
  const player1 = Object.create(character, {
    name: {value: 'Player 1'}
  })
  
  const player2 = Object.create(player1, {
    name: {value: 'Player 2'}
  })
  
  player1.attack(player2)
  player2.heal(player2)
  