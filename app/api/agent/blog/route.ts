import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET: Returns published posts and brand data for the agent
export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!process.env.AGENT_SECRET_KEY || authHeader !== `Bearer ${process.env.AGENT_SECRET_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const SITE_ROOT = process.cwd();
    const BLOG_DIR = path.join(SITE_ROOT, 'content', 'blog');
    const DATA_FILE = path.join(SITE_ROOT, 'lib', 'data.ts');

    let posts: any[] = [];
    try {
      if (fs.existsSync(BLOG_DIR)) {
        const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
        for (const file of files) {
          const text = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
          const slug = file.replace('.mdx', '');
          
          let title = slug;
          let description = '';
          const titleMatch = text.match(/title:\s*["']?([^"'\n]+)["']?/);
          if (titleMatch) title = titleMatch[1];
          const descMatch = text.match(/description:\s*["']?([^"'\n]+)["']?/);
          if (descMatch) description = descMatch[1];
          
          posts.push({ slug, title, description });
        }
      }
    } catch (e: any) {
      console.error('Error reading blog dir', e);
    }

    let services: string[] = [];
    let stats: string[] = [];
    let clients: string[] = [];
    try {
      if (fs.existsSync(DATA_FILE)) {
        const dataText = fs.readFileSync(DATA_FILE, 'utf-8');
        const sMatches = dataText.matchAll(/title:\s*['"]([^'"]+)['"]/g);
        for (const match of sMatches) services.push(match[1]);
        
        const stMatches = dataText.matchAll(/value:\s*['"]([^'"]+)['"]/g);
        for (const match of stMatches) stats.push(match[1]);

        const cMatches = dataText.matchAll(/client:\s*['"]([^'"]+)['"]/g);
        for (const match of cMatches) clients.push(match[1]);
      }
    } catch (e: any) {
      console.error('Error reading data.ts', e);
    }

    return NextResponse.json({
      posts,
      brand: {
        services: services.slice(0, 10),
        proof_stats: stats.slice(0, 8),
        clients: clients.slice(0, 6)
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Uploads a blog directly to the site via Github API (TinaCMS backend)
export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!process.env.AGENT_SECRET_KEY || authHeader !== `Bearer ${process.env.AGENT_SECRET_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug, title, mdx_content } = await request.json();
    if (!slug || !mdx_content) {
      return NextResponse.json({ error: 'Missing slug or content' }, { status: 400 });
    }

    const token = process.env.GITHUB_PUBLISH_TOKEN;
    const repo = process.env.GITHUB_REPO || 'buteforce-code/ButeForce-Site';
    const branch = process.env.GITHUB_BRANCH || 'main';
    const blogPath = `content/blog/${slug}.mdx`;

    if (!token) {
      return NextResponse.json({ error: 'GITHUB_PUBLISH_TOKEN is not configured on the site' }, { status: 500 });
    }

    const apiUrl = `https://api.github.com/repos/${repo}/contents/${blogPath}`;
    
    // Check if file exists to get sha
    let sha = null;
    let method = 'PUT';
    
    const checkRes = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Buteforce-Site-Agent-API'
      }
    });

    if (checkRes.ok) {
      const data = await checkRes.json();
      sha = data.sha;
    }

    const contentB64 = Buffer.from(mdx_content, 'utf-8').toString('base64');
    const payload: any = {
      message: `feat(blog): publish — ${title || slug}`,
      content: contentB64,
      branch
    };
    if (sha) payload.sha = sha;

    const postRes = await fetch(apiUrl, {
      method,
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Buteforce-Site-Agent-API'
      },
      body: JSON.stringify(payload)
    });

    if (!postRes.ok) {
      const errText = await postRes.text();
      return NextResponse.json({ error: `GitHub API error: ${errText}` }, { status: postRes.status });
    }

    const resultData = await postRes.json();
    return NextResponse.json({ success: true, published_url: resultData.content?.html_url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
