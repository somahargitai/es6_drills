/**
 * Arrow function
 *  Shorten function definitions. 
 * 
 * Instead of 
 * function AddThings(params) { dosomething(); }
 * you can write
 * const AddThings = params => dosomething();
 */

function usualFunction(variable) {
  console.log('Usual Function result: ', variable);
}

const arrowFuntion = variable => console.log('Arrow Function result: ', variable);

usualFunction('some text');
arrowFuntion('some text');

// There are some differences