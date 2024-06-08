import axios from "axios";
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGVhNDM3NzdkNTI0ZmY3ZGVhZmFhMmY5OWFiZjM1ZCIsInN1YiI6IjY0ZjYzNmE4MTIxOTdlMDEzOGI1Yzk1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9z1LoxEwtTcQhB2wbeSSXEWa0G53adk8WdYPylmco0I';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}`;

export class MoviesService {
    static getMovies(){
        return axios({
            method:'get',
            url: withBaseUrl('movie/popular'),
            params: {
                language:'en-US',
                page: 1
            },
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            }
        });
    }
}