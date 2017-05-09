const decisions = require('../scripts/decisions');

describe('Chickenbot', function() {
  it('can only react to emojis', function() {
    expect(decisions.checkChickenOn('hello')).toBe("I only react to Emojis. I'm a chicken, I can't read.");
  });

  it('can react with a heart emoji if it likes the ingredient', function() {
    expect(decisions.checkChickenOn(':lemon:')).toBe('I love this! :yellow_heart:');
  });

  it('can react badly if it doesn\'t like the ingredient', function() {
    expect(decisions.checkChickenOn(':spaghetti:')).toBe(':no_entry:');
  });
});
