const INGREDIENT_COMBINATIONS = require('./const');

const checkDecisions =  {
  checkChickenOn: (ingredient) => {
    const mealCollection = INGREDIENT_COMBINATIONS.find(ingr => ingr.ingredients.includes(ingredient));

    if (mealCollection) {
      return mealCollection.reaction;
    } else {
      return "I don't have a strong opinion about this";
    }
  },

  renderDangerLevel: (ingredient) => {
      return `If you put :chicken: on :${ingredient}: then :${this.checkChickenOn(ingredient)}:`;
  },
}

const decisions = module.exports = checkDecisions;
