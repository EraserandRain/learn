package main
import "fmt"


func main(){
	arr := [4]string{"a","b","c","d"}
	fmt.Println(len(arr))
	for key,value := range arr {
		fmt.Printf("key:%d value:%s\n",key,value)
	}
	index := 2
	fmt.Println(append(arr[:index],arr[index+1:]...))
}