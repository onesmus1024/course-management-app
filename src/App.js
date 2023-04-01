
import './App.css';
import Header from './components/common/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Login from './components/login/Login';
import Signup from './components/sign-up/SignUp';
import { createContext } from 'react';
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

export const ThemeContext = createContext(null);
export const UserContext = createContext(null);

function App() {


  return (
    <div className="App">
      <ThemeContext.Provider value="dark" >
        <UserContext.Provider value="false">
          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
