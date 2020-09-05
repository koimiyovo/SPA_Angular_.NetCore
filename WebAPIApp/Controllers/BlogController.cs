using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WebAPIApp.Data;
using WebAPIApp.Models;

namespace WebAPIApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BlogController : ControllerBase
    {
        private readonly ApiDbContext apiDbContext;

        public BlogController(ApiDbContext context)
        {
            this.apiDbContext = context;
        }

        [HttpPost]
        public IActionResult CreateBlog([FromBody] Blog blog)
        {
            this.apiDbContext.Blogs.Add(blog);
            this.apiDbContext.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult EditBlog([FromBody] Blog blog)
        {
            this.apiDbContext.Blogs.Update(blog);
            this.apiDbContext.SaveChanges();

            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetBlog(int id)
        {
            var blog = this.apiDbContext.Blogs.FirstOrDefault(b => b.Id == id);

            return Ok(blog);
        }
        
        [HttpGet]
        public IActionResult GetBlogs()
        {
            var blogs = this.apiDbContext.Blogs.ToList();

            return Ok(blogs);
        }

        [HttpPost("{blogId}/article")]
        public IActionResult CreateArticle(int blogId, [FromBody] Article article)
        {
            var blogFound = this.apiDbContext.Blogs.FirstOrDefault(blog => blog.Id == blogId);

            if (blogFound == null)
                return NotFound(blogId);

            article.Blog = blogFound;

            this.apiDbContext.Articles.Add(article);
            this.apiDbContext.SaveChanges();

            return Ok();
        }
    }
}
