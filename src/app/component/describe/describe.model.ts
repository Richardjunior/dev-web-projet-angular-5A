export interface Describe {
    adult: boolean;
    overview: string;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
}
export interface Movie {
         id: string;
         iso_639_1: string;
         iso_3166_1: string;
         key: string;
         name: string;
         site: string;
         size: number;
         type: string;
}

export interface MovieResponse {
    results: Array<Movie>;
}
