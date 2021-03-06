import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function Events2() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <section>
          <div className="block no-padding">
            <div class="pg-tp-bg">
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} />
            </div>
          </div>
        </section>
        <div className="gray-bg3 brdcrmb-wrp">
          <div className="container">
            <div className="brdcrmb-inr flex justify-content-between">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="" itemprop="url">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Our Events</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div className="block">
            <div className="container">
              <div className="evnt-wrp remove-ext8">
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="events/event-11">
                      <img
                        src={require("../events/Images/EventImages/6.jpg")}
                        alt="evnt-img1-1.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">24.08.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-1.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="events/event-11">Clay Ganapathi Workshop</Link>
                    </h4>
                    <p itemprop="description">
                      As a tradition, idols of Lord Ganesha are hand made,
                      worshiped and are immersed in rivers, lakes or wells.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="events/event-11">
                        <a className="thm-btn2" title="" itemprop="url">
                          {" "}
                          <Link to="events/event-11">Join The Movement</Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.928273,%2077.563438">
                            Let's Be The Change
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-12">
                      <img
                        src={require("../events/Images/EventImages/10.jpg")}
                        alt="evnt-img1-2.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">02.10.2018</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-2.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-12">Bengaluru Plog Run</Link>
                    </h4>
                    <p itemprop="description">
                      Bengaluru Plog Run combines jogging with picking up dry
                      plastic waste, in an effort to make Bengaluru a cleaner
                      city.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-12">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link to="/events/event-12">Join The Movement</Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>Bengaluru</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-13">
                      <img
                        src={require("../events/Images/EventImages/7.jpg")}
                        alt="evnt-img1-3.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">09.09.2018</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-3.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-13">Clay Ganapathi Workshop</Link>
                    </h4>
                    <p itemprop="description">
                      As a tradition, idols of Lord Ganesha are hand
                      made,worshiped and are immersed in rivers, lakes or wells.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-13">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link to="/events/event-13">Join The Movement</Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.928273,%2077.563438">
                            Let's Be The Change
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-14">
                      <img
                        src={require("../events/Images/EventImages/12.jpg")}
                        alt="evnt-img1-4.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">16.08.2018</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-4.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-14">
                        Musical Cleanathon in association with Radio City
                      </Link>
                    </h4>
                    <p itemprop="description">
                      TeamLBTC in association with Radio City and Onthara
                      Bannagalu movie team are beautifying a 50 meters garbage
                      dump near Banashankari Sub Register Office.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-14">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link to="/events/event-14">Join The Movement</Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.913560,%2077.572486">
                            Near Banashankari Sub-Register Office
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-15">
                      <img
                        src={require("../events/Images/EventImages/11.jpg")}
                        alt="evnt-img1-5.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">31.08.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-5.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-15">
                        Cleanathon in association with AIMS
                      </Link>
                    </h4>
                    <p itemprop="description">
                      TeamLBTC teaming with AIMS institute are eradicating a 50
                      metre garage dump in Laggere.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-10">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link to="/events/event-15">Join The Movement</Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://goo.gl/maps/Mya9nywjPqN2">
                            Near Mount Senoria School, Muniswara Nagar,
                            Hegganahalli, Bengaluru.
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pgntin-wrp text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link to="/events">
                      <a className="page-link prev" title="" itemprop="url">
                        <i className="fa fa-angle-left"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    {" "}
                    <Link to="/events">
                      <a className="page-link" title="" itemprop="url">
                        1
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="/events4">
                      <a className="page-link" title="" itemprop="url">
                        2
                      </a></Link>
                  </li>

                  <li className="page-item active">
                    <span className="page-link">3</span>
                  </li>

                  <li className="page-item">
                    <Link to="/events4">
                      <a className="page-link" title="" itemprop="url">
                        4
                      </a>
                    </Link>
                  </li>

                  <li className="page-item">
                    <a className="page-link next" title="" itemprop="url">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}
export default Events2;
