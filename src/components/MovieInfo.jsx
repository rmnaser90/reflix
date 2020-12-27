import { faHome, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style/movieInfo.css'
class MovieInfo extends Component {

  render() {
    const { movies } = this.props.state
    const { movieId, userId } = this.props.match.match.params
    const movie = movies.find(m => m.id.toString() === movieId)
    return (
      <div className="movieInfo">
        <div className="menu">
          <Link to={`/Catalog/${userId}`} className="homeButton"> <FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
          <Link to="/" className="homeButton"> <FontAwesomeIcon icon={faHome} /></Link>
        </div>
        <h1 className="movieTitle">{movie.title} ({movie.year})</h1>

        <img src={movie.img} alt={movie.title} className="info-movieImg" />
        <p className="description">
          <strong>Description:</strong> <br />
          {movie.descrShort}

        </p>

      </div>
    )
  }
}
export default MovieInfo;
