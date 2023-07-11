import React from "react";
import { useState } from 'react';
import axios from "axios";
import JSON from './id.json'
import {FaSearch} from 'react-icons/fa';
import '../components/SearchResults.css'

const dataJSON = JSON; 


export const SearchBar = ({results, setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {

        const results = dataJSON.filter((crypto) => {
            return crypto && crypto.id && crypto.id && crypto.id.toLowerCase().includes(value) && value !== "";
        });
        setResults(results);
        console.log(results);
    };
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
        if (value === "") {
            const sendData = async () => {
                try {
                    const data = {
                        functionName: 'selSend',
                        sel: value,
                    };
                    
                    const response = await axios.post('http://localhost:3001/selected', data);
                    console.log(response.data);
                } catch (error) {
                    console.error('Error:', error);
                }
            };
            sendData();
        }
    };

    const handleSelection = (selection) => {
        setInput(selection);
        fetchData("");     
        const sendData = async () => {
            try {
                const data = {
                    functionName: 'selSend',
                    sel: selection,
                };
                
                const response = await axios.post('http://localhost:3001/selected', data);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        sendData();
    };
    return (
        <>
            <div className="input-wrapper">
                <input className="input" placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
            </div>
            <div className="results">
                {results.map((crypto) => {
                    return <div className="result" onClick={(e) => handleSelection(e.target.textContent)}>{crypto.id}</div>
                })}
            </div> 
        </>
        
        )
}
