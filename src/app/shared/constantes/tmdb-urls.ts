export const tmdbBaseUrl: string = 'http://api.themoviedb.org/3';
export const tmdbApiKey: string = '5192eb6331a3db50b6b388ae8941edc6';
export const tmdbUrls = {
  base: tmdbBaseUrl,
  popular: `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}`,
  topRated: `${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbApiKey}`,
  upcoming: `${tmdbBaseUrl}/movie/upcoming?api_key=${tmdbApiKey}`,
  nowPlaying: `${tmdbBaseUrl}/movie/now_playing?api_key=${tmdbApiKey}`,
  search: `${tmdbBaseUrl}/search/movie?api_key=${tmdbApiKey}`
}
