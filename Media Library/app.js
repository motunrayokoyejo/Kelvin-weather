class Media{
constructor(title){
  this._title = title;
  this._isCheckedOut = false;
  this._ratings = [];
} get title(){
  return this._title;
} get checkedOut(){
  return this._isCheckedOut;
}  get ratings(){
  return this._ratings;
} set checkedOut(newCheckedOut){
  this._isCheckedOut = checkedOut;
} toggleCheckOutStatus(){
  this._isCheckedOut = !this._isCheckedOut;
} getAverageRating(){
  let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating);
  return ratingsSum/this.ratings.length;
} addRating(value){
   this.ratings.push(value);
}
}

class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}
class Movie extends Media{
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.checkedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating())

speed = new Movie('Jan de Bont','Speed',116)
speed.toggleCheckOutStatus()
console.log(speed.checkedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
