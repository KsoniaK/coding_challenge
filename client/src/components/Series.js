import React from 'react';


class Series extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            series: []
        }
    }

    handleChange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

   
    componentDidMount(){
        fetch("http://localhost:3001/read/genre/series")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({series: data})
            
        })
        .catch((error) => {
            
        })
    }

    render() {
        return (
            <div>
                <h2>Séries</h2>
                {this.state.series.map((serie, i) => {
                 return <div className="series" key={i}>
                    <h3>{serie.titre_media}</h3>,
                    <img src={serie.image_media}></img>,
                    <p>{serie.date_sortie_media}</p> 
                    </div>
            })}
            </div>
        );
    }
}
export default Series;