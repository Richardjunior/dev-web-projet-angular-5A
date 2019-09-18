export interface  Trending {
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
}

export interface TrendingResponse {
   // page: number;
    results: Array<Trending>;
    //total_pages: number;
   // total_results: number;
}
