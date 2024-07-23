var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pt = new Point();
pt.x = 0;
pt.y = 0;
var PointAgain = /** @class */ (function () {
    function PointAgain() {
        this.x = 0;
        this.y = 0;
    }
    return PointAgain;
}());
var ptA = new Point();
// Prints 0, 0
console.log("".concat(pt.x, ", ").concat(pt.y));
