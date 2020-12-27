import React, { Component,  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Movie extends Component {

    rent = () => {
        const { movie, userId, rent } = this.props
        rent(userId, movie.id)
    }
    unRent = () => {
        const { movie, userId, unRent } = this.props
        unRent(userId, movie.id)
    }

    render() {
        const { movie,userId } = this.props
        return (
            <div className="moviePoster" >
               <Link to={`/Catalog/Movie/${movie.id}/${userId}`} className="posterImg">
                    <img src={movie.img} alt={movie.title} className="posterImg" />
                   </Link>

                { movie.isRented ? <FontAwesomeIcon icon={faMinusCircle} className="rentButton" onClick={this.unRent} /> :
                    <FontAwesomeIcon icon={faPlusCircle} className="rentButton" onClick={this.rent} />
                }
            </div>
        )
    }
}
export default Movie;
