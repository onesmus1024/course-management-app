import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = (props) => {
    return (
        <div className="courses">
        <h2>Courses</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {props.courses.map((course) => {
                return (
                <tr key={course.id}>
                    <td>
                    <Link to={"/course/" + course.slug}>{course.title}</Link>
                    </td>
                    <td>{course.authorName}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
    };

const mapStateToProps = (state) => {

    return {
        courses: state.courses,
    };

};

export default connect(mapStateToProps)(Courses);