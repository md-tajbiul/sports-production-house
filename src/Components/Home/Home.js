import React, { useEffect, useState } from 'react';
import img1 from '../../images/sportsField.jpg';
import LeagueCart from '../LeagueCart/LeagueCart';

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
                <div className="card-img-overlay container text-center  d-flex justify-content-center align-items-center">
                    <h2 className="card-title" style={{fontWeight:'700'}}>Welcome To Sports Production House</h2>
                </div>
            </div>
            
            <div className="container">
                    <h2 style={{color:'white', textAlign:'center'}} className='mt-3'>Choose Best League For You!</h2>
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