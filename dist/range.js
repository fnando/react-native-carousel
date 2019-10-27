"use strict";
exports.__esModule = true;
exports.range = function (count) {
    var buffer = [];
    while (buffer.length < count) {
        buffer.push(buffer.length);
    }
    return buffer;
};
//# sourceMappingURL=range.js.map