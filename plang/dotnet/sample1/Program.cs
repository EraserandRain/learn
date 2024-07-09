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
            Message.Hello(name);
            Message.Hello(Message.Eg);
        }
    }
}
