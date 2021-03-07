module Bench1 where
import Prelude

data Tree = Node Tree Tree | Leaf Int

foo :: Tree -> Int -> Int
foo (Node l r) acc = foo r (foo l acc)
foo (Leaf x) acc = acc + x

main :: Int
main = foo (Node (Node (Node (Leaf 1) (Leaf 2)) (Node (Leaf 3) (Leaf 4))) (Node (Node (Leaf 5) (Leaf 6)) (Node (Leaf 7) (Leaf 8)))) 0
