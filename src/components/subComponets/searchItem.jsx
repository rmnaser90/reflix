import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class SearchItem extends Component {

  render() {
    const {movie,userId}=this.props
    return (
        <Link to={`/Catalog/Movie/${movie.id}/${userId}`} className="searchItem"> 
      {movie.title}
        </Link>
    )
  }
}
export default SearchItem;
