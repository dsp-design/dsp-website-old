import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import { v4 as uuid } from 'uuid';

// Pages:
//Service Page (Added to top for base css)
import ServicePage  from "./pages/Service"
// Home
import Home from "./pages/Home";


// Approach
import Approach from "./pages/Approach";


// About
import About from "./pages/About";
import Projects from "./pages/Projects";


// Blog
import Blog from "./pages/Blog";


// Clients
import Clients from "./pages/Clients";
import DesignBuild from "./pages/Clients/DesignBuild";
import LargeCompany from "./pages/Clients/LargeCompany";
import BoutiquePractice from "./pages/Clients/BoutiquePractice";

// Calculator
import Calculator  from "./pages/Calculator"

// Trifolds
import BPtrifold from "./pages/Clients/BoutiquePractice/BPtrifold";
import DBtrifold from "./pages/Clients/DesignBuild/DBtrifold";
import LCtrifold from "./pages/Clients/LargeCompany/LCtrifold";
// Client Form
import LearnMore from "./pages/Clients/Contact";


// Design Services
import DesignServices from "./pages/DesignServices";

//PhotoMatrix
import PhotoMatrix from "./pages/PhotoMatrix";

//PhotoGallery
import PhotoGallery from './pages/PhotoGallery';

// Join Us
//import JobList from "./pages/JoinUs/JobList";
//import PartnerForm from "./pages/JoinUs/PartnerForm";
//import RemindForm from "./pages/JoinUs/RemindMeLater";


// Privacy Policy
import Privacy from "./pages/Privacy";

// Org chart
import Org from "./pages/Org";

// Recruit Forms
import AdminForm from "./pages/JoinUs/RecruitForms/AdminForm";
import ArchForm from "./pages/JoinUs/RecruitForms/ArchForm";
import BrandForm from "./pages/JoinUs/RecruitForms/BrandForm";
import DigitalForm from "./pages/JoinUs/RecruitForms/DigitalForm";
import GraphicsForm from "./pages/JoinUs/RecruitForms/GraphicsForm";
import InteriorsForm from "./pages/JoinUs/RecruitForms/InteriorsForm";
import ManagementForm from "./pages/JoinUs/RecruitForms/ManagementForm";
import MarketingForm from "./pages/JoinUs/RecruitForms/MarketingForm";
import ServiceForm from "./pages/JoinUs/RecruitForms/ServiceForm";


// Log in
import Login from "./pages/LogIn";



// Components
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Background from "./components/Background";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Architecture from './pages/IceBreakers/components/Architecture';
import InteriorDesign from './pages/IceBreakers/components/InteriorDesign';
import DigitalDesign from './pages/IceBreakers/components/DigitalDesign';
import ServiceDesign from './pages/IceBreakers/components/ServiceDesign';
import ITAdmin from './pages/IceBreakers/components/ITAdmin';
import Exibits from './pages/Exibits/Exibits';
import JoinUs from "./pages/JoinUs";
import FlexStaff from "./pages/FlexStaff"
import MarketPlace from "./pages/MarketPlace";

import FSArch from './pages/FullService/components/Architecture';
import FSBrand from "./pages/FullService/components/Brand";
import FSInt from './pages/FullService/components/Interior';
import FSInd from './pages/FullService/components/Industrial';
import FSDig from './pages/FullService/components/Digital';
import FSSrv from './pages/FullService/components/Service';

import Bundles from './pages/Bundles/components/Bundles';

import Contacts from './pages/Contacts';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>

          <Background>
            <Switch>
              {/* Home */}
              <Route exact path="/" component={Home} />


              {/* About */}
              <Route exact path="/about" component={About} />
              <Route exact path="/about/projects" component={Projects} />


              {/* Blog */}
              <Route exact path="/blog" component={Blog} />
              
              {/* <Route path="/blog" render={(props) => <Blog {...props} key={uuid()}/>} /> */}


              {/* Approach */}
              <Route exact path="/approach" component={Approach} />


              {/* Clients */}
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/clients/boutiquepractice" component={BoutiquePractice} />
              <Route exact path="/clients/designbuild" component={DesignBuild} />
              <Route exact path="/clients/largecompany" component={LargeCompany} />

              {/* Calculator */}
              {/* <Route exact path="/flex-staff-estimator" component={Calculator} /> */}

              {/* Contacts */}
              <Route exact path="/contact" component={Contacts} />

              {/* Trifolds */}
              <Route exact path="/clients/boutiquepractice/trifold" component={BPtrifold} />
              <Route exact path="/clients/designbuild/trifold" component={DBtrifold} />
              <Route exact path="/clients/largecompany/trifold" component={LCtrifold} />
              {/* Client Contact */}
              <Route exact path="/clients/contact" component={LearnMore} />


              {/* Design Services */}
              <Route exact path="/designservices" component={DesignServices} />
              {/* Exibits */}
              <Route  exact path="/exhibits" component={Exibits} />
              {/* Flex Staff */}
              <Route  exact path="/flex-staff" component={FlexStaff} />
              {/* MarketPlace */}
              <Route exact path="/marketplace" component={MarketPlace} />

              {/* PhotoMatrix */}
              <Route exact path="/photomatrix/:id" component={PhotoMatrix} />
              {/* PhotoGallery */}
              <Route exact path="/photogallery/:id" component={PhotoGallery} />
              {/* Join Us */}
              <Route exact path="/joinus" component={JoinUs} />

              {/* Privacy Policy */}
              <Route exact path="/privacy" component={Privacy} />

              {/* Org chart */}
              <Route exact path="/org" component={Org} />

              {/* Recruit Forms */}
              <Route exact path="/joinus/admin" component={AdminForm} />
              <Route exact path="/joinus/architecture" component={ArchForm} />
              <Route exact path="/joinus/brand" component={BrandForm} />
              <Route exact path="/joinus/digital" component={DigitalForm} />
              <Route exact path="/joinus/graphics" component={GraphicsForm} />
              <Route exact path="/joinus/interiors" component={InteriorsForm} />
              <Route exact path="/joinus/management" component={ManagementForm} />
              <Route exact path="/joinus/marketing" component={MarketingForm} />
              <Route exact path="/joinus/service" component={ServiceForm} />
              {/* Service Page */}
              <Route exact path="/services-home" component={ServicePage} />
              <Route exact path="/icebreakers-architecture" component={Architecture} />
              <Route exact path="/icebreakers-interior-design" component={InteriorDesign} />
              <Route exact path="/icebreakers-digital-design" component={DigitalDesign} />
              <Route exact path="/icebreakers-admin-design" component={ITAdmin} />
              <Route exact path="/icebreakers-service-design" component={ServiceDesign} />
              <Route exact path="/full-service-architecture" component={FSArch} />
              <Route exact path="/full-service-brand-graphics-design" component={FSBrand} />
              <Route exact path="/full-service-interior-design" component={FSInt} />
              <Route exact path="/full-service-industrial-design" component={FSInd} />
              <Route exact path="/full-service-digital-design" component={FSDig} />
              <Route exact path="/full-service-design-strategy" component={FSSrv} />
              <Route exact path="/service-bundles" component={Bundles} />

              {/* Log In */}
              {/* <Route exact path="/login" component={Login} /> */}

              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Background>
          
          <NavBar />

        </div>
      </Router>
    );
  }
}

export default App;
