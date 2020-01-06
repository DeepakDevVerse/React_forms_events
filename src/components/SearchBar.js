import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input id="search" type="text" onChange={this.onInputChange} />
                        {/* <input id="search" type="text" onChange={ (e) => console.log(e.target.value) } /> */}
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;