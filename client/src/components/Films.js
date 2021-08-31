import React from 'react';


class Films extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            films: []
         }
     }

   
    componentDidMount (){
        fetch("http://localhost:3001/read/genre/films")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({films : data})
            
        })
    }

    render() {
        return (
            <div>
                <h2>Films</h2>
                {this.state.films.map((film, i) => {
                 return <div className="films" key={i}>
                        <h3>{film.titre_media}</h3>
                        <img src={film.image_media}></img>,
                        <p>{film.date_sortie_media}</p> 

                    </div>
            })}
            </div>
        );
    }
}
export default Films;