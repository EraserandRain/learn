CSOURCE = main.c

all: cppcheck gcc exec

cppcheck:
	@echo "-------------------------"
	@echo "Cppcheck results:"
	@cppcheck $(CSOURCE)

gcc:
	@echo "GCC results:"
	@gcc $(CSOURCE)
	@echo "-------------------------"

exec:
	@sudo ./a.out