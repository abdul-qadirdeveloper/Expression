/**
 * Created with JetBrains WebStorm.
 * User: Abdul Q
 * Date: 2/27/14
 * Time: 2:50 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    var $tbody;
    function test1(){
       var exp = 'sum($x)',
       data = [1,2,3,4,5,6,7,8];

       var result = expression.solve(exp, {$x: data});
       log(exp, data, result);
    };
    function log(exp, data, result){
        $tbody.append($('<tr/>').append($('<td/>').text(exp)).append($('<td/>').text(data)).append($('<td/>').text(result)));
    }
    function runAllTests(){
        console.log('testing');
        $tbody = $('#testResult tbody');
        test1();
    }
    runAllTests();
});