namespace Test
{
    class Test
    {
        static void Main(string[] args)
        {
            Hello.Message value = new()
            {
                Msg = "Dotnet"
            };
            string name = value.Msg;
            Hello.HelloWorld.Foo(name);
            Hello.HelloWorld.Foo(Hello.Message.Eg);
        }
    }
}
