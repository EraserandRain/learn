package main

import (
	"fmt"
	// "math"
	// "strconv"
)

func main(){
	data := "IVXLCDM"
	fmt.Println(data)
	for key,value := range data {
		fmt.Println(key,value)
	}
}
