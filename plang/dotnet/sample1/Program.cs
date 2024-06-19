using Hello;
namespace Test
{
    class Test
    {
        static void Main(string[] args)
        {
            Message value = new()
            {
                Msg = "Dotnet"
            };
            string name = value.Msg;
            HelloWorld.Foo(name);
            HelloWorld.Foo(Message.Eg);
        }
    }
}
