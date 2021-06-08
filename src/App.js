import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./Chart.css";
//import coins from './Coin'
import Chart from "./Chart";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  // const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState('')

  // useEffect(() => {
  //   axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  //   .then(resp => {
  //     setCoins(resp.data)
  //   })
  //   .catch(error => console.log(error))
  // }, []);

  // const handleChange = e => {
  //   setSearch(e.target.value)
  // }

  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  //   )

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://billboard2.p.rapidapi.com/billboard_global_200_excl_us",
      params: { date: "2021-06-08" },
      headers: {
        "x-rapidapi-key": "aef8a84abfmshd967ca684a2731cp1f8d0djsn692036426cb8",
        "x-rapidapi-host": "billboard2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setArtists(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="chart-search">
        <h1 className="chart-text">Billboard Top 200</h1>
        <form>
          {/* <input
            className="coin-input"
            type="text"
            placeholder="Search currency"
            onChange={handleChange}
          /> */}
        </form>
      </div>
      {artists.map((artist) => {
        return (
          <Chart
            key={artist.artist}
            chartNumber={artist.weeks_on_chart}
            artistName={artist.artist}
            artistImage={artist.images[0]}
          />
        );
      })}

      {/* {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })} */}
    </div>
  );
}

export default App;
