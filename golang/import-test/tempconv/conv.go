package tempconv

func KmToM(m Kmeter) Meter {
	return Meter(m*1000)
}

func MtoKm(km Meter) Kmeter {
	return KMeter(km/1000)
}