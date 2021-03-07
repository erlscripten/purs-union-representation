module Bench2 where
import Prelude

data Expr = Literal Int
          | AddOne Expr
          | AddTwo Expr
          | AddThree Expr
          | AddFour Expr
          | AddFive Expr
          | Add Expr Expr
          | SubOne Expr
          | SubTwo Expr
          | SubThree Expr
          | SubFour Expr
          | SubFive Expr
          | Sub Expr Expr

eval :: Expr -> Int
eval (Literal i) = i
eval (AddOne e) = eval (Add e (Literal 1))
eval (AddTwo e) = eval (Add e (Literal 2))
eval (AddThree e) = eval (Add e (Literal 3))
eval (AddFour e) = eval (Add e (Literal 4))
eval (AddFive e) = eval (Add e (Literal 5))
eval (Add e1 e2) = (eval e1) + (eval e2)
eval (SubOne e) = eval (Sub e (Literal 1))
eval (SubTwo e) = eval (Sub e (Literal 2))
eval (SubThree e) = eval (Sub e (Literal 3))
eval (SubFour e) = eval (Sub e (Literal 4))
eval (SubFive e) = eval (Sub e (Literal 5))
eval (Sub e1 e2) = (eval e1) - (eval e2)

c1 :: Int -> Expr
c1 a = SubOne $ SubTwo $ SubThree $ SubFour $ SubFive (Literal a)
c2 :: Int -> Expr
c2 a = AddOne $ AddTwo $ AddThree $ AddFour $ AddFive (Literal a)

main :: Int
main = eval $ Sub (Add (c1 1337) (c2 1337)) (Add (c2 1337) (c1 1337))
