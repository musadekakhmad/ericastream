// Home.js
"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import MovieCard from '@/components/MovieCard';

// Base URL for the API
const API_KEY = 'ISI DENGAN API KEY ANDA'; // <-- REPLACE WITH YOUR API KEY
const BASE_URL = 'https://tmdb-api-proxy.argoyuwono119.workers.dev';

// ===================================
// Custom Hook to fetch API data
// ===================================

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, loading, error };
};

// ===================================
// Home Component
// ===================================

export default function Home() {
  // State for Popular Movies
  const [popularMoviesPage, setPopularMoviesPage] = useState(1);
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [popularMoviesLoading, setPopularMoviesLoading] = useState(true);
  const [popularMoviesError, setPopularMoviesError] = useState(null);
  const [hasMorePopularMovies, setHasMorePopularMovies] = useState(true);

  // State for Top Rated Movies
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState(1);
  const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);
  const [topRatedMoviesLoading, setTopRatedMoviesLoading] = useState(true);
  const [topRatedMoviesError, setTopRatedMoviesError] = useState(null);
  const [hasMoreTopRatedMovies, setHasMoreTopRatedMovies] = useState(true);
  
  // State for Upcoming Movies
  const [upcomingMoviesPage, setUpcomingMoviesPage] = useState(1);
  const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);
  const [upcomingMoviesLoading, setUpcomingMoviesLoading] = useState(true);
  const [upcomingMoviesError, setUpcomingMoviesError] = useState(null);
  const [hasMoreUpcomingMovies, setHasMoreUpcomingMovies] = useState(true);

  // State for Now Playing Movies
  const [nowPlayingMoviesPage, setNowPlayingMoviesPage] = useState(1);
  const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState([]);
  const [nowPlayingMoviesLoading, setNowPlayingMoviesLoading] = useState(true);
  const [nowPlayingMoviesError, setNowPlayingMoviesError] = useState(null);
  const [hasMoreNowPlayingMovies, setHasMoreNowPlayingMovies] = useState(true);

  // State for Popular TV Shows
  const [popularTvPage, setPopularTvPage] = useState(1);
  const [popularTvData, setPopularTvData] = useState([]);
  const [popularTvLoading, setPopularTvLoading] = useState(true);
  const [popularTvError, setPopularTvError] = useState(null);
  const [hasMorePopularTv, setHasMorePopularTv] = useState(true);

  // State for Top Rated TV Shows
  const [topRatedTvPage, setTopRatedTvPage] = useState(1);
  const [topRatedTvData, setTopRatedTvData] = useState([]);
  const [topRatedTvLoading, setTopRatedTvLoading] = useState(true);
  const [topRatedTvError, setTopRatedTvError] = useState(null);
  const [hasMoreTopRatedTv, setHasMoreTopRatedTv] = useState(true);
  
  // State for On The Air TV Shows
  const [onTheAirTvPage, setOnTheAirTvPage] = useState(1);
  const [onTheAirTvData, setOnTheAirTvData] = useState([]);
  const [onTheAirTvLoading, setOnTheAirTvLoading] = useState(true);
  const [onTheAirTvError, setOnTheAirTvError] = useState(null);
  const [hasMoreOnTheAirTv, setHasMoreOnTheAirTv] = useState(true);

  // State for Airing Today TV Shows
  const [airingTodayTvPage, setAiringTodayTvPage] = useState(1);
  const [airingTodayTvData, setAiringTodayTvData] = useState([]);
  const [airingTodayTvLoading, setAiringTodayTvLoading] = useState(true);
  const [airingTodayTvError, setAiringTodayTvError] = useState(null);
  const [hasMoreAiringTodayTv, setHasMoreAiringTodayTv] = useState(true);

  // Function to fetch data for a specific category
  const fetchData = useCallback(async (endpoint, page, setData, setLoading, setError, setHasMore) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${page}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const json = await response.json();
      setData(prevData => [...prevData, ...json.results]);
      setHasMore(json.results.length === 20);
    } catch (err) {
      setError(err.message);
      console.error(`Fetch error for ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Effect to fetch Popular Movies
  useEffect(() => {
    fetchData('movie/popular', popularMoviesPage, setPopularMoviesData, setPopularMoviesLoading, setPopularMoviesError, setHasMorePopularMovies);
  }, [popularMoviesPage, fetchData]);

  // Effect to fetch Top Rated Movies
  useEffect(() => {
    fetchData('movie/top_rated', topRatedMoviesPage, setTopRatedMoviesData, setTopRatedMoviesLoading, setTopRatedMoviesError, setHasMoreTopRatedMovies);
  }, [topRatedMoviesPage, fetchData]);
  
  // Effect to fetch Upcoming Movies
  useEffect(() => {
    fetchData('movie/upcoming', upcomingMoviesPage, setUpcomingMoviesData, setUpcomingMoviesLoading, setUpcomingMoviesError, setHasMoreUpcomingMovies);
  }, [upcomingMoviesPage, fetchData]);

  // Effect to fetch Now Playing Movies
  useEffect(() => {
    fetchData('movie/now_playing', nowPlayingMoviesPage, setNowPlayingMoviesData, setNowPlayingMoviesLoading, setNowPlayingMoviesError, setHasMoreNowPlayingMovies);
  }, [nowPlayingMoviesPage, fetchData]);

  // Effect to fetch Popular TV Shows
  useEffect(() => {
    fetchData('tv/popular', popularTvPage, setPopularTvData, setPopularTvLoading, setPopularTvError, setHasMorePopularTv);
  }, [popularTvPage, fetchData]);

  // Effect to fetch Top Rated TV Shows
  useEffect(() => {
    fetchData('tv/top_rated', topRatedTvPage, setTopRatedTvData, setTopRatedTvLoading, setTopRatedTvError, setHasMoreTopRatedTv);
  }, [topRatedTvPage, fetchData]);
  
  // Effect to fetch On The Air TV Shows
  useEffect(() => {
    fetchData('tv/on_the_air', onTheAirTvPage, setOnTheAirTvData, setOnTheAirTvLoading, setOnTheAirTvError, setHasMoreOnTheAirTv);
  }, [onTheAirTvPage, fetchData]);
  
  // Effect to fetch Airing Today TV Shows
  useEffect(() => {
    fetchData('tv/airing_today', airingTodayTvPage, setAiringTodayTvData, setAiringTodayTvLoading, setAiringTodayTvError, setHasMoreAiringTodayTv);
  }, [airingTodayTvPage, fetchData]);

  // Handler functions for "Load More" buttons
  const handleLoadMorePopularMovies = () => {
    setPopularMoviesPage(prevPage => prevPage + 1);
  };

  const handleLoadMoreTopRatedMovies = () => {
    setTopRatedMoviesPage(prevPage => prevPage + 1);
  };
  
  const handleLoadMoreUpcomingMovies = () => {
    setUpcomingMoviesPage(prevPage => prevPage + 1);
  };

  const handleLoadMoreNowPlayingMovies = () => {
    setNowPlayingMoviesPage(prevPage => prevPage + 1);
  };

  const handleLoadMorePopularTv = () => {
    setPopularTvPage(prevPage => prevPage + 1);
  };

  const handleLoadMoreTopRatedTv = () => {
    setTopRatedTvPage(prevPage => prevPage + 1);
  };
  
  const handleLoadMoreOnTheAirTv = () => {
    setOnTheAirTvPage(prevPage => prevPage + 1);
  };
  
  const handleLoadMoreAiringTodayTv = () => {
    setAiringTodayTvPage(prevPage => prevPage + 1);
  };

  // Helper component to render a category section
  const CategorySection = ({ title, data, loading, error, hasMore, onLoadMore, mediaType }) => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMoreClick = () => {
      const remainingItems = data.length - visibleCount;
      if (remainingItems >= 6) {
        setVisibleCount(prevCount => prevCount + 6);
      } else {
        setVisibleCount(data.length);
        if (hasMore) {
          onLoadMore();
        }
      }
    };

    return (
      <section className="mt-12 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
        {loading && <p className="text-center text-gray-400">Loading {title.toLowerCase()}...</p>}
        {error && <p className="text-center text-red-400">Error: {error}</p>}
        {data.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {data.slice(0, visibleCount).filter(item => item.poster_path).map((item) => (
                <MovieCard key={item.id} media={item} mediaType={mediaType} />
              ))}
            </div>
            {data.length > visibleCount && (
              <div className="text-center mt-8">
                <button
                  onClick={handleShowMoreClick}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
                >
                  Show More
                </button>
              </div>
            )}
            {visibleCount >= data.length && hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={onLoadMore}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
                >
                  Load Next Page
                </button>
              </div>
            )}
          </>
        )}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div className="relative mt-8 w-full h-48 md:h-64 lg:h-96 overflow-hidden rounded-xl shadow-2xl" suppressHydrationWarning={true}>
          <img
              src="https://live.staticflickr.com/65535/54742212042_56276e557f_b.jpg"
              alt="Erica Stream Banner"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/1920x1080/0d1117/2d3138?text=Erica-Stream';
              }}
          />
      </div>
      
      {/* Main content container with padding */}
      <div className="px-4 md:px-8">
        <h1 className="text-2xl font-bold text-center mt-8 mb-12 text-blue-300 leading-tight md:text-3xl">
          Erica Stream: The hub for high-quality free movies and TV shows for you.
        </h1>
        
        {/* Movies Section */}
        <h2 className="text-4xl font-extrabold text-white mt-16 mb-8 text-center">Movies</h2>
        
        {/* Popular Movies Section */}
        <CategorySection
          title="Popular Movies"
          data={popularMoviesData}
          loading={popularMoviesLoading}
          error={popularMoviesError}
          hasMore={hasMorePopularMovies}
          onLoadMore={handleLoadMorePopularMovies}
          mediaType="movie"
        />

        {/* Top Rated Movies Section */}
        <CategorySection
          title="Top Rated Movies"
          data={topRatedMoviesData}
          loading={topRatedMoviesLoading}
          error={topRatedMoviesError}
          hasMore={hasMoreTopRatedMovies}
          onLoadMore={handleLoadMoreTopRatedMovies}
          mediaType="movie"
        />
        
        {/* Upcoming Movies Section */}
        <CategorySection
          title="Upcoming Movies"
          data={upcomingMoviesData}
          loading={upcomingMoviesLoading}
          error={upcomingMoviesError}
          hasMore={hasMoreUpcomingMovies}
          onLoadMore={handleLoadMoreUpcomingMovies}
          mediaType="movie"
        />

        {/* Now Playing Movies Section */}
        <CategorySection
          title="Now Playing Movies"
          data={nowPlayingMoviesData}
          loading={nowPlayingMoviesLoading}
          error={nowPlayingMoviesError}
          hasMore={hasMoreNowPlayingMovies}
          onLoadMore={handleLoadMoreNowPlayingMovies}
          mediaType="movie"
        />
        
        {/* TV Shows Section */}
        <h2 className="text-4xl font-extrabold text-white mt-16 mb-8 text-center">TV Shows</h2>

        {/* Popular TV Shows Section */}
        <CategorySection
          title="Popular TV Shows"
          data={popularTvData}
          loading={popularTvLoading}
          error={popularTvError}
          hasMore={hasMorePopularTv}
          onLoadMore={handleLoadMorePopularTv}
          mediaType="tv"
        />

        {/* Top Rated TV Shows Section */}
        <CategorySection
          title="Top Rated TV Shows"
          data={topRatedTvData}
          loading={topRatedTvLoading}
          error={topRatedTvError}
          hasMore={hasMoreTopRatedTv}
          onLoadMore={handleLoadMoreTopRatedTv}
          mediaType="tv"
        />
        
        {/* On The Air TV Shows Section */}
        <CategorySection
          title="On The Air TV Shows"
          data={onTheAirTvData}
          loading={onTheAirTvLoading}
          error={onTheAirTvError}
          hasMore={hasMoreOnTheAirTv}
          onLoadMore={handleLoadMoreOnTheAirTv}
          mediaType="tv"
        />
        
        {/* Airing Today TV Shows Section */}
        <CategorySection
          title="Airing Today TV Shows"
          data={airingTodayTvData}
          loading={airingTodayTvLoading}
          error={airingTodayTvError}
          hasMore={hasMoreAiringTodayTv}
          onLoadMore={handleLoadMoreAiringTodayTv}
          mediaType="tv"
        />
      </div>
    </div>
  );
}
