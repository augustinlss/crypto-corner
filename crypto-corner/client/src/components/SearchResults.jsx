import React from "react";
import '../components/SearchResults.css'
import { SearchBar } from "./SearchBar";



export const SearchResults = ({results}) => {
    const handleSel = (sel) => {
        SearchBar.handleSelction(sel);
    }

    return (
        <div className="results">
            {results.map((crypto) => {
                return <div className="result" onClick={(e) => handleSel(e.target.textContent)}>{crypto.id}</div>
            })}
        </div> 
    )
}