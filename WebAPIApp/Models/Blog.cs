using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIApp.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string Titre { get; set; }
        public string SousTitre { get; set; }
        public string Categorie { get; set; }
    }
}
