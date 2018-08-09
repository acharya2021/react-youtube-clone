// import react and PULL OFF the property Component
// as a variable called Component
import React, {Component} from 'react';

class SearchBar extends Component {
    // initialize the state object inside the class' constructor method
    // only class based components have states
    // this function gets called automatically whenever a new instance of
    // the class is created

    constructor(props) {
        super(props);
        // update the value of the input
        // the object we pass will have the properties we want to update
        this.state = {term: ""};
    }

    // we want the SearchBar to have additional functionality
    // we want it to be aware of what the user inputs
    // so we use a class component instead of a functional component
    // always define a render method under a class component
    render() {
        // the event handler will be triggered whenever the event occurs
        // specifically, we want to watch the change event on the input
        // return <input onChange={this.onInputChange}/>;

        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );

    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;