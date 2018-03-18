'use strict';

const zlib = require('zlib');

const messages = require('../messages'),
      Release = require('../../es6/release');

const { deflate } = zlib,
      { UNABLE_TO_CREATE_RELEASE } = messages;

function createDeflatedRelease(proceed, abort, context) {
  const { releaseName } = context,
        name = releaseName, ///
        release = Release.fromName(name);

  if (release === null) {
    console.log(UNABLE_TO_CREATE_RELEASE);

    abort();

    return;
  }

  deflateRelease(release, function(deflatedRelease) {
    if (!deflatedRelease) {
      abort();

      return;
    }

    Object.assign(context, {
      deflatedRelease: deflatedRelease
    });

    delete context.releaseName;

    proceed();
  });
}

module.exports = createDeflatedRelease;

function deflateRelease(release, callback) {
  const releaseJSON = release.toJSON(),
        releaseJSONString = JSON.stringify(releaseJSON);

  deflate(releaseJSONString, function(error, buffer) {
    let deflatedRelease;

    if (error) {
      deflatedRelease = null;
    } else {
      const encoding = 'base64',
            deflatedReleaseJSONString = buffer.toString(encoding);

      deflatedRelease = deflatedReleaseJSONString;  ///
    }

    callback(deflatedRelease);
  });
}
