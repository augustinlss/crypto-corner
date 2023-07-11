import './Landing.css';
import './components/searchBar.css'
import './components/lineChart.css'
import logo from './imgs/logo.png';
import bmac from './imgs/buymeacoffee.png';
import axios from 'axios';
import JSON from './components/vs_currencies.json'; 
import {FaSearch} from 'react-icons/fa';

import { SearchBar } from './components/SearchBar';

import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

import LineChart from "./components/LineChart";
import { Data } from "./Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);


const vsCurr = JSON;

const LOGO = logo;
const BMAC = bmac;


function Landing() {

    //Define Satte variables
    const [cryptos, setCryptos] = useState([]);
    const [curr, setCurr] = useState('usd');
    const [date, setDate] = useState('30');
    const [results, setResults] = useState([]);
    const [price, setPrice] = useState(0);
    //Defaultf graph when no coin is selected
    const [chartData, setChartData] = useState({
        labels: [], 
        datasets: [
            {
                label: "",
                data: [],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
            ],
                borderColor: "blue",
                borderWidth: 2
            }
        ]
    });

    // const getPriceById = (id) => {
    //     const crypto = cryptos.find((crypto) => crypto.id === id);
    //     return crypto ? crypto.current_price : null;
    // }

    const setChart = (curr, datum) => {
        setCurr(curr);
        setDate(datum);
        const requestData = async () => {
            try {
                const data = {
                    functionName: 'requestSel',
                };
                
                const response = await axios.post('http://localhost:3001/selected', data);
                const crypto = response.data;
                console.log(crypto);

                const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${curr}&days=${datum}&interval=daily&precision=3`
                let info;
                async function fetchData() {
                    try {
                      const response = await fetch(url);
                      const json = await response.json();
                      console.log(json);
                      charter(json);
                    } catch (error) {
                      console.error('Error:', error);
                    }
                }
                function charter(dataInfo) {
                    console.log(dataInfo.prices);
                    setChartData({
                        labels: dataInfo.prices.map((data) => new Date(data[0]).toDateString()), 
                        datasets: [
                          {
                            label: "Price ",
                            data: dataInfo.prices.map((data) => data[1]),
                            backgroundColor: [
                              "rgba(75,192,192,1)",
                              "#50AF95",
                              "#f3ba2f",
                              "#2a71d0"
                            ],
                            borderColor: "gray",
                            borderWidth: 2
                          }
                        ]
                      });
                    setPrice(dataInfo.prices.slice(-1)[0][1])
                }
                if (crypto !== "") {
                    fetchData();
                    
                } else {
                    setChartData({
                        labels: [], 
                        datasets: [
                          {
                            label: "",
                            data: [],
                            backgroundColor: [
                              "rgba(75,192,192,1)",
                              "#50AF95",
                              "#f3ba2f",
                              "#2a71d0"
                            ],
                            borderColor: "blue",
                            borderWidth: 2
                          }
                        ]
                    });
                    setPrice(0)
                }
                
                    
                console.log("HA");
                
            } catch (error) {
                console.error('Error:', error);
            }
            
        };
        requestData();
    }




  return (
    <>

        <div className="Landing">
            <header className="nav">
                <div className='navLeft'>
                    <img src={LOGO} alt="something"/>
                    <p>CryptoCorner</p>
                </div>
                <div className='navRight'>
                    <p className='navRight-item'>
                        <a href="/aboutMe">About me</a>
                    </p>
                    <a className='navRight-item' href="https://bmc.link/augustinn" target="_blank" rel="noreferrer noopener">
                        <img id='bmac' src={BMAC} />
                    </a>
                </div>
            </header>
            <div className='chart-body'>
                <div className='chart-nav'>
                    <FaSearch id="search-icon" onClick={(e) => setChart(curr, date)}/>
                    <div className='cnav-container'>
                        <SearchBar setResults={setResults} results={results}/>
                    </div>
                    <div className='to'>
                        To
                    </div>
                    <div className='select-wrapper'> 
                        <select onChange={(e) => setChart(e.target.value, date)}>
                            {vsCurr.map((option) => (
                                <option value={option[1]}>
                                {option[0]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='chart-main'>
                       
                    <div class="radio-toolbar">
                        <input type="radio" id="1m" name="radioFruit" value="30" onClick={(e) => setChart(curr, e.target.value)} checked />
                        <label for="1m">1M</label>

                        <input type="radio" id="5m" name="radioFruit" value="150" onClick={(e) => setChart(curr, e.target.value)} />
                        <label for="5m">5M</label>

                        <input type="radio" id="1y" name="radioFruit" value="365" onClick={(e) => setChart(curr, e.target.value)} />
                        <label for="1y">1Y</label> 
                    </div>      
                    <LineChart chartData={chartData} price={price+' '+curr}/>
                </div>
            </div>
        
        </div>
        {/* {selected ? <CryptoSummary crypto={selected}/> : null } */}
        {/* {data ? <Line options={options data={data}}/> : null} */}
    </>
  );
}

export default Landing;
