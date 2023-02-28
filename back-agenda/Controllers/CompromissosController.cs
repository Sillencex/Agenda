using back_agenda.Data;
using back_agenda.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_agenda.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompromissosController : ControllerBase
    {
        private readonly AgendaContext _contexto;

        public CompromissosController(AgendaContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Compromisso>>> GetCompromissos()
        {
            return await _contexto.Compromissos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Compromisso>> GetCompromisso(int id)
        {
            var compromisso = await _contexto.Compromissos.FindAsync(id);

            if (compromisso == null)
            {
                return NotFound();
            }

            return compromisso;
        }

        [HttpPost]
        public async Task<ActionResult<Compromisso>> PostCompromisso(Compromisso compromisso)
        {
            _contexto.Compromissos.Add(compromisso);
            await _contexto.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCompromisso), new { id = compromisso.Id }, compromisso);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompromisso(int id, Compromisso compromisso)
        {
            if (id != compromisso.Id)
            {
                return BadRequest();
            }

            _contexto.Entry(compromisso).State = EntityState.Modified;
            try
            {
                await _contexto.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompromissoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompromisso(int id)
        {
            var compromisso = await _contexto.Compromissos.FindAsync(id);

            if (compromisso == null)
            {
                return NotFound();
            }

            _contexto.Compromissos.Remove(compromisso);
            await _contexto.SaveChangesAsync();

            return NoContent();
        }

        private bool CompromissoExists(int id)
        {
            return _contexto.Compromissos.Any(e => e.Id == id);
        }
    }
}
