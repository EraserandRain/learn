package main

import (
	"flag"
	"fmt"
	"os"
	"strings"
)

var n = flag.Bool("n", false, "omit")
var sep = flag.String("s", " ", "spearator")
var h = flag.String(
	"h",
	"Usage of"+os.Args[0]+`
		-n 		 : omit
		-s string: spearator
	`,
	"help manual")

func main() {
	flag.Parse()
	if !*n {
		fmt.Println(strings.Join(flag.Args(), *sep))
	}
	fmt.Print("Option count: ", flag.NFlag(), "\t", "FLag Option count: ", flag.NArg())
}
