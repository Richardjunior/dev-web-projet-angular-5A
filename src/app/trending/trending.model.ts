export interface  Starter {
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
}

export interface StarterResponse {
   // page: number;
    results: Array<Starter>;
    // total_pages: number;
   // total_results: number;
}
