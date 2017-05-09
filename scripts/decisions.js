const INGREDIENT_COMBINATIONS = require('./const');

const checkDecisions =  {
  checkChickenOn: (message) => {
    const mealCollection = INGREDIENT_COMBINATIONS.find(ingr => ingr.ingredients.includes(message));

    if (message.charAt(0) !== ':') {
      return "I only react to Emojis. I'm a chicken, I can't read.";
    }

    if (mealCollection) {
      return mealCollection.reaction;
    } else {
      return "I don't have a strong opinion about this.";
    }
  }
}

const decisions = module.exports = checkDecisions;
