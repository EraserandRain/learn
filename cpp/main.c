#include <stdio.h>
#include <dlfcn.h>
int main()
{
    int m, n;
    void* handler = dlopen("libmymath.so", RTLD_LAZY);
    if (dlerror() != NULL)
    {
        printf("%s", dlerror());
    }

    int (*add)(int, int) = dlsym(handler, "add");
    if (dlerror() != NULL)
    {
        printf("%s", dlerror());
    }

    int (*sub)(int, int) = dlsym(handler, "sub");
    if (dlerror() != NULL)
    {
        printf("%s", dlerror());
    }

    int (*div)(int, int) = dlsym(handler, "div");
    if (dlerror() != NULL)
    {
        printf("%s", dlerror());
    }

    printf("Input two numbers: ");
    scanf("%d %d", &m, &n);
    printf("%d+%d=%d\n", m, n, add(m, n));
    printf("%d-%d=%d\n", m, n, sub(m, n));
    printf("%d/%d=%d\n", m, n, div(m, n));
    dlclose(handler);
    return 0;
}