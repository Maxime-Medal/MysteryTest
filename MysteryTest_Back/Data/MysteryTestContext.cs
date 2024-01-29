using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MysteryTest.Models;

namespace MysteryTest_Back.Data
{
    public class MysteryTestContext : DbContext
    {
        public MysteryTestContext (DbContextOptions<MysteryTestContext> options) : base(options)
        {
        }

        public DbSet<Client> Client { get; set; }

        public DbSet<Salarie> Salarie { get; set; }
    }
}
