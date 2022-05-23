function logTwoValues(value1, value2) {
    return `The two values are ${value1} and ${value2}.`;
  }

function introduction(name) {
    return `Hi, my name is ${name}.`;
  }

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  //"Hi, my name is Aki and I am learning to program in Ember.js.

  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  //Hi, my name is Gracie and I am learning to program in JavaScript.