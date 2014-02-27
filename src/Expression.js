/**
 * Created with JetBrains WebStorm.
 * User: Abdul Q
 * Date: 2/27/14
 * Time: 2:46 PM
 * To change this template use File | Settings | File Templates.
 */
window.expression = (function (window, document) {
    function max() {
        return Math.max.apply(null, arguments);
    }
    function min() {
        return Math.min.apply(null, arguments);
    }
    function sum() {
        var result = 0;
        for (var x in arguments) {
            result += arguments[x]*1;
        }
        return result;
    }
    function avg() {
        return sum.apply(null, arguments) / arguments.length;
    }
    function abs() {
        return Math.abs.apply(null, arguments);
    }
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    return expression = {
        solve: function (exp, variables) {
            //  console.log(exp);
            //  console.log(variables);
            var newExpression = exp;
            for (var variable in variables) {
                newExpression = newExpression.replace(new RegExp(escapeRegExp(variable), 'g'), variables[variable]);
            }
            // console.log(newExpression);
            return eval(newExpression);
        }
    };
}(window, document));