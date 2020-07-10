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

            return await _context.BMRs.Where(bmr => bmr.userId == userId).ToArrayAsync();
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

            // use UTC so that angular can properly correct the date.
            bmr.createdOn = DateTime.Now;

            _context.BMRs.Add(bmr);
            await _context.SaveChangesAsync();

            return bmr;
        }
    }
}