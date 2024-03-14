import React from 'react';
import Swathi_Image from '../../assets/Swathi_Image.jpg';
import './Home.css';

function Home() {
    return (
        <>
            <div className="mt-2 mb-2">
                <img className="img-fluid mx-auto d-block rounded-circle" src={Swathi_Image} alt="Profile picture" width="200px" height="200px"/>
            </div>
            <p>Hello, I'm Swathi Munagala. As an accomplished frontend developer with a keen eye for detail and a passion for crafting seamless user experiences, I am thrilled to present my work to you. With a solid foundation in HTML, CSS, JavaScript, jQuery, Bootstrap, and Node.js, I have honed my skills in building responsive and accessible websites that not only look stunning but also function flawlessly across devices.<br/> Driven by a commitment to staying ahead of industry trends and continuously enhancing my expertise, I am currently immersed in mastering React through an intensive bootcamp program. This new addition to my skill set not only broadens my capabilities but also ensures that I remain at the forefront of cutting-edge web development technologies.</p>
        </>
    ) ;   
}

export default Home;