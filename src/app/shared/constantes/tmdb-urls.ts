export const tmdbBaseUrl = 'http://api.themoviedb.org/3';
export const tmdbApiKey = '5192eb6331a3db50b6b388ae8941edc6';
export const language = 'fr-FR';
export const tmdbUrls = {
	base: tmdbBaseUrl,
	popular: `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}&language=${language}`,
	topRated: `${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbApiKey}&language=${language}`,
	upcoming: `${tmdbBaseUrl}/movie/upcoming?api_key=${tmdbApiKey}&language=${language}`,
	nowPlaying: `${tmdbBaseUrl}/movie/now_playing?api_key=${tmdbApiKey}&language=${language}`,
	search: `${tmdbBaseUrl}/search/movie?api_key=${tmdbApiKey}&language=${language}`
};
