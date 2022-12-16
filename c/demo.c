#include <stdio.h>

int main(){
	void Swap(int *x,int *y){
		int temp;
		temp = *x;
		*x = *y;
		*y = temp;
	}

	int a = 1;
	int b = 2;
	Swap(&a, &b);
	printf("a = %d\n",a);
	printf("b = %d\n",b);
}


