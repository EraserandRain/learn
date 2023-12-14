#include<stdio.h>

// T(n) = O(n)
int sum(int n){
    int sum = 0;
    for (int i=1;i<=n;i++){
        sum+=i;
    }    
    return sum;
}

// T(n) = O(n^2)
int cal(int n){
    int sum = 0;
    for (int i=1;i<=n;i++){
        for (int j=1;j<=n;j++){
            sum += i * j;
        }
    }
    return sum;
}

void main(){
    printf("%d\n",sum(5));
    printf("%d\n",cal(4));
}