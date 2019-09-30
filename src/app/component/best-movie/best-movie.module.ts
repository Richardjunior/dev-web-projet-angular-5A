export interface  BestMovie {
    id: number;
    video: boolean;
    vote_count: number;
    title: string;
    release_date: string;
    original_language: string;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
    adult: boolean;
    overview: string;
    genre_ids: Array<number>;
    popularity: number;
}

export interface BestMovieResponse {
   // page: number;
    results: Array<BestMovie>;
    // total_pages: number;
   // total_results: number;
}
