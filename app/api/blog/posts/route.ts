import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/app/lib/blog';

export async function GET() {
  const posts = getBlogPosts();
  return NextResponse.json(posts);
}

