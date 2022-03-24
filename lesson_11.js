class Salad {
  constructor() {
    this.ingredients = [];
  }

  addIngredient(ingredient){
    this.ingredients.push(ingredient);
  }

  getNutritionInfo(info){
    return this.ingredients.map(vegetable => vegetable[info]).reduce((cur, acc) => cur + acc);
  }

  sortIngredientsByInfo(info){
    return this.ingredients.sort((a, b) => b[info] - a[info]);
  }

  filterByInfo(info){
    this.ingredients.filter(element => {
      if(element[info] < 3) {
        console.log('this ingredient is diet');
      } else {
        console.log('this ingredient is nourishing')
      }
    })
  }
}

class Vegetable {
  constructor(name, calories, fat, protein, carbohydrate) {
    this.name = name;
    this.calories = calories;
    this.fat = fat;
    this.protein = protein;
    this.carbohydrate = carbohydrate;
  }
}

class Tomato extends Vegetable {
  constructor(name, calories, fat, protein, carbohydrate, species) {
    super(name, calories, fat, protein, carbohydrate);
    this.species = species;
  }
}

let salad = new Salad();
salad.addIngredient(new Tomato("tomato", 100, 2, 2, 5, 'vegetativeVeg'));
salad.addIngredient(new Vegetable("cucumber", 50, 1, 2, 3));
salad.addIngredient(new Vegetable("onion", 65, 3, 3, 4));
console.log(salad);
console.log(`${salad.getNutritionInfo('fat')} mgs of fat is in salad`);
console.log(`${salad.getNutritionInfo('calories')} of kilocalories is in 100g of salad`);
console.log(salad.sortIngredientsByInfo('calories'));
console.log(salad.filterByInfo('fat'));

