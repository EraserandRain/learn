project_name=cproject

builder-build:
	docker build -f Dockerfile -t $(project_name)-builder:latest .

builder-run:
	docker compose run cproject-builder
