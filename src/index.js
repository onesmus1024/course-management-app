import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const initialState = {
  courses: [
    {
      id: 1,
      title: "Learn React",
      description: "Learn the fundamentals of React",
      authorId: 1,
      authorName: "Scott Allen",
      category: "JavaScript",
      length: "2:30",
      slug: "learn-react",
    }
  ]
};

const store = configureStore(initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
