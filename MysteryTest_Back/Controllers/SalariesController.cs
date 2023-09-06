using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MysteryTest.Models;
using MysteryTest_Back.Data;
using MysteryTest_Back.Services.Interface;

namespace MysteryTest_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalariesController : ControllerBase
    {
        private readonly MysteryTestContext _context;
        private readonly ISalarieService _salarieService;

        public SalariesController(
            MysteryTestContext context,
            ISalarieService salarieService
            )
        {
            _context = context;
            _salarieService = salarieService;
        }

        // GET: api/Salaries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salarie>>> GetSalarie()
        {
          if (_context.Salarie == null)
          {
              return NotFound();
          }
            return await _context.Salarie.ToListAsync();
        }

        // GET: api/Salaries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Salarie>> GetSalarie(int id)
        {
          if (_context.Salarie == null)
          {
              return NotFound();
          }
            var salarie = await _context.Salarie.FindAsync(id);

            if (salarie == null)
            {
                return NotFound();
            }

            return salarie;
        }

        // PUT: api/Salaries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalarie(int id, Salarie salarie)
        {
            if (id != salarie.Id)
            {
                return BadRequest();
            }

            _context.Entry(salarie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalarieExists(id))
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

        // POST: api/Salaries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Salarie>> PostSalarie(Salarie salarie)
        {
          if (_context.Salarie == null)
          {
              return Problem("Entity set 'MysteryTestContext.Salarie'  is null.");
          }
            var isValid = _salarieService.IsAgeIsValid(salarie.DateDeNaissance, 100);

            if (!isValid)
            {
                return BadRequest("l'age doit être inferieur à 100 ans");
            }
            _context.Salarie.Add(salarie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalarie", new { id = salarie.Id }, salarie);
        }

        // DELETE: api/Salaries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalarie(int id)
        {
            if (_context.Salarie == null)
            {
                return NotFound();
            }
            var salarie = await _context.Salarie.FindAsync(id);
            if (salarie == null)
            {
                return NotFound();
            }

            _context.Salarie.Remove(salarie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalarieExists(int id)
        {
            return (_context.Salarie?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
