// src/app/api/news/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  // 1. Extract query parameters
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'business';
  const page = searchParams.get('page') || 1;
  const query = searchParams.get('q');
  const country = searchParams.get('country') || 'us';
  const sortBy = searchParams.get('sortBy') || 'publishedAt';

  const apiKey = 'be79946665fc4be1bc49995cbd4041f4'; 
  
  // 2. Determine the correct URL (Define this BEFORE fetching)
  let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}`;

  if (query) {
    // Corrected spelling: 'everything' and 'apiKey'
    apiUrl = `https://newsapi.org/v2/everything?q=${query}&sortBy=${sortBy}&page=${page}&apiKey=${apiKey}`;
  }

  try {
    // 3. Perform the fetch
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      throw new Error(`NewsAPI responded with status: ${res.status}`);
    }

    const data = await res.json();

    // 4. IMPORTANT: Return the data to your frontend
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching news data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news data' },
      { status: 500 }
    );
  }
}