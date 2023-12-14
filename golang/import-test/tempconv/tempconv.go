package tempconv

import "fmt"

type Kmeter float64
type Meter float64
const (
	Akm Kmeter = 1
	Bkm Kmeter = 1.5
	Ckm Kmeter = 12
)

func (km Kmeter) String() string {
	return fmt.Sprintf("%gkm",km)
}
func (m Meter) String() string {
	return fmt.Sprintf("%gm",m)
}
