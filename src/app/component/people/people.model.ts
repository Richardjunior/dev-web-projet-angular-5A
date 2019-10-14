export interface  People {
    profile_path: string;
    id: number; 
    vote_average: number;
    overview: string;
    release_date: string;
    original_title: string;
    media_type: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    original_name: string;
    name: string;
    origin_country: Array<string>;
    known_for: Array<People>;
    known_for_department: string;

}


export interface PeopleResponse {
    results: Array<People>;
}

export interface Fnownfor {
    profile_path: string;

}

export interface DetailsPeople{
    birthday: string;
    id: number;
    place_of_birth: string;
    biography: string;

}
