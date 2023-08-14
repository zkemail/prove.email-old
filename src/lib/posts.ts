import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import grayMatter from 'gray-matter';

export function getPosts() {
  const postsPath = join(process.cwd(), 'src/blog/public');
  
  const postFiles = readdirSync(postsPath);

  return postFiles.map(filename => {
    const markdown = readFileSync(join(postsPath, filename));
    
    // parse frontmatter
    const { data } = grayMatter(markdown);

    return {
        title: data.title,
        date: data.date,
        // etc...
    }
  });
}