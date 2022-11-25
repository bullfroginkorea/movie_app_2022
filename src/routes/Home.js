import { useEffect, useState, } from "react";
import React from "react";
import axios from 'axios';
import Movie from '../components/Movie.js';
import './Home.css';



function Home() {

    let [isLoading,setIsLoading] = useState(true); //로딩스테이트
    let [movies,setMovies] = useState([]); //movies 
    // let [getMovies,setGetMovies] = useState( //비동기함수사용할게염 
    //   async () => { //getMovies 쓰면 영화 불러옴
    //     const { //구조분해할당 사용하여 점연산자쓰지않고 객체 접근 
    //       data: {
    //         data: {movies}, //movies안에 api저장
    //       }, //moviesㅇ
    //     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //     setMovies({movies}); //movies state에 영화데이터저장
    //     setIsLoading(true);
        
    //   }
    // );
    let getMovies = async()=>{
      const { //구조분해할당 사용하여 점연산자쓰지않고 객체 접근 
              data: {
                data: {movies}, //movies안에 api저장
               }, //moviesㅇ
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    setMovies(movies); //setMovies로 배열 movies안에 넣었음 
    setIsLoading(false);
    }
    
    useEffect(()=>{ //mount시 getMovies실행함 
      getMovies()
      
      
    })
  return (
    <section className="container">
      {isLoading ? ( //로딩꾸미기
        <div className="loader">
          <span className="loader__text">'Loading...' </span>
        </div>
      ): (
        <div className="movies">
        {movies.map((movie)=>{
                
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />;
    })}</div>
    )}
    


    </section>
  );
}

export default Home;