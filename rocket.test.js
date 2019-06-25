
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      new_rocket = new Rocket();
      expect(new_rocket).toHaveProperty('flying', false);
    });

    test("it should set the rocket's name if provided", () => {
      new_rocket = new Rocket();
      new_rocket.name = 'Pocket'
      expect(new_rocket).toHaveProperty('name', 'Pocket');
    });
    
    test("it should set the rocket's colour if provided", () => {
      new_rocket = new Rocket({'colour':'White'});
      expect(new_rocket.colour).toBe('White')
      });

    test('it returns a new rocket object', () => {
      new_rocket = new Rocket();
      expect(new_rocket).toBeTruthy();
    });
      
  });


  describe('liftOff', () => {

    test("if flying is set to true, return false", () => {
      new_rocket = new Rocket({'flying':true});
      expect(new_rocket.liftOff()).toBeFalsy();
    });
    
    test("if flying is set to false, return true", () => {
      new_rocket = new Rocket({'flying':false});
      expect(new_rocket.liftOff()).toBeTruthy();
    });
  });

  describe('land', () => {
    test("if flying is set to false, it should return false", () => {
      new_rocket = new Rocket({'flying':false});
      expect(new_rocket.land()).toBeFalsy
    });

    test("if flying is set to true, it should return true", () => {
      new_rocket = new Rocket({'flying':true});
      expect(new_rocket.land()).toBeTruthy;
    });
  });

  describe('status', () => {
    test("if flying is true, return `Rocket ${this.name} is flying through the sky!`", () => {
      new_rocket = new Rocket({'name': 'Pocket', 'flying':true});
      expect(new_rocket.status()).toBe("Rocket Pocket is flying through the sky!")
    });

    test("if flying is false, return `Rocket ${this.name} is ready for liftoff!`", () => {
      new_rocket = new Rocket({'name': 'Pocket', 'flying':false});
      expect(new_rocket.status()).toBe("Rocket Pocket is ready for liftoff!")
    });
  });

  describe('sendCodedSignal', () => {
    test("if messageCode is undefined, return 'boop'", () => {
      new_rocket = new Rocket();
      expect(new_rocket.sendCodedSignal()).toBe('boop')
    });

    test("if message code is < 10 and rocket is not flying, return 'beep'", () => {
      new_rocket = new Rocket();
      expect(new_rocket.sendCodedSignal(4)).toBe('beep')
    });

    test("if message code is < 10 and rocket is flying, return 'beep beep'", () => {
      new_rocket = new Rocket({'flying': true});
      expect(new_rocket.sendCodedSignal(6)).toBe('beep beep')
    });

    test("if message code is >= 10 and rocket is not flying, return 'boop beep beep'", () => {
      new_rocket = new Rocket();
      expect(new_rocket.sendCodedSignal(14)).toBe('boop beep beep')
    });

    test("if message code is >= 10 and rocket is flying, return 'boop boop boop'", () => {
      new_rocket = new Rocket({'flying': true});
      expect(new_rocket.sendCodedSignal(10)).toBe('boop boop boop')
    });

    test("if message code is is a string, return 'boop beep beep'", () => {
      new_rocket = new Rocket();
      expect(new_rocket.sendCodedSignal('wazzup')).toBe('boop beep beep')
    });
  });

});
