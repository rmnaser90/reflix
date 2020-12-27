import React, { Component } from 'react'
import Movie from './subComponets/Movie'
import SearchItem from './subComponets/searchItem'
import './style/catalog.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            term: "",
            filteredMovies: []
        }
    }

    handleInput = (e) => {
        const term = e.target.value.toLowerCase()
        const { movies } = this.props.state
        const filteredMovies = movies.filter(m => !m.isRented && m.title.toLowerCase().includes(term))
        console.log(filteredMovies);
        this.setState({
            term: term,
            filteredMovies: filteredMovies
        })
    }

    render() {

        const { users, movies } = this.props.state
        const { rent, unRent } = this.props
        const { userId } = this.props.match.match.params
        const currentUser = users.find(u => u.id === userId)

        return (
            <div className="catalogContainer">
                <div className="menu">
                    <Link to="/" className="homeButton"> <FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                    <Link to="/" className="homeButton"> <FontAwesomeIcon icon={faHome} /></Link>
                </div>
                <div className="mainContainer">
                    <div className="searchBar">
                        <div className="autoComplete">
                            <input type="text" placeholder="what do you feel like watch?" onChange={this.handleInput} className="searchInput" />
                            <div className="results">
                                {this.state.term.length > 0 && this.state.filteredMovies.map(m => <SearchItem key={m.id} movie={m} userId={userId}/>)}
                            </div>
                        </div>
                        <div className="searchBtn">Find</div>

                    </div>
                    <div className="budget">Budget: {currentUser.budget}$</div>
                    {currentUser.rentedMovies.length > 0 &&
                        <span>
                            <h2>Rented movies</h2>
                            <div className="moviesContainer">
                                {currentUser.rentedMovies.map(m => <Movie movie={m} key={m.id} userId={userId} unRent={unRent} />)}

                            </div>
                        </span>
                    }
                    <h2>Catalog</h2>
                    <div className="moviesContainer">
                        {movies.map(m => m.isRented || <Movie movie={m} key={m.id} userId={userId} rent={rent} />)}
                    </div>

                </div>
            </div>
        )
    }
}
export default Catalog;
