import React, {Component} from "react";

class Search extends Component {

    state = {
        searchText:'',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '32083596-2b43a802fd4e0edde64fa953c',
        images: []
    }
    render() {
        return (
            <div>
                <input type="text"
                placeholder="Search for images"
                name="searchText"
                value={this.state.searchText}>
                    
                </input>
            </div>
            
        )
    }
}

export default Search;