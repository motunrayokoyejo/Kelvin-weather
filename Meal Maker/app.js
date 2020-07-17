const menu = {
_courses: {
  get courses(){
  return {
    appetizer: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
  }
  },
  appetizers : [],
  mains: [],
  desserts: []
},
get appetizers(){

},
get mains(){

},
get desserts(){

},
set appetizer(appetizerIn){},
set mains(mainsIn){},
set desserts(dessertsIn){},
addDishToCourse(courseName,dishName,dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice
  };
  return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName){
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
},
generateRandomMeal(){
 const appetizer = this.getRandomDishFromCourse('appetizer');
 const main = this.getRandomDishFromCourse('main');
 const dessert = this.getRandomDishFromCourse('dessert');
 const totalPrice = appetizer.price + main.price + dessert.price;
 return `Your Meal is ${appetizer.name},${main.name},${dessert.name}.. The Price is ${totalPrice}.`;
}
};

menu.addDishToCourse('main','Jollof rice',45);
menu.addDishToCourse('main','Fried rice',40);
menu.addDishToCourse('main','Pounded Yam',55);
menu.addDishToCourse('appetizer','smoothies',10);
menu.addDishToCourse('appetizer','salad',12);
menu.addDishToCourse('appetizer','wine',10);
menu.addDishToCourse('dessert','cake',5);
menu.addDishToCourse('dessert','pancake',4);
menu.addDishToCourse('dessert','chips',5);


let meal = menu.generateRandomMeal();
console.log(meal);

