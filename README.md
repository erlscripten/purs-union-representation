# Benchmark alternative data structure representations in purescript

Background: https://github.com/purescript/purescript/issues/4020

This repository contains 3 benchmarks:
1. Sum the values in a binary tree(bench1.purs)
2. Evaluate a simple language with 12 operations(bench2.purs)
3. Construct a binary tree with more than a milion leafs(bench3.purs)

We benchmark 4 alternative representations:
1. Arrays with string tags - ["TAG", val0, val1, ...]
2. Arrays with int tags - [IntTag, val0, val1, ...]
3. Objects with string tags - {tag: "TAG", val0: ..., val1: ..., ...}
4. Objects with int tags - {tag: IntTag, val0: ..., val1: ..., ...}

We evaluate the proposal on both the 0.18 purs compiler and the erlscripten purs fork

# How to run the benchmarks on your machine?
```[sh]
git clone <url_to_this_repository>
npm install
node bench[1-3].js
firefox/chromium bench[1-3].js ## The results will be printed in the dev console
```


# The results on my machine are:
## NodeJS:

| Test       | Base compiler | Variant | Tag Type | Result  | Best in group
--- | --- | --- | --- | --- | ---
| BinTree Sum | 0.18 | N/A | N/A | 107,189 ops/sec ±2.12% (85 runs sampled)
| BinTree Sum | 0.18 | Arrays | String  | 793,423 ops/sec ±1.79% (91 runs sampled)
| BinTree Sum | 0.18 | Arrays | Int     | 788,429 ops/sec ±2.22% (92 runs sampled)
| BinTree Sum | 0.18 | Object | String  | 802,344 ops/sec ±1.38% (92 runs sampled)
| BinTree Sum | 0.18 | Object | Int     | 837,855 ops/sec ±1.42% (91 runs sampled) | x
| BinTree Sum | Erlps | N/A | N/A | 107,683 ops/sec ±2.02% (87 runs sampled)
| BinTree Sum | Erlps | Arrays | String  | 902,002 ops/sec ±1.51% (94 runs sampled)
| BinTree Sum | Erlps | Arrays | Int     | 905,245 ops/sec ±1.48% (90 runs sampled) | x
| BinTree Sum | Erlps | Object | String  | 874,950 ops/sec ±2.02% (90 runs sampled)
| BinTree Sum | Erlps | Object | Int     | 896,655 ops/sec ±2.01% (90 runs sampled)
| Eval | 0.18 | N/A | N/A | 18,415 ops/sec ±2.33% (82 runs sampled)
| Eval | 0.18 | Arrays | String  | 407,797 ops/sec ±4.31% (71 runs sampled)
| Eval | 0.18 | Arrays | Int     | 512,056 ops/sec ±1.29% (65 runs sampled)
| Eval | 0.18 | Object | String  | 485,395 ops/sec ±2.53% (77 runs sampled)
| Eval | 0.18 | Object | Int     | 527,289 ops/sec ±3.46% (82 runs sampled) | x
| Eval | Erlps | N/A | N/A | 15,513 ops/sec ±4.45% (71 runs sampled)
| Eval | Erlps | Arrays | String  | 476,769 ops/sec ±2.22% (73 runs sampled)
| Eval | Erlps | Arrays | Int     | 557,647 ops/sec ±2.55% (63 runs sampled)
| Eval | Erlps | Object | String  | 539,742 ops/sec ±2.69% (76 runs sampled)
| Eval | Erlps | Object | Int     | 621,607 ops/sec ±0.85% (87 runs sampled) | x
| Construct Bintree | 0.18 | N/A | N/A | 4.82 ops/sec ±19.38% (15 runs sampled)
| Construct Bintree | 0.18 | Arrays | String  | 6.54 ops/sec ±34.80% (20 runs sampled)
| Construct Bintree | 0.18 | Arrays | Int     | 8.56 ops/sec ±21.40% (25 runs sampled)
| Construct Bintree | 0.18 | Object | String  | 10.56 ops/sec ±16.50% (31 runs sampled)
| Construct Bintree | 0.18 | Object | Int     | 12.28 ops/sec ±17.71% (26 runs sampled) | x
| Construct Bintree | Erlps | N/A | N/A | 4.82 ops/sec ±19.38% (15 runs sampled)
| Construct Bintree | Erlps | Arrays | String  | 6.54 ops/sec ±34.80% (20 runs sampled)
| Construct Bintree | Erlps | Arrays | Int     | 8.56 ops/sec ±21.40% (25 runs sampled)
| Construct Bintree | Erlps | Object | String  | 10.56 ops/sec ±16.50% (31 runs sampled)
| Construct Bintree | Erlps | Object | Int     | 12.28 ops/sec ±17.71% (26 runs sampled) | x

## Firefox:
| Test       | Base compiler | Variant | Tag Type | Result  | Best in group
--- | --- | --- | --- | --- | ---
| BinTree Sum | 0.18 | N/A | N/A | 76,324 ops/sec ±4.19% (51 runs sampled)
| BinTree Sum | 0.18 | Arrays | String  | 1,241,268 ops/sec ±5.79% (48 runs sampled)
| BinTree Sum | 0.18 | Arrays | Int     | 1,493,256 ops/sec ±0.84% (60 runs sampled) | x
| BinTree Sum | 0.18 | Object | String  | 1,390,873 ops/sec ±1.16% (59 runs sampled)
| BinTree Sum | 0.18 | Object | Int     | 1,359,690 ops/sec ±1.24% (62 runs sampled)
| BinTree Sum | Erlps | N/A | N/A | 73,091 ops/sec ±3.49% (49 runs sampled)
| BinTree Sum | Erlps | Arrays | String  | 1,748,818 ops/sec ±3.41% (54 runs sampled)
| BinTree Sum | Erlps | Arrays | Int     | 1,715,632 ops/sec ±0.62% (62 runs sampled)
| BinTree Sum | Erlps | Object | String  | 1,785,698 ops/sec ±0.56% (61 runs sampled) | x
| BinTree Sum | Erlps | Object | Int     |  1,654,341 ops/sec ±1.05%
| Eval | 0.18 | N/A | N/A | 9,698 ops/sec ±2.99% (52 runs sampled)
| Eval | 0.18 | Arrays | String  | 547,804 ops/sec ±1.74% (58 runs sampled)
| Eval | 0.18 | Arrays | Int     | 647,865 ops/sec ±2.46% (58 runs sampled) | x
| Eval | 0.18 | Object | String  | 359,063 ops/sec ±0.55% (62 runs sampled)
| Eval | 0.18 | Object | Int     | 402,048 ops/sec ±0.45% (62 runs sampled)
| Eval | Erlps | N/A | N/A | 9,118 ops/sec ±5.91% (47 runs sampled)
| Eval | Erlps | Arrays | String  | 566,536 ops/sec ±2.34% (58 runs sampled)
| Eval | Erlps | Arrays | Int     | 660,079 ops/sec ±1.41% (61 runs sampled) | x
| Eval | Erlps | Object | String  | 242,299 ops/sec ±0.54% (61 runs sampled)
| Eval | Erlps | Object | Int     | 268,149 ops/sec ±0.60% (60 runs sampled)
| Construct Bintree | 0.18 | N/A | N/A | 2.00 ops/sec ±24.07% (9 runs sampled)
| Construct Bintree | 0.18 | Arrays | String  | 1.99 ops/sec ±20.98% (9 runs sampled)
| Construct Bintree | 0.18 | Arrays | Int     | 3.14 ops/sec ±6.31% (12 runs sampled)
| Construct Bintree | 0.18 | Object | String  | 4.50 ops/sec ±5.73% (15 runs sampled)
| Construct Bintree | 0.18 | Object | Int     | 5.51 ops/sec ±2.56% (15 runs sampled) | x
| Construct Bintree | Erlps | N/A | N/A | 2.00 ops/sec ±24.07% (9 runs sampled)
| Construct Bintree | Erlps | Arrays | String  | 1.99 ops/sec ±20.98% (9 runs sampled)
| Construct Bintree | Erlps | Arrays | Int     | 3.14 ops/sec ±6.31% (12 runs sampled) | 
| Construct Bintree | Erlps | Object | String  | 4.50 ops/sec ±5.73% (15 runs sampled) | 
| Construct Bintree | Erlps | Object | Int     | 5.51 ops/sec ±2.56% (15 runs sampled) | x
