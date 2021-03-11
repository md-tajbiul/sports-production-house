import { faClock, faFlag, faGamepad, faVenusMars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../images/male.png'
import femaleImg from '../images/female.png'
import { faFacebookSquare, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const CartDetails = () => {
    const {idLeague} = useParams();
    const [cart, setCart] = useState({});
    const {strCountry, intFormedYear, strSport, strGender, strDescriptionEN, strDescriptionFR} = cart;
    let gender;
    if (strGender === 'Male') {
        gender = maleImg;
    }
    else {
        gender = femaleImg;
    }

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCart(data.leagues[0]))
    }, [idLeague])


    return (
        <div>
            <div className="card bg-dark text-white">
                    <img style={{height:'350px'}} src={cart.strFanart4} className="card-img" alt="card img"/>
                    <div className="card-img-overlay container d-flex justify-content-center align-items-center flex-column">
                    <img src={cart.strBadge} className="w-25" alt=""/>
                </div>
            </div>

            <div className="card mb-3 p-3 container mt-5 text-white rounded" style={{background: '#5B06DF', boxShadow: '1px 1px 40px -12px rgba(0,0,0,0.8)'}}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{cart.strLeagueAlternate}</h2>
                            <h5 className="card-text"><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h5>
                            <h5 className="card-text"><FontAwesomeIcon icon={faClock}/> Founded: {intFormedYear}</h5>
                            <h5 className="card-text"><FontAwesomeIcon icon={faGamepad}/> Sport Type: {strSport}</h5>
                            <h5 className="card-text"><FontAwesomeIcon icon={faVenusMars}/> Gender: {strGender}</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-1" style={{alignItems:'center'}}>
                        <img className="img-fluid" src={gender} alt="..."/>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionFR}</p>
            </div>
            <div className="socialIcons" style={{fontSize:'45px'}}>
                <Link><FontAwesomeIcon icon={faInstagramSquare}/></Link>
                <Link><FontAwesomeIcon icon={faYoutube}/></Link>
                <Link><FontAwesomeIcon icon={faFacebookSquare}/></Link>
                <Link><FontAwesomeIcon icon={faTwitter}/></Link>
            </div>

        </div>
    );
};

export default CartDetails;