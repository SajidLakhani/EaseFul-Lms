import React from "react";
import HomePage1 from "./components/HomePage/HomePage1";
import "./App.css";
import Footer from "./ReusableComponents/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import HomePageTwo from "./components/HomePage2/HomePageTwo";
import HomePageThree from "./components/HomePage3/HomePage3";
import HomePageFour from './components/HomePage4/HomePage4'
import CoursePageOne from "./components/CoursePageOne/CoursePageOne";
import Searchpage from "./components/SearchPage/Searchpage";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import CourseReview from "./components/CourseReview/CourseReview";
import CartPage from "./components/CartPage/CartPage";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TeacherProfile from './components/TeacherProfile/TeacherProfile'
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import MemberShip from "./components/MemberShip/MemberShip";
import Instructor from "./components/Instructor/Instructor";
import CourseFullView from "./components/CourseFullView/CourseFullView";

const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/homepage-1" component={HomePage1} />
          <Route path="/homepage-2" component={HomePageTwo} />
          <Route path="/homepage-3" component={HomePageThree} />
          <Route path="/homepage-4" component={HomePageFour} />
          <Route path="/coursepage-1" component={CoursePageOne} />
          <Route path="/searchpage" component={Searchpage} />
          <Route path="/coursedetail" component={CourseDetails} />
          <Route path="/coursereview" component={CourseReview} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/teacherprofile" component={TeacherProfile} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogdetails" component={BlogDetails} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={AboutUs} />
          <Route path="/membership" component={MemberShip} />
          <Route path="/instructor" component={Instructor} />
          <Route path="/coursefullview" component={CourseFullView} />



        </Switch>
      </Router>
    </div>
  );
};

export default App;
