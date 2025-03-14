using Hello;
using Npgsql;
namespace Test
{
    class Test
    {
        public static void Main()
        {

            int x = 2;
            Add3(ref x);
            Console.WriteLine($"x={x}");
        }

        public static void Add3(ref int x)
        {
            x += 3;
        }
    }
}
