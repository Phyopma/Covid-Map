import React from "react";
import {
  Map,
  TileLayer,
  Popup,
  CircleMarker,
  ZoomControl,
} from "react-leaflet";
import "./App.css";
import axios from "axios";
import { Container, Navbar, Toast } from "react-bootstrap";

class Maps extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/countries/")
      // .then(response => response.json())
      .then((gg) => this.setState({ data: gg.data }));
  }
  render() {
    return (
      // <ul>
      //     {this.state.data.map( datas => { /*return <li>{datas.country}</li>*/
      //       var loc = [datas.countryInfo.lat,datas.countryInfo.long];
      //       var lat = datas.countryInfo.lat;
      //       var long = datas.countryInfo.long;
      //       var loc = `[${lat},${long}]`;
      //       return <li>{loc}</li>
      //     })}

      // </ul>
      <div className="container-fluid" style={{ padding: "0" }}>
        <Map center={[35, 10]} zoom={2} zoomControl={false} minZoom={2}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <ZoomControl position="topright" />{" "}
          {this.state.data.map((datas) => {
            var lat = datas.countryInfo.lat;
            var long = datas.countryInfo.long;
            // var key = datas.countryInfo._id;
            return (
              <CircleMarker center={[lat, long]} color="blue" radius={7}>
                <Popup
                  id="popup"
                  className="popup"
                  minWidth="270"
                  closeButton="false"
                >
                  <div className="row">
                    <div className="col-6 p-0">
                      <img
                        src={datas.countryInfo.flag}
                        className="rounded mr-2"
                        alt={datas.country}
                        height="90"
                        width="129"
                      />
                    </div>{" "}
                    <div className="col p-0" style={{ padding: 0 }}>
                      <h5> {datas.country} </h5>{" "}
                      <span> Total Cases: {datas.cases} </span>{" "}
                      <span style={{ display: "block" }}>
                        {" "}
                        Total Deaths: {datas.deaths}{" "}
                      </span>{" "}
                      <span style={{ display: "block" }}>
                        {" "}
                        Active Cases: {datas.active}{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>

                  {/* <Toast.Body></Toast.Body>
                                            <Toast.Body>Total Cases: {datas.cases}</Toast.Body>
                                            <Toast.Body>Today Cases: {datas.todayCases}</Toast.Body>
                                            <Toast.Body>Total Deaths: {datas.deaths}</Toast.Body>
                                            <Toast.Body>Today Deaths: {datas.todayDeaths}</Toast.Body>
                                            <Toast.Body>Recoverd Cases: {datas.recoverd}</Toast.Body>
                                            <Toast.Body>Active Cases: {datas.active}</Toast.Body>
                                            <Toast.Body>Critical Cases: {datas.critical}</Toast.Body> */}
                </Popup>{" "}
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default Maps;
