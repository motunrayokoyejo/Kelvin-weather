const team = {
 _players:[
   {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
   },
   {
  firstName: 'Lionel',
  lastName: 'Messi',
  age: 20
   },
   {
  firstName: 'J.J',
  lastName: 'Okocha',
  age: 27
   },
 ],
 _games:[
   {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
 {
  opponent: 'Basketball',
  teamPoints: 32,
  opponentPoints: 53
},
{
  opponent: 'Football',
  teamPoints: 33,
  opponentPoints: 22
},
 ],
  get games() {
       return this._games;
   },
   get players(){
     return this._players;
   },
  
  addPlayer (firstName,lastName,age){
  let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
},
addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};


team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans', 100, 98);
team.addGame('Tennis', 50, 78);
team.addGame('handball', 40, 23);

console.log(team.players)
console.log(team.games)
