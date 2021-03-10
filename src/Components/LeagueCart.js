import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const LeagueCart = (props) => {
    // console.log(props)
    const {strLeague, strSport, strLeagueAlternate, idLeague} = props.leagueName;
    const history = useHistory();
    const handleClick = (idLeague) => {
        history.push(`/league/${idLeague}`)
    }
    const boxStyle = {border: '2px solid red', borderRadius:'10px', margin: '20px', padding: '20px', background: 'white', width: '30rem'}
    
    return (
        <div style={boxStyle} className="container">
                <div>
                <h3>{strLeague}</h3>
                    <h4>Sports Type: {strSport}</h4>
                    <h4>League Type: {strLeagueAlternate}</h4>
                    <button onClick={()=>handleClick(idLeague)}>Click Me</button>
                </div>
        </div>
    );
};

export default LeagueCart;