import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../../redux/actions/courseActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const AddCourse = (props) => {
  useEffect(() => {
    props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const course = {
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      description: data.description,
      authorId: data.authorId,
      authorName: data.authorId === "1" ? "Cory House" : "Scott Allen",
      category: data.category,
      length: "2:30",
      slug: data.title.toLowerCase().replace(" ", "-"),
    };

    props.actions.createCourse(course);
    e.target.reset();
    navigate("/courses");
  };
  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="input-group">
          <label htmlFor="author">Author</label>
          <select id="author" name="authorId" className="form-control">
            <option value="">Select Author</option>
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            placeholder="Category"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>

        <div className="input-group">
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
