import React, { Component } from 'react'
import User from './subComponets/User'
import './style/home.css'
class Home extends Component {

    render() {
        const { users } = this.props.state
        return (
            <div className="home">
                <div className="whoWatch"><h2> who's watching? </h2></div>
                <div className="usersContainer">
                    {users.map(u => <User user={u} key={u.id} />)}
                </div>
            </div>
        )
    }
}
export default Home;
