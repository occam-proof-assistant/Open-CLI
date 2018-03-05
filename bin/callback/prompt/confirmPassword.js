'use strict';

const necessary = require('necessary');

const messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { PASSWORDS_DO_NOT_MATCH_MESSAGE } = messages;

function confirmPasswordPromptCallback(proceed, abort, context) {
  const { password } = context,
        hidden = true,
        description = 'Confirm password: ',
        errorMessage = PASSWORDS_DO_NOT_MATCH_MESSAGE,
        options = {
          hidden: hidden,
          description: description,
          errorMessage: errorMessage,
          validationFunction: validationFunction
        };

  prompt(options, function(password) {
    const valid = (password !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === password); ///

    return valid;
  }
}

module.exports = confirmPasswordPromptCallback;