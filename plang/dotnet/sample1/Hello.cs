namespace Hello
{
    class Message
    {
        public static void Hello(string v)
        {
            Console.WriteLine($"Hello {v}!");
        }
        public const string Eg = "World";
        private string _Msg = "";
        public string Msg
        {
            get { return _Msg; }
            set
            {
                if (value.Length > 10)
                {
                    throw new ArgumentException("Msg cannot be longer than 10");
                }
                _Msg = value;
            }
        }
    }
}