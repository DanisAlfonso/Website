import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

const contentDirectory = path.join(process.cwd(), 'app/content');

export function getBlogPosts() {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPosts = fileNames.map(fileName => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const contentHtml = markdown.render(matterResult.content);
    const excerpt = matterResult.content.split('\n').slice(0, 3).join(' ');

    return {
      id: fileName.replace(/\.md$/, ''),
      ...matterResult.data,
      contentHtml,
      excerpt,
    };
  });
  return allPosts;
}

export function getBlogPost(id: string) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const contentHtml = markdown.render(matterResult.content);

  return {
    id,
    ...matterResult.data,
    contentHtml,
  };
}

