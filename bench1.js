if (Benchmark === undefined) {
    var Benchmark = require('benchmark');
}
var suite = new Benchmark.Suite;

// add tests
suite.add('Baseline Purescript', function() {
// Generated by purs version 0.13.8
"use strict";
var Node = (function () {
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
var Leaf = (function () {
    function Leaf(value0) {
        this.value0 = value0;
    };
    Leaf.create = function (value0) {
        return new Leaf(value0);
    };
    return Leaf;
})();
var foo = function (v) {
    return function (acc) {
        if (v instanceof Node) {
            return foo(v.value1)(foo(v.value0)(acc));
        };
        if (v instanceof Leaf) {
            return acc + v.value0 | 0;
        };
        throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
    };
};
var main = foo(new Node(new Node(new Node(new Leaf(1), new Leaf(2)), new Node(new Leaf(3), new Leaf(4))), new Node(new Node(new Leaf(5), new Leaf(6)), new Node(new Leaf(7), new Leaf(8)))))(0);
})
.add('Erlscripten Purescript', function() {
// Generated by purs version 0.13.8. Patched for erlscripten!
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
let foo = function ($copy_v) {
    return function ($copy_acc) {
        var $tco_var_v = $copy_v;
        $tco_loop: while (true) {
            let v = $tco_var_v;
            let acc = $copy_acc;
            if (v instanceof Node) {
                $tco_var_v = v.value1;
                $copy_acc = foo(v.value0)(acc);
                continue $tco_loop;
            };
            if (v instanceof Leaf) {
                return acc + v.value0 | 0;
            };
            throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
        };
    };
};
let main = foo(new Node(new Node(new Node(new Leaf(1), new Leaf(2)), new Node(new Leaf(3), new Leaf(4))), new Node(new Node(new Leaf(5), new Leaf(6)), new Node(new Leaf(7), new Leaf(8)))))(0);
})
.add('Baseline Purescript + Array with String tag', function() {
var foo = function (v) {
    return function (acc) {
        if (v[0] === "Node") {
            return foo(v[2])(foo(v[1])(acc));
        };
        if (v[0] === "Leaf") {
            return acc + v[1] | 0;
        };
        throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v[0] ]);
    };
};
var main = foo(["Node", ["Node", ["Node", ["Leaf", 1], ["Leaf", 2]], ["Node", ["Leaf", 3], ["Leaf", 4]]], ["Node", ["Node", ["Leaf", 5], ["Leaf", 6]], ["Node", ["Leaf", 7], ["Leaf", 8]]]])(0);
})
.add('Erlscripten Purescript + Array with String tag', function() {
"use strict";

let foo = function ($copy_v) {
    return function ($copy_acc) {
        var $tco_var_v = $copy_v;
        $tco_loop: while (true) {
            let v = $tco_var_v;
            let acc = $copy_acc;
            if (v[0] === "Node") {
                $tco_var_v = v[2];
                $copy_acc = foo(v[1])(acc);
                continue $tco_loop;
            };
            if (v[0] === "Leaf") {
                return acc + v[1] | 0;
            };
            throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
        };
    };
};

var main = foo(["Node", ["Node", ["Node", ["Leaf", 1], ["Leaf", 2]], ["Node", ["Leaf", 3], ["Leaf", 4]]], ["Node", ["Node", ["Leaf", 5], ["Leaf", 6]], ["Node", ["Leaf", 7], ["Leaf", 8]]]])(0);
})
.add('Baseline Purescript + Array with Int tag', function() {
var foo = function (v) {
    return function (acc) {
        if (v[0] === 0) {
            return foo(v[2])(foo(v[1])(acc));
        };
        if (v[0] === 1) {
            return acc + v[1] | 0;
        };
        throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v[0] ]);
    };
};
var main = foo([0, [0, [0, [1, 1], [1, 2]], [0, [1, 3], [1, 4]]], [0, [0, [1, 5], [1, 6]], [0, [1, 7], [1, 8]]]])(0);
})
.add('Erlscripten Purescript + Array with Int tag', function() {
"use strict";

let foo = function ($copy_v) {
    return function ($copy_acc) {
        var $tco_var_v = $copy_v;
        $tco_loop: while (true) {
            let v = $tco_var_v;
            let acc = $copy_acc;
            if (v[0] === 0) {
                $tco_var_v = v[2];
                $copy_acc = foo(v[1])(acc);
                continue $tco_loop;
            };
            if (v[0] === 1) {
                return acc + v[1] | 0;
            };
            throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
        };
    };
};

var main = foo([0, [0, [0, [1, 1], [1, 2]], [0, [1, 3], [1, 4]]], [0, [0, [1, 5], [1, 6]], [0, [1, 7], [1, 8]]]])(0);
})
.add('Baseline Purescript + Object with String tag', function() {
var foo = function (v) {
    return function (acc) {
        if (v.tag == "Node") {
            return foo(v.value1)(foo(v.value0)(acc));
        };
        if (v.tag == "Leaf") {
            return acc + v.value0 | 0;
        };
        throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
    };
};
// {tag: "Node", value0: _, value1: _}
// {tag: "Leaf", value0: _}
var main = foo({tag: "Node", value0: {tag: "Node", value0: {tag: "Node", value0: {tag: "Leaf", value0: 1}, value1: {tag: "Leaf", value0: 2}}, value1: {tag: "Node", value0: {tag: "Leaf", value0: 3}, value1: {tag: "Leaf", value0: 4}}}, value1: {tag: "Node", value0: {tag: "Node", value0: {tag: "Leaf", value0: 5}, value1: {tag: "Leaf", value0: 6}}, value1: {tag: "Node", value0: {tag: "Leaf", value0: 7}, value1: {tag: "Leaf", value0: 8}}}})(0);
})

.add('Erlscripten Purescript + Object with String tag', function() {
let foo = function ($copy_v) {
    return function ($copy_acc) {
        var $tco_var_v = $copy_v;
        $tco_loop: while (true) {
            let v = $tco_var_v;
            let acc = $copy_acc;
            if (v.tag === "Node") {
                $tco_var_v = v.value1;
                $copy_acc = foo(v.value0)(acc);
                continue $tco_loop;
            };
            if (v.tag === "Leaf") {
                return acc + v.value0 | 0;
            };
            throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
        };
    };
};
// {tag: "Node", value0: _, value1: _}
// {tag: "Leaf", value0: _}
var main = foo({tag: "Node", value0: {tag: "Node", value0: {tag: "Node", value0: {tag: "Leaf", value0: 1}, value1: {tag: "Leaf", value0: 2}}, value1: {tag: "Node", value0: {tag: "Leaf", value0: 3}, value1: {tag: "Leaf", value0: 4}}}, value1: {tag: "Node", value0: {tag: "Node", value0: {tag: "Leaf", value0: 5}, value1: {tag: "Leaf", value0: 6}}, value1: {tag: "Node", value0: {tag: "Leaf", value0: 7}, value1: {tag: "Leaf", value0: 8}}}})(0);
})

.add('Baseline Purescript + Object with Int tag', function() {
var foo = function (v) {
    return function (acc) {
        if (v.tag == 0) {
            return foo(v.value1)(foo(v.value0)(acc));
        };
        if (v.tag == 1) {
            return acc + v.value0 | 0;
        };
        throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
    };
};
// {tag: 0, value0: _, value1: _}
// {tag: 1, value0: _}
var main = foo({tag: 0, value0: {tag: 0, value0: {tag: 0, value0: {tag: 1, value0: 1}, value1: {tag: 1, value0: 2}}, value1: {tag: 0, value0: {tag: 1, value0: 3}, value1: {tag: 1, value0: 4}}}, value1: {tag: 0, value0: {tag: 0, value0: {tag: 1, value0: 5}, value1: {tag: 1, value0: 6}}, value1: {tag: 0, value0: {tag: 1, value0: 7}, value1: {tag: 1, value0: 8}}}})(0);
})

.add('Erlscripten Purescript + Object with Int tag', function() {
let foo = function ($copy_v) {
    return function ($copy_acc) {
        var $tco_var_v = $copy_v;
        $tco_loop: while (true) {
            let v = $tco_var_v;
            let acc = $copy_acc;
            if (v.tag === 0) {
                $tco_var_v = v.value1;
                $copy_acc = foo(v.value0)(acc);
                continue $tco_loop;
            };
            if (v.tag === 1) {
                return acc + v.value0 | 0;
            };
            throw new Error("Failed pattern match at A (line 7, column 1 - line 7, column 26): " + [ v.constructor.name, acc.constructor.name ]);
        };
    };
};
// {tag: 0, value0: _, value1: _}
// {tag: 1, value0: _}
var main = foo({tag: 0, value0: {tag: 0, value0: {tag: 0, value0: {tag: 1, value0: 1}, value1: {tag: 1, value0: 2}}, value1: {tag: 0, value0: {tag: 1, value0: 3}, value1: {tag: 1, value0: 4}}}, value1: {tag: 0, value0: {tag: 0, value0: {tag: 1, value0: 5}, value1: {tag: 1, value0: 6}}, value1: {tag: 0, value0: {tag: 1, value0: 7}, value1: {tag: 1, value0: 8}}}})(0);
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

