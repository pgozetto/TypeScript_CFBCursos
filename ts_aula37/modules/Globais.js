"use strict";
exports.__esModule = true;
var Globais;
(function (Globais) {
    var Math = /** @class */ (function () {
        function Math() {
        }
        Math.Sum = function (first, second) {
            return first + second;
        };
        Math.Subtraction = function (first, second) {
            return first - second;
        };
        Math.Multiplication = function (first, second) {
            return first * second;
        };
        Math.Division = function (first, second) {
            if (second == 0) {
                throw new Error("Cannot divide by zero");
            }
            return first / second;
        };
        Math.Power = function (first, second) {
            return Math.pow(first, second);
        };
        Math.PI = 3.141592653589793; // APROX
        Math.E = 2.7182818284559045; // APROX
        return Math;
    }());
    Globais.Math = Math;
})(Globais || (Globais = {}));
exports["default"] = Globais;
