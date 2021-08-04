import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class Location extends React.Component {

      constructor(props) {
        super(props);
        
        this.state = {
            lat: 37.3694085722387,
            lon:-121.89064018857411,
        };
        
        this.setCA = this.setCA.bind(this);
        this.setNV = this.setNV.bind(this);
        this.setFL = this.setFL.bind(this);
        this.setNY = this.setNY.bind(this);
    }
     setCA(event) {
         this.setState({
            lat: 37.3694085722387,
            lon: -121.89064018857411
          });
     }

     setNV(event) {
         this.setState({
            lat: 39.164393774989215,
            lon: -119.76704854619771
          });
     }

     setNY(event) {
        this.setState({
            lat: 40.611386428901646,
            lon: -73.81930127314598
          });
     }

     setFL(event) {
        this.setState({
            lat: 25.779310588086997,
            lon: -80.22149224465437
          });
     }

    render() {
        var style={width: '65%', height: '50%', position: 'relative'}

        var buttonStyle = {
            border:'none',
            backgroundColor: '#ffffff'
        }
        return(
            <div>
                <div className = "mapContainer"  style={{ marginBottom: "4%", textAlign :'center'}}>
                    <Map
                        google={this.props.google}
                        style={style}
                        initialCenter={{
                            lat: 37.3694085722387, 
                            lng: -121.89064018857411,
                        }}
                        center = {{
                            lat: this.state.lat, 
                            lng: this.state.lon,
                        }}
                        zoom={15}
                    >
                        <Marker position={{lat: this.state.lat, lng: this.state.lon}}/>
                    </Map>

                </div>
                <div id="findStore" className="container-lg">
                    <ul id="stores" className="list-group">
                        <li className="list-group-item" onClick = {this.setCA}>75 Service St, San Jose, CA 95112 <button  style = {buttonStyle}><img src="https://img.icons8.com/color/32/000000/google-maps-new.png"/></button></li>
                        <li className="list-group-item" onClick = {this.setNV}>52 N Carson St, Carson City, NV 89701 <button style = {buttonStyle}><img src="https://img.icons8.com/color/32/000000/google-maps-new.png"/></button></li>
                        <li className="list-group-item" onClick = {this.setNY}>22 W 5rd St, New York, NY 10019 <button style = {buttonStyle}><img src="https://img.icons8.com/color/32/000000/google-maps-new.png"/></button></li>
                        <li className="list-group-item" onClick = {this.setFL}>800 Marlins Way, Miami, FL 33125 <button style = {buttonStyle}><img src="https://img.icons8.com/color/32/000000/google-maps-new.png"/></button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

// export default Location


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCjo5n_nywOm2COpZJhpZcxU9zsGYe-lYg')
})(Location)