using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ArticlesFeed.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ArticlesFeed.Controllers
{
    [ApiController]
    [Route("api/articles")]
    public class ArticleController : Controller
    {
        private readonly ApplicationContext _db;

        public ArticleController(ApplicationContext context)
        {
            _db = context;
            if (!_db.Articles.Any())
            {
                _db.Articles.Add(new Article { Heading = "Test1", Date = DateTime.Today });
                _db.Articles.Add(new Article { Heading = "Test2", Date = DateTime.Today });
                _db.Articles.Add(new Article { Heading = "Test3", Date = DateTime.Today });

                _db.SaveChanges();
            }
        }
        [HttpGet]
        public IAsyncEnumerable<Article> Get()
        {
            return _db.Articles.AsAsyncEnumerable();
        }

        [HttpGet("{id}")]
        public async Task<Article> GetAsync(int id)
        {
            return await _db.Articles.FirstOrDefaultAsync(x => x.Id == id);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(Article article)
        {
            if (ModelState.IsValid)
            {
                await _db.Articles.AddAsync(article);
                await _db.SaveChangesAsync();
                return Ok(article);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<IActionResult> PutAsync(Article article)
        {
            if (ModelState.IsValid)
            {
                _db.Update(article);
                await _db.SaveChangesAsync();
                return Ok(article);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            Article article = _db.Articles.FirstOrDefault(x => x.Id == id);
            if (article != null)
            {
                _db.Articles.Remove(article);
                await _db.SaveChangesAsync();
            }
            return Ok(article);
        }
    }
}
