import React from 'react';
import Swathi_Image from '../../assets/Swathi_Image.jpg';

function Home() {
    return (
        <div className="mt-2 mb-2">
            <img className="img-fluid mx-auto d-block rounded-circle" src={Swathi_Image} alt="Profile picture" width="200px" height="200px"/>
        </div>
    ) ;   
}

export default Home;