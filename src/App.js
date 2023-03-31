
import './App.css';
import Header from './components/common/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';

let courses = [
  {
    id: 1,
    title: "Learn React",
    description: "Learn the fundamentals of React",
    authorId: 1,
    authorName: "Scott Allen",
    category: "JavaScript",
    length: "2:30",
    slug: "learn-react",
  },
  {
    id: 1,
    title: "Learn React",
    description: "Learn the fundamentals of React",
    authorId: 1,
    authorName: "Scott Allen",
    category: "JavaScript",
    length: "2:30",
    slug: "learn-react",
  },
];


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
      </Routes>
    </div>
  );
}

export default App;
