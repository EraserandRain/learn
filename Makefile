CURRENT_DATE := $(shell date -d '0 day' '+%Y%m%d')
GIT_COMMIT := $(shell git rev-parse --short HEAD)

push:
	git add -A
	git commit -m "test: Auto Deploy ${GIT_COMMIT} at ${CURRENT_DATE}"
	git push origin main
	echo "deploy success!"