import React, { Component } from 'react'

class Home extends Component {

state = {
    rayons: [
        {
            nom_rayon: "épicerie"
        },
        {
            nom_rayon: "fleurs"
        }
    ]
}

    render() {

        

        return(
            <div>
                <h1>Homepage</h1>
                <ul>
                    {this.state.rayons.map(rayon => (<li>{rayon.nom_rayon}</li>))}
                </ul>
            </div>
        )
    }
}

export default Home