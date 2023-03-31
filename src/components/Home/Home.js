import React from 'react';  
import { Link } from 'react-router-dom';
import './Home.css';

const Home =(props) => {
    return (
        <div className="home">
            <h1>Course Catalog</h1>
            <p>Kickstart your career with a course from our catalog</p>
            <Link to="/courses" className="btn"> View Courses</Link>

        
        </div>
    );
}


export default Home;