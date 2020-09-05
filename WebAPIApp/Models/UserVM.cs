using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIApp.Models
{
    public class UserVM
    {
        public User User{ get; set; }
        public string Password { get; set; }
    }
}
