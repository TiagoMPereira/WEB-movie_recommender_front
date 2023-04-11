import './screen.css';
import React, { useState } from 'react';


const movie = {
    release: 2002,
    runtime: "133 min",
    genres: "Adventure, Family, Fantasy",
    voteAverage: 7.4,
    language: "English",
    popularity: "Very high"
  }

  function screen() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="Title">
            <p class="P-title">
              CINEBUSCA
            </p>
          </div>
        </header>
        <body className="App-body">
            <button className="submit" type="button">RETURN</button>
          <section className="Form">
          <div>
              <p className="P-form-title">Harry Potter and the Philosopher's Stone</p>
              <p className="P-form-description">Harry, Ron and Hermione retur to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict,
  Sirius Black - and turns to sympathetic Professor Lupin for help.</p>
              <p className="P-form-infos"> Release: {movie.release}  |  Runtime: {movie.runtime}  |  Genres: {movie.genres}  |  Vote Average: {movie.voteAverage}  |  Language: {movie.language}  |  Popularity: {movie.popularity} </p>
            </div>
            <div>
              <p className="P-form-title">Harry Potter and the Chamber of Secrets</p>
              <p className="P-form-description">Ignoring threats to his life, Harry returns to Hogwarts to investigate - aided by Ron and Hermione - a mysterious series of attacks.</p>
              <p className="P-form-infos"> Release: {movie.release}  |  Runtime: {movie.runtime}  |  Genres: {movie.genres}  |  Vote Average: {movie.voteAverage}  |  Language: {movie.language}  |  Popularity: {movie.popularity} </p>
            </div>
            <div>
              <p className="P-form-title">Harry Potter and the Prisoner of Azkaban</p>
              <p className="P-form-description">Harry, Ron and Hermione retur to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict,
  Sirius Black - and turns to sympathetic Professor Lupin for help.</p>
              <p className="P-form-infos"> Release: {movie.release}  |  Runtime: {movie.runtime}  |  Genres: {movie.genres}  |  Vote Average: {movie.voteAverage}  |  Language: {movie.language}  |  Popularity: {movie.popularity} </p>
            </div>
          </section>
        </body>
      </div>
    );
  }




export default screen;