import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class User extends Component {

  render() {
    const {user}=this.props
    return (
        <Link to={`/catalog/${user.id}`} className="user"> 
      {user.name}
        </Link>
    )
  }
}
export default User;
