import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Catalog from './components/Catalog';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';

const Movies = require('./components/movies').default
class App extends Component {

  constructor() {
    super()
    this.state = localStorage.state ? JSON.parse(localStorage.state) : {
      users: [
        {
          id: "user0", name: "Rami", rentedMovies: [], budget: 10
        },
        { id: "user1", name: "Mayada", rentedMovies: [], budget: 10 },
        { id: "user2", name: "Hasib", rentedMovies: [], budget: 10 },
        { id: "user3", name: "Zein", rentedMovies: [], budget: 10 },
        { id: "user4", name: "Khawla", rentedMovies: [], budget: 10 }
      ],
      movies: Movies
    }
  }

  rent = (userId, movieId) => {

    const { movies, users } = { ...this.state }
    const selectedMovie = movies.find(m => m.id === movieId)
    const selectedUser = users.find(u => u.id === userId)
    if (selectedUser.budget - 3 < 0) {
      return "insufficiant fund"
    }
    selectedMovie.isRented = true
    selectedUser.rentedMovies.push(selectedMovie)
    selectedUser.budget -= 3
    this.setState({
      movies: movies,
      users: users
    }, function () {
      localStorage.state = JSON.stringify(this.state)
    })

  }
  unRent = (userId, movieId) => {
    const { movies, users } = { ...this.state }
    const selectedMovie = movies.find(m => m.id === movieId)
    selectedMovie.isRented = false
    const selectedUser = users.find(u => u.id === userId)
    const userRentedMovies = selectedUser.rentedMovies
    const movieIndex = userRentedMovies.findIndex(m => m.id === movieId)
    userRentedMovies.splice(movieIndex, 1)
    selectedUser.budget += 2
    this.setState({
      movies: movies,
      users: users

    }, function () {
      localStorage.state = JSON.stringify(this.state)
    })

  }

  render() {
    return (
      <Router >
        <div className="App">

          <Route path="/" exact render={() => <Home state={this.state} />} />
          <Route path="/Catalog/:userId" exact render={(match) => <Catalog rent={this.rent} unRent={this.unRent} match={match} state={this.state} />} />
          <Route path="/Catalog/Movie/:movieId/:userId?" exact render={(match) => <MovieInfo match={match} state={this.state} />} />


        </div>

      </Router>
    )
  }
}
export default App;
