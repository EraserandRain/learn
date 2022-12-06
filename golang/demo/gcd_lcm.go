package main

import "fmt"

func gcd(x,y int) int {
	for y != 0 {
		x,y = y , x%y
	}
	return x 
}
func lcm(x,y int) int {
	return x * y /gcd(x,y)
}

func main(){
	n,m :=6,15
	fmt.Println(gcd(n,m))
	fmt.Println(lcm(n,m))
}
