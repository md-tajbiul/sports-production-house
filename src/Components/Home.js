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

            <div className="card bg-dark text-white">
                    <img src={img1} className="card-img" alt="card img"/>
                <div className="card-img-overlay container d-flex justify-content-center align-items-center flex-column">
                    <h1 className="card-title">Welcome</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    {
                        showLeagues.map(leagueName => <LeagueCart leagueName={leagueName}></LeagueCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;