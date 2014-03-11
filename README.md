Expression
==========
expression is a javascript library to evaluate expressions.

Examples
==============

1. finding average of an array
        var exp = 'avg($x)',
            data = { $x: [1,2,3,4,5,6,7,8]};
        var result = expression.solve(exp, data);
2. finding sum of an array
        var exp = 'sum($x)',
            data = {$x:[1,2,3,4,5,6,7,8]};
        var result = expression.solve(exp, data);
3. finding min of an array
        var exp = 'min($x)',
            data = {$x:[1,2,3,4,5,6,7,8]};
        var result = expression.solve(exp, data);
4. finding max of an array
        var exp = 'max($x)',
            data = {$x:[1,2,3,4,5,6,7,8]};
        var result = expression.solve(exp, data);
5. solving complex expressions.
        var exp='sum($x)*sin($y)',
            data = {
                $x: [1,2,3,4,5,6,7,8,9,10],
                $y: Math.PI/2
            };
        var result = expression.solve(exp, data);

    another example

        var exp='pow($x,2) + $x + 2',
            data = {
                $x: 3
            };
        var result = expression.solve(exp, data);
