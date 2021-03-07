module Bench3 where
import Prelude

data Tree = Node Tree Tree | Leaf Int

foo :: Int -> Tree
foo 0 = Leaf 0
-- foo n = let x = foo (n-1) in Node x x -- We want to benchmark it ;)
foo n = Node (foo (n-1)) (foo (n-1))

main :: Tree
main = foo 20
