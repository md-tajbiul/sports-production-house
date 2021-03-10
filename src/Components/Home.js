import React, { useEffect, useState } from 'react';
import img1 from '../images/sportsField.jpg';
import LeagueCart from './LeagueCart';

const Home = () => {
    const [league, setLeague] = useState([])
  const showLeagues = league.slice(0, 15)
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues))
    }, [])
    return (
        <div style={{background: '#5B06DF'}}>
            <div className="card text-white text-center">
                <img className="w-100 card-img" src={img1} alt=""/>
                <div className="card-img-overlay">
                <h1 style={{fontSize:'60px'}} className="cart-title">Hello World</h1>
                </div>
            </div>
                {
                    showLeagues.map(leagueName => <LeagueCart leagueName={leagueName}></LeagueCart>)
                }
        </div>
    );
};

export default Home;