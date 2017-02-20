import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleSearchInputChange(event){
        this.setState({
            term : event.target.value,
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.handleFormSubmit}>
                <input
                placeholder="get five day weather forcast"
                className="form-control"
                value={this.state.term}
                onChange={this.handleSearchInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;
