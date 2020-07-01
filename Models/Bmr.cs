using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BmrCalculator.Models
{
    public class Bmr
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public int age { get; set; }
        public decimal weight { get; set; }
        public decimal height { get; set; }
        public decimal bmr { get; set; }
        public DateTime createdOn { get; set; }
        public string userId { get; set; }
        public ApplicationUser User { get; set; }

    }
}
