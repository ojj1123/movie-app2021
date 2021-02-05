import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ isLoading: false, movies });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="movies">
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div className="movie">
            {movies.map((movies) => (
              <Movie
              key={movies.id}
              title={movies.title}
              year={movies.year}
              summary={movies.summary}
              poster={movies.medium_cover_image}
              genres={movies.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;