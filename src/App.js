import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle";
import Contact from "./components/Contact/Contact";
import Destations from "./components/Destations/Home";
import Gallry from "./components/Gallry/Gallry";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/pages/Home";
import Testimoial from "./components/Testimoial/Testimoial";
import SinglePages from "./SinglePage/SinglePages";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/gallery" exact component={Gallry}></Route>
          <Route path="/destination" exact component={Destations}></Route>
          <Route path="/singlepage/:id" exact component={SinglePages}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/blogsingle/:id" exact component={BlogSingle}></Route>
          <Route path="/testimoial" exact component={Testimoial}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/sign-in" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
