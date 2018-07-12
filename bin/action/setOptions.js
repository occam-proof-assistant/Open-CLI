'use strict';

const messages = require('../messages'),
      configuration = require('../configuration'),
      callbackUtilities = require('../utilities/callback'),
      useSSHPromptCallback = require('../callback/prompt/useSSH'),
      hostNameSuffixPromptCallback = require('../callback/prompt/hostNameSuffix');

const { updateOptions } = configuration,
			{ executeCallbacks } = callbackUtilities,
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = messages;

function setOptions() {
  const callbacks = [
          useSSHPromptCallback,
          hostNameSuffixPromptCallback
        ],
        context = {};

  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      console.log(FAILED_SET_OPTIONS_MESSAGE);

      exit();
    }

    const options = context;

    updateOptions(options);

    console.log(SUCCESSFUL_SET_OPTIONS_MESSAGE);
  }, context);
}

module.exports = setOptions;