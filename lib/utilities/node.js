"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNodeByClass = findNodeByClass;
exports.findNodesByClass = findNodesByClass;
exports.findTerminalNodes = findTerminalNodes;

function findNodeByClass(node, Class) {
  var foundNode = null;

  if (node instanceof Class) {
    foundNode = node;
  } else {
    var nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      var nonTerminalNode = node,
          ///
      childNodes = nonTerminalNode.getChildNodes();
      childNodes.some(function (childNode) {
        foundNode = findNodeByClass(childNode, Class);

        if (foundNode !== null) {
          return true;
        }
      });
    }
  }

  return foundNode;
}

function findNodesByClass(node, Class) {
  var foundNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (node instanceof Class) {
    var foundNode = node; ///

    foundNodes.push(foundNode);
  } else {
    var nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      var nonTerminalNode = node,
          ///
      childNodes = nonTerminalNode.getChildNodes();
      childNodes.forEach(function (childNode) {
        findNodesByClass(childNode, Class, foundNodes);
      });
    }
  }

  return foundNodes;
}

function findTerminalNodes(node) {
  var foundTerminalNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    var foundTerminalNode = node; ///

    foundTerminalNodes.push(foundTerminalNode);
  } else {
    var nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      var nonTerminalNode = node,
          ///
      childNodes = nonTerminalNode.getChildNodes();
      childNodes.forEach(function (childNode) {
        findTerminalNodes(childNode, foundTerminalNodes);
      });
    }
  }

  return foundTerminalNodes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiZmluZE5vZGVCeUNsYXNzIiwibm9kZSIsIkNsYXNzIiwiZm91bmROb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzb21lIiwiY2hpbGROb2RlIiwiZmluZE5vZGVzQnlDbGFzcyIsImZvdW5kTm9kZXMiLCJwdXNoIiwiZm9yRWFjaCIsImZpbmRUZXJtaW5hbE5vZGVzIiwiZm91bmRUZXJtaW5hbE5vZGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiZm91bmRUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsS0FBL0IsRUFBc0M7QUFDM0MsTUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUVBLE1BQUlGLElBQUksWUFBWUMsS0FBcEIsRUFBMkI7QUFDekJDLElBQUFBLFNBQVMsR0FBR0YsSUFBWjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1HLG1CQUFtQixHQUFHSCxJQUFJLENBQUNJLGlCQUFMLEVBQTVCOztBQUVBLFFBQUlELG1CQUFKLEVBQXlCO0FBQ3ZCLFVBQU1FLGVBQWUsR0FBR0wsSUFBeEI7QUFBQSxVQUE4QjtBQUN4Qk0sTUFBQUEsVUFBVSxHQUFHRCxlQUFlLENBQUNFLGFBQWhCLEVBRG5CO0FBR0FELE1BQUFBLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixVQUFDQyxTQUFELEVBQWU7QUFDN0JQLFFBQUFBLFNBQVMsR0FBR0gsZUFBZSxDQUFDVSxTQUFELEVBQVlSLEtBQVosQ0FBM0I7O0FBRUEsWUFBSUMsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7QUFPRDtBQUNGOztBQUVELFNBQU9BLFNBQVA7QUFDRDs7QUFFTSxTQUFTUSxnQkFBVCxDQUEwQlYsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXdEO0FBQUEsTUFBakJVLFVBQWlCLHVFQUFKLEVBQUk7O0FBQzdELE1BQUlYLElBQUksWUFBWUMsS0FBcEIsRUFBMkI7QUFDekIsUUFBTUMsU0FBUyxHQUFHRixJQUFsQixDQUR5QixDQUNEOztBQUV4QlcsSUFBQUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCVixTQUFoQjtBQUNELEdBSkQsTUFJTztBQUNMLFFBQU1DLG1CQUFtQixHQUFHSCxJQUFJLENBQUNJLGlCQUFMLEVBQTVCOztBQUVBLFFBQUlELG1CQUFKLEVBQXlCO0FBQ3ZCLFVBQU1FLGVBQWUsR0FBR0wsSUFBeEI7QUFBQSxVQUE4QjtBQUN4Qk0sTUFBQUEsVUFBVSxHQUFHRCxlQUFlLENBQUNFLGFBQWhCLEVBRG5CO0FBR0FELE1BQUFBLFVBQVUsQ0FBQ08sT0FBWCxDQUFtQixVQUFDSixTQUFELEVBQWU7QUFDaENDLFFBQUFBLGdCQUFnQixDQUFDRCxTQUFELEVBQVlSLEtBQVosRUFBbUJVLFVBQW5CLENBQWhCO0FBQ0QsT0FGRDtBQUdEO0FBQ0Y7O0FBRUQsU0FBT0EsVUFBUDtBQUNEOztBQUVNLFNBQVNHLGlCQUFULENBQTJCZCxJQUEzQixFQUEwRDtBQUFBLE1BQXpCZSxrQkFBeUIsdUVBQUosRUFBSTtBQUMvRCxNQUFNQyxnQkFBZ0IsR0FBR2hCLElBQUksQ0FBQ2lCLGNBQUwsRUFBekI7O0FBRUEsTUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsUUFBTUUsaUJBQWlCLEdBQUdsQixJQUExQixDQURvQixDQUNZOztBQUVoQ2UsSUFBQUEsa0JBQWtCLENBQUNILElBQW5CLENBQXdCTSxpQkFBeEI7QUFDRCxHQUpELE1BSU87QUFDTCxRQUFNZixtQkFBbUIsR0FBR0gsSUFBSSxDQUFDSSxpQkFBTCxFQUE1Qjs7QUFFQSxRQUFJRCxtQkFBSixFQUF5QjtBQUN2QixVQUFNRSxlQUFlLEdBQUdMLElBQXhCO0FBQUEsVUFBOEI7QUFDeEJNLE1BQUFBLFVBQVUsR0FBR0QsZUFBZSxDQUFDRSxhQUFoQixFQURuQjtBQUdBRCxNQUFBQSxVQUFVLENBQUNPLE9BQVgsQ0FBbUIsVUFBQ0osU0FBRCxFQUFlO0FBQ2hDSyxRQUFBQSxpQkFBaUIsQ0FBQ0wsU0FBRCxFQUFZTSxrQkFBWixDQUFqQjtBQUNELE9BRkQ7QUFHRDtBQUNGOztBQUVELFNBQU9BLGtCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlQnlDbGFzcyhub2RlLCBDbGFzcykge1xuICBsZXQgZm91bmROb2RlID0gbnVsbDtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgZm91bmROb2RlID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDbGFzcyhjaGlsZE5vZGUsIENsYXNzKTtcblxuICAgICAgICBpZiAoZm91bmROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZXNCeUNsYXNzKG5vZGUsIENsYXNzLCBmb3VuZE5vZGVzID0gW10pIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgIGNvbnN0IGZvdW5kTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgZm91bmROb2Rlcy5wdXNoKGZvdW5kTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBmaW5kTm9kZXNCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIGZvdW5kTm9kZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGVybWluYWxOb2Rlcyhub2RlLCBmb3VuZFRlcm1pbmFsTm9kZXMgPSBbXSkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgZm91bmRUZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIGZvdW5kVGVybWluYWxOb2Rlcy5wdXNoKGZvdW5kVGVybWluYWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZpbmRUZXJtaW5hbE5vZGVzKGNoaWxkTm9kZSwgZm91bmRUZXJtaW5hbE5vZGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZFRlcm1pbmFsTm9kZXM7XG59XG4iXX0=