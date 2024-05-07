import React, {useState} from "react";

function SearchBar ({onSearch}) {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({category, location});
    };

    return (
        <form onSearch={handleSubmit}>
            <input type="text" placeholder="category" value={category} onChange={handleCategoryChange}/>
            <input type="text" placeholder="location" value={location} onChange={handleLocationChange}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;