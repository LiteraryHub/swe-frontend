import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

export const runtime = 'nodejs'; // Ensure it runs on the Node.js runtime

interface GenerateCoverRequestBody {
  book_title: string;
  book_summary: string;
  arabic_authors: string[];
  num_inference_steps: number;
  guidance_scale: number;
}

export async function POST(req: NextRequest) {
  try {
    const body: GenerateCoverRequestBody = await req.json();

    const response = await fetch('https://da6b-45-240-51-111.ngrok-free.app/book-cover/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        book_title: body.book_title,
        book_summary: body.book_summary,
        arabic_authors: body.arabic_authors,
        num_inference_steps: body.num_inference_steps,
        guidance_scale: body.guidance_scale,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: `Error: ${response.statusText}` }, { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      headers: {
        'Content-Type': 'image/png',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to generate book cover' }, { status: 500 });
  }
}
