using System;

namespace ArticlesFeed.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Heading { get; set; }
        public string ShortDescription { get; set; }  
        public string Content { get; set; }  
        public DateTime? Date { get; set; }  
        public string Author { get; set; }  
        public string SourceUrl { get; set; }  
    }
}
