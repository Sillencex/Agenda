namespace back_agenda.Models
{
    public class Compromisso
    {
        public int Id { get; set; }
        public DateTime Data { get; set; }
        public string Hora { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
    }
}
