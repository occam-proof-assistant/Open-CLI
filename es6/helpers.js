'use strict';

const fsExtra = require('fs-extra');

const async = require('./async'),
      pathUtil = require('./util/path'),
      pathMapsUtil = require('./util/pathMaps');

class helpers {
  static moveEntries(pathMaps, projectsDirectoryPath, callback) {
    const movedPaths = [];

    pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(
      pathMaps, 
      function(sourcePath, targetPath, next) {
        moveEntry(sourcePath, targetPath, projectsDirectoryPath, function(movedPath) {
          movedPaths.push(movedPath);
          
          next();
        });
      },
      function() {
        callback(movedPaths);
      }
    );
  }

  static removeEntries(pathMaps, projectsDirectoryPath, callback) {
    const removedPaths = [];

    pathMapsUtil.asyncForEachWithSourcePath(
      pathMaps,
      function(sourcePath, next) {
        removeEntry(sourcePath, projectsDirectoryPath, function(removedPath) {
          removedPaths.push(removedPath);

          next();
        });
      },
      function() {
        callback(removedPaths);
      }
    );
  }
}

module.exports = helpers;

function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    const movedPath = sourcePath;

    callback(movedPath);
  } else {
    const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
          exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      const movedPath = null;

      callback(movedPath);
    } else {
      const absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath);

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, function(err) {
        const success = (err === null);

        if (success) {
          const movedPath = targetPath;

          callback(movedPath);
        } else {
          const errCode = err.code;

          if (errCode !== 'EEXIST') {
            const movedPath = sourcePath;

            callback(movedPath);
          } else {
            removeEntry(sourcePath, projectsDirectoryPath, function(removedPath) {
              const success = (removedPath === null),
                    movedPath = success ?
                                  targetPath :
                                    sourcePath;

              callback(movedPath);
            });
          }
        }
      });
    }
  }
}

function removeEntry(sourcePath, projectsDirectoryPath, callback) {
  if (sourcePath !== null) {
    const removedPath = sourcePath;

    callback(removedPath);
  } else {
    const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
          exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      const removedPath = null;

      callback(removedPath);
    } else {
      const absoluteSourcePathDirectoryPath = pathUtil.isDirectoryPath(absoluteSourcePath),
            entryDirectory = absoluteSourcePathDirectoryPath;

      entryDirectory ?
        removeDirectory(sourcePath, projectsDirectoryPath, callback) :
          removeFile(sourcePath, projectsDirectoryPath, callback);
    }
  }
}

function removeDirectory(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        empty = pathUtil.isDirectoryEmpty(absoluteSourcePath);

  if (!empty) {
    const removedPath = sourcePath;

    callback(removedPath);
  } else {
    fsExtra.remove(absoluteSourcePath, function(err) {
      const success = (err === null),
            removedPath = success ?
                            null :
                              sourcePath;

      callback(removedPath);
    });
  }
}

function removeFile(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath);

  fsExtra.remove(absoluteSourcePath, function(err) {
    const success = (err === null),
          removedPath = success ?
                          null :
                            sourcePath;

    callback(removedPath);
  });
}