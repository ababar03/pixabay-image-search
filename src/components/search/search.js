import React, { Component } from "react";
import axios from "axios";
import ImageResults from "../imageResults/imageResults";
import TextField from "material-ui/TextField";
class Search extends Component {
  state = {
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "32083596-2b43a802fd4e0edde64fa953c",
    images: [],
  };
  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <input
          type="text"
          style={{
            color: "white",
            margin: "auto",
            width: "60%",
            padding: "10px",
            display: "block",
            backgroundColor: "black",
            fontSize: 20,
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderLeftStyle: "hidden",
            outline: "none",
            borderBottomStyle: "groove",
          }}
          placeholder="Search for images"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
