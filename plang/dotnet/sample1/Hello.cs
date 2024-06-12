namespace Hello
{
    class HelloWorld
    {
        public static void Foo(string v)
        {
            Console.WriteLine($"Hello {v}!");
        }
    }

    class Message
    {
        public const string Eg = "World";
        private string _Msg="";
        public string Msg
        {
            get { return _Msg; }
            set
            {
                if (value.Length > 10) {
                    throw new ArgumentException("Msg cannot be longer than 10");
                }
                _Msg = value;
            }
        }
    }
}