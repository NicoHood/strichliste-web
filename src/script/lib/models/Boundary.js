
angular
    .module('strichliste.models.boundary', [])

    .factory('Boundary', function() {

        function Boundary(lower, upper) {
            this.lower = (lower == null) ? -Infinity : lower;
            this.upper = (upper == null) ? Infinity : upper;
        }

        Boundary.prototype.exceedsUpperLimit = function (value) {
            return (value > this.upper);
        };

        Boundary.prototype.exceedsLowerLimit = function (value) {
            return (value < this.lower);
        };

        Boundary.prototype.exceedsOrEqualsUpperLimit = function (value) {
            return (value >= this.upper);
        };

        Boundary.prototype.exceedsOrEqualsLowerLimit = function (value) {
            return (value <= this.lower);
        };


        return function(lowerBoundary, upperBoundary) {
            return new Boundary(lowerBoundary, upperBoundary);
        }
    });
