using back_agenda.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace back_agenda.Data
{
    public class AgendaContext : DbContext
    {
        public AgendaContext(DbContextOptions<AgendaContext> options): base(options) {}

        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Compromisso> Compromissos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Evento>()
                .HasKey(e => e.Id);

            modelBuilder.Entity<Compromisso>()
                .HasKey(e => e.Id);

        }
    }
}
