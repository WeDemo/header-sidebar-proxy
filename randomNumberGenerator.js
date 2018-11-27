'use strict';

const generateRandomId = function(){
  return Math.floor(Math.random() * 10000000))+1;
}

module.exports = generateRandomId;