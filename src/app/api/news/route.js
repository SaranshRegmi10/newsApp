// src/app/api/news/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Extract query parameters from the request
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'business';
  const page = searchParams.get('page') || 1;

  try {
    // Fetch data from NewsAPI
    const apiKey = 'be79946665fc4be1bc49995cbd4041f4'; // Replace with your API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Return the fetched data as a JSON response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching news data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news data' },
      { status: 500 }
    );
  }
}