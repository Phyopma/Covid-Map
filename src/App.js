import React from "react";
import "./App.css";
import axios from "axios";
import Maps from "./Maps";
import { CardDeck, Card, Form, Container } from "react-bootstrap";
// import { Label } from 'bootstrap'

var input_data = "";

class App extends React.Component {
  state = {
    data: [],
    countries_data: [],
    country_data: [],
  };
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/countries/")
      // .then(response => response.json())
      .then((gg) => this.setState({ countries_data: gg.data }));
    axios
      .get("https://corona.lmao.ninja/all/")
      // .then(response => response.json())
      .then((gg) => this.setState({ data: [gg.data] }));
  }

  checkCountry = (e) => {
    input_data = e.target.value;
    this.setState({
      country_data: this.state.countries_data.filter(
        (datas) => datas.country === input_data
      ),
    });
    console.log(input_data);
  };

  render() {
    return (
      <div className="container">
        <div className="row mb-3 mt-3"> </div>{" "}
        <div className="col mb-2" style={{ padding: "0" }}>
          <Form>
            <Form.Label for="country">
              {" "}
              <h3> Country </h3>
            </Form.Label>
            <Form.Control
              as="select"
              id="country"
              name="country"
              onChange={this.checkCountry}
            >
              <option value="" selected>
                {" "}
                The Whole World{" "}
              </option>{" "}
              {this.state.countries_data.map((datas) => {
                return <option value={datas.country}> {datas.country} </option>;
              })}{" "}
            </Form.Control>
          </Form>
        </div>
        {input_data ? (
          <div id="country" className="row mb-3 mt-3">
            <div className="col mb-2">
              <Card className="border border-warning">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4> Cases </h4>{" "}
                  </Card.Title>
                  <Card.Text>
                    {" "}
                    {this.state.country_data.map((datas) => datas.cases)}{" "}
                  </Card.Text>
                </Card.Body>{" "}
              </Card>{" "}
            </div>{" "}
            <div className="col mb-2">
              <Card className="border border-warning">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4> Deaths </h4>{" "}
                  </Card.Title>
                  <Card.Text>
                    {" "}
                    {this.state.country_data.map((datas) => datas.deaths)}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>{" "}
            <div className="col mb-2">
              <Card className="border border-warning">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4> Recoverd </h4>
                  </Card.Title>
                  <Card.Text style={{ display: "block" }}>
                    {" "}
                    {this.state.country_data.map(
                      (datas) => datas.recovered
                    )}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>{" "}
          </div>
        ) : (
          <div id="all" className="row mb-3 mt-3">
            <div className="col mb-2">
              <Card className="border border-warning">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4> Cases </h4>
                  </Card.Title>
                  <Card.Text style={{ display: "block" }}>
                    {" "}
                    {this.state.data.map((datas) => datas.cases)}{" "}
                  </Card.Text>{" "}
                </Card.Body>
              </Card>{" "}
            </div>{" "}
            <div className="col mb-2">
              <Card className="border border-warning">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4> Deaths </h4>{" "}
                  </Card.Title>
                  <Card.Text style={{ display: "block" }}>
                    {" "}
                    {this.state.data.map((datas) => datas.deaths)}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>{" "}
            <div className="col mb-2">
              <Card className="border border-warning">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4> Recoverd </h4>{" "}
                  </Card.Title>
                  <Card.Text style={{ display: "block" }}>
                    {" "}
                    {this.state.data.map((datas) => datas.recovered)}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>{" "}
          </div>
        )}
        <Maps> </Maps>
      </div>
    );
  }
}

export default App;

{
  /* <Card.Body>
                    <Card.Title>
                      <Card.Text>

                      </Card.Text>
                    </Card.Title>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer> */
}
