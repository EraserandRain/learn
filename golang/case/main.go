package main

import "fmt"

func main(){
	s := []int{1,2,3,4}
	doubled := mapInts(s,func(i int) int { return i * 2})
	fmt.Println(s,doubled)
}

func mapInts(s []int,f func(int) int) []int {
	result := make([]int, len(s))
	for i,v := range s {
		result[i] = f(v)
	}
	return result
}

