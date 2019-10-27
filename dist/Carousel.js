"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var Indicator_1 = require("./Indicator");
var range_1 = require("./range");
var defaultIndicatorRenderer = function (_a) {
    var currentPage = _a.currentPage, index = _a.index;
    return (react_1["default"].createElement(Indicator_1.Indicator, { key: index, currentPage: currentPage, index: index }));
};
var CarouselComponent = function (_a, ref) {
    var children = _a.children, _b = _a.renderIndicator, renderIndicator = _b === void 0 ? defaultIndicatorRenderer : _b, _c = _a.showsIndicator, showsIndicator = _c === void 0 ? true : _c, onPageChange = _a.onPageChange, onLayout = _a.onLayout;
    var _d = react_1.useState(0), pageWidth = _d[0], setPageWidth = _d[1];
    var _e = react_1.useState(0), currentPage = _e[0], setCurrentPage = _e[1];
    var scrollView = react_1.useRef();
    var pageCount = children.length;
    react_1.useImperativeHandle(ref, function () { return ({
        scrollView: scrollView.current,
        goToPage: function (page, animated) {
            if (animated === void 0) { animated = true; }
            if (scrollView.current) {
                scrollView.current.scrollTo({
                    x: pageWidth * (page - 1),
                    y: 0,
                    animated: animated
                });
            }
        }
    }); });
    var handleScroll = function (_a) {
        var x = _a.nativeEvent.contentOffset.x;
        var newPage = Math.round(Math.abs(x / pageWidth));
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            if (onPageChange instanceof Function) {
                onPageChange({ currentPage: newPage, pageCount: pageCount });
            }
        }
    };
    var handleLayout = function (_a) {
        var _b = _a.nativeEvent.layout, width = _b.width, height = _b.height;
        setPageWidth(width);
        if (onLayout instanceof Function) {
            onLayout({ pageCount: pageCount, pageWidth: width, pageHeight: height });
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.ScrollView, { ref: scrollView, bounces: false, horizontal: true, onLayout: handleLayout, onScroll: handleScroll, onScrollBeginDrag: handleScroll, pagingEnabled: true, scrollEventThrottle: 100, showsHorizontalScrollIndicator: false }, children.map(function (child, index) { return (react_1["default"].createElement(react_native_1.View, { key: index, style: { width: pageWidth } }, child)); })),
        showsIndicator && (react_1["default"].createElement(react_native_1.View, { style: {
                flex: 1,
                flexDirection: "row",
                justifyContent: "center"
            } }, range_1.range(pageCount).map(function (index) {
            return renderIndicator({ index: index, currentPage: currentPage });
        })))));
};
exports.Carousel = react_1.forwardRef(CarouselComponent);
//# sourceMappingURL=Carousel.js.map