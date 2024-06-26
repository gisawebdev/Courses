import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;
let topRatedPageNumber = 1;
let upcomingPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  // movies states
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);

    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPageNumber++;
    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
      page: popularPageNumber,
    });

    setPopular(prev => [...prev, ...popularMovies]);
  };
  const topRatedNextPage = async () => {
    topRatedPageNumber++;
    const topRatedMovies = await UseCases.moviesTopRatedUseCase(
      movieDBFetcher,
      {
        page: topRatedPageNumber,
      },
    );

    setTopRated(prev => [...prev, ...topRatedMovies]);
  };
  const upcomingNextPage = async () => {
    upcomingPageNumber++;
    const upcomingMovies = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher,
      {
        page: upcomingPageNumber,
      },
    );

    setUpcoming(prev => [...prev, ...upcomingMovies]);
  };

  return {
    // Properties
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,

    //Methods
    popularNextPage,
    topRatedNextPage,
    upcomingNextPage,
  };
};
