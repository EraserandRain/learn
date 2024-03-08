.DEFAULT_GOAL := total
.PHONY: init

SHELL := /bin/bash
ENTRY_FILE := entry.yaml
play := ansible-playbook $(ENTRY_FILE)
create_log_dir := mkdir -p log/

total: dependency
	$(play)

dependency:
	$(create_log_dir)
	ansible-galaxy install -r requirements.yaml

lint:
	$(create_log_dir)
	ansible-lint ./roles
