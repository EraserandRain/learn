.DEFAULT_GOAL := total
.PHONY: init

SHELL := /bin/bash
ENTRY_FILE := entry.yaml
play := ansible-playbook $(ENTRY_FILE)

total:
	$(play)

dependency:
	ansible-galaxy install -r requirements.yaml

lint:
	mkdir -p log/
	ansible-lint ./roles
