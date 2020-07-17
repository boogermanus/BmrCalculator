using System.Linq;
using BmrCalculator.Data;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using BmrCalculator.Models;
using System.Security.Claims;
using System;

namespace BmrCalculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BMRController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BMRController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<Bmr[]> GetBmrForUser([FromQuery] string userId)
        {
            if (string.IsNullOrWhiteSpace(userId))
                userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            return await _context.BMRs
                .Where( bmr => bmr.userId == userId)
                .OrderByDescending(bmr => bmr.createdOn)
                .Select(bmr => FormatBmr(bmr))
                .ToArrayAsync();
        }

        [HttpGet("all")]
        public async Task<Bmr[]> GetAllBmrs()
        {
            return await _context.BMRs.ToArrayAsync();
        }

        [HttpPost]
        public async Task<Bmr> AddBmr([FromBody]Bmr bmr)
        {
            if(string.IsNullOrWhiteSpace(bmr.userId))
                bmr.userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            bmr.createdOn = DateTime.Now;

            _context.BMRs.Add(bmr);
            await _context.SaveChangesAsync();

            return bmr;
        }

        [HttpDelete("{id}")]
        public async Task<Bmr> RemoveBmr(int id)
        {
            var found = await _context.BMRs.FirstOrDefaultAsync(bmr => bmr.id == id);

            if(found != null)
            {
                _context.BMRs.Remove(found);
                await _context.SaveChangesAsync();
            }

            return found == null ? null : found;
        }

        private static Bmr FormatBmr(Bmr value)
        {
            value.weight = Math.Round(value.weight, 2);
            value.height = Math.Round(value.height, 2);
            value.bmr = Math.Round(value.bmr, 3);

            return value;
        }
    }
}