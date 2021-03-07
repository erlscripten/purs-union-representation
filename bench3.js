if (Benchmark === undefined) {
    var Benchmark = require('benchmark');
}
var suite = new Benchmark.Suite;

// add tests
suite.add('Baseline Purescript', function() {

"use strict";
let Node = (function () {
    function Node(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Node.create = function (value0) {
        return function (value1) {
            return new Node(value0, value1);
        };
    };
    return Node;
})();
let Leaf = (function () {
    function Leaf(value0) {
        this.value0 = value0;
    };
    Leaf.create = function (value0) {
        return new Leaf(value0);
    };
    return Leaf;
})();
let foo = function (v) {
    if (v === 0) {
        return new Leaf(0);
    };
    return new Node(foo(v - 1 | 0), foo(v - 1 | 0));
};
let main = foo(20);


})
.add('Baseline + Array with String tag', function() {

let foo = function (v) {
    if (v === 0) {
        return ["Leaf", 0];
    };
    return ["Node", foo(v - 1 | 0), foo(v - 1 | 0)];
};
let main = foo(20);


})
.add('Baseline + Array with Int tag', function() {
let foo = function (v) {
    if (v === 0) {
        return [0, 0];
    };
    return [1, foo(v - 1 | 0), foo(v - 1 | 0)];
};
let main = foo(20);


})
.add('Baseline + Object with String tag', function() {
let foo = function (v) {
    if (v === 0) {
        return {tag: "Leaf", value0: 0};
    };
    return {tag: "Node", value0: foo(v - 1 | 0), value0: foo(v - 1 | 0)};
};
let main = foo(20);

})
.add('Baseline + Object with Int tag', function() {

let foo = function (v) {
    if (v === 0) {
        return {tag: 0, value0: 0};
    };
    return {tag: 1, value0: foo(v - 1 | 0), value0: foo(v - 1 | 0)};
};
let main = foo(20);

})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

