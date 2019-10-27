"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
exports.Indicator = function (_a) {
    var index = _a.index, currentPage = _a.currentPage;
    var selected = index === currentPage;
    var style = {
        backgroundColor: selected ? "#4a90e2" : "#ccc",
        borderRadius: 10,
        height: 10,
        marginHorizontal: 5,
        marginTop: 20,
        width: 10
    };
    return react_1["default"].createElement(react_native_1.View, { style: style });
};
//# sourceMappingURL=Indicator.js.map