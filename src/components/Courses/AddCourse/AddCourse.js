import React from "react";

//   {
//     id: 1,
//     title: "Learn React",
//     description: "Learn the fundamentals of React",
//     authorId: 1,
//     authorName: "Scott Allen",
//     category: "JavaScript",
//     length: "2:30",
//     slug: "learn-react",
//   },

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


    console.log(course);

  
}

const AddCourse = () => {
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

export default AddCourse;
