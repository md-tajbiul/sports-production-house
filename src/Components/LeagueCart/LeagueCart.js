import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const LeagueCart = (props) => {
    // console.log(props)
    const {strLeague, strLeagueAlternate, idLeague} = props.leagueName;
    const history = useHistory();
    const handleClick = (idLeague) => {
        history.push(`/league/${idLeague}`)
    }

    const [cart, setCart] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCart(data.leagues[0]))
    }, [idLeague])
    
    return (
        <div className="col-md-4 mb-4 mt-4">
            <div className="card text-center" style={{boxShadow: '1px 1px 40px -12px rgba(0,0,0,0.8)'}}>
                 <div className="card-body">
                <img src={cart.strBadge} class="card-img-top mb-3 w-75" alt=""/>
                <h4 className="card-text">{strLeagueAlternate || "Series"}</h4>
                <p className="card-title">{strLeague}</p>
                <button onClick={()=>handleClick(idLeague)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>   
        </div>
    );
};

export default LeagueCart;