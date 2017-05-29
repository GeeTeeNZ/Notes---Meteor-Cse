import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import{ validateNewUser } from './users';

if (Meteor.isServer){

  describe('users', function() {

    it('should allow a valid email address', function() {
      const testUser = {
        emails: [
          {
            address: 'Test@example.com'
          }
        ]
      };
      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });

    it('should reject invalid email', function () {
      const testUser = {
        emails: [
          {
            address: 'Testexample.com'
          }
        ]
      };

      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });

  });
}






















// const add = (a,b) => {
//   if (typeof b !== 'number'){
//     return a+a;
//   }
//   return a + b;
// };
//
// const square = (a) => a * a;
//
// describe('add', function () {
//
//   it('should add two numbers', function(){
//     const res = add(10,7);
//
//     expect(res).toBe(17);
//
//   });
//
//   it('should double a single number', function(){
//     const res = add(17);
//
//     expect(res).toBe(34);
//
//   });
// });
//
// describe('square', function () {
//
//   it('should square a number', function(){
//     const res = square(13);
//
//     expect(res).toBe(169);
//
//   });
// });
