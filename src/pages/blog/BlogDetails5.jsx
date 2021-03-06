import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import { Switch, Route, Link } from "react-router-dom";

function BlogDetails5() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <StickyHeader></StickyHeader>
        <section>
          <div class="block no-padding">
            <div class="pg-tp-bg">
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} />
            </div>
          </div>
        </section>
        <div class="gray-bg3 brdcrmb-wrp">
          <div class="container">
            <div class="brdcrmb-inr flex justify-content-between">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html" title="" itemprop="url">
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="blog-style4.html" title="" itemprop="url">
                    Blog
                  </a>
                </li>
                <li class="breadcrumb-item active">
                  Have you volunteered yet?
                </li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="blg-dtl-thmb">
                <img
                  src={require("../blog/Images/Blog5.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      February 8, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      environment
                    </a>
                    ,
                    <a href="#" title="" itemprop="url">
                      volunteering
                    </a>
                  </span>
                  <h1 itemprop="headline">Have you volunteered yet?</h1>
                  <ul class="pst-mta">
                    <li>
                      <i class="fa fa-user thm-clr"></i>
                      <a href="#" title="" itemprop="url">
                        LBTC
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="blg-dtl-desc">
                  <p itemprop="description">
                    Volunteers work together willingly for the benefit of their
                    communities, environment and themselves. By giving back to
                    the community, a volunteer does not only help the community
                    grow stronger, but are also helping themselves become
                    stronger. They play a dynamic role in improving our society.
                    Knowing that they have made a positive impact on someone is
                    an emotionally uplifting experience that cannot be matched
                    by fame or money. As Paulo Coelho said –
                  </p>
                  <p itemprop="description">
                    “The Reward of our work is not what we get, but what we
                    become”.
                  </p>
                  <p itemprop="description">
                    And most importantly, volunteering has been seen as a great
                    stress relief activity as well!
                  </p>

                  <p itemprop="description">
                    So it’s not for money or fame, it’s just to lend a helping
                    hand to make the world a better place. That is something you
                    can’t buy with wealth. Here is a call to do your part, join
                    the excitement, meet new people, be a positive influence,
                    develop new talents and skills, grow from the experience,
                    learn and serve, get personal satisfaction to work for a
                    cause, be a part of a team, face new challenges, raise
                    awareness and preserve the environment.
                  </p>

                  <p itemprop="description">
                    LBTC gives you a chance to volunteer in Bengaluru, for a
                    variety of exciting events that will help you contribute to
                    the society as well as have a great time doing it! Once a
                    part of our volunteer team, regular updates will be given on
                    the events. If you are free, have time to spare or if an
                    event is happening around your locality, just pop in with
                    your friends.
                  </p>

                  <p itemprop="description">
                    We have great volunteer opportunities in store for you and
                    it is up to you to lend a hand and make a difference!
                  </p>

                  <br />
                  <div class="gallery">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gallery-item">
                          <a
                            href="../../assets/images/resources/blg-dtl-gal-img2-1.jpg"
                            title=""
                            data-fancybox="gallery"
                            itemprop="url"
                          >
                            <img
                              src={require("../../assets/images/resources/blg-dtl-gal-img2-1.jpg")}
                              alt="blg-dtl-gal-img2-1.jpg"
                              itemprop="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gallery-item">
                          <a
                            href="../../assets/images/resources/blg-dtl-gal-img2-2.jpg"
                            title=""
                            data-fancybox="gallery"
                            itemprop="url"
                          >
                            <img
                              src={require("../../assets/images/resources/blg-dtl-gal-img2-2.jpg")}
                              alt="blg-dtl-gal-img2-2.jpg"
                              itemprop="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12"></div>
                    </div>
                  </div>
                </div>
                <div class="athr-bx">
                  <img
                    src={require("../blog/Images/Authors/Author-LBTC-L.png")}
                    alt="athr-img1-1.jpg"
                    itemprop="image"
                  />
                  <div class="athr-inf">
                    <h4 itemprop="headline">About Author</h4>
                    <p itemprop="description">
                      Let's Be The Change is an NGO run by a group of
                      passionate, energetic and like minded people towards
                      achieving a common objective of eradicating garbage dumps
                      and directing the residents towards achieving a cleaner
                      and greener environment.
                    </p>
                    <div class="athr-scl">
                      <a
                        class="facebook"
                        href="https://www.facebook.com/teamlbtc"
                        title="Facebook"
                        target="_blank"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>

                      <a
                        class="instagram"
                        href="https://www.instagram.com/team_lbtc/"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>

                      <a
                        class="twitter"
                        href="https://www.twitter.com/TeamLBTC"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="cmt-wrp">
                  <h4 itemprop="headline">Comments</h4>
                  <ul class="cmt-lst">
                    <li>
                      <div class="cmt-bx">
                        <img
                          src={require("../../assets/images/resources/cmt-img1-1.jpg")}
                          alt="cmt-img1-1.jpg"
                          itemprop="image"
                        />
                        <div class="cmt-inf">
                          <h6 itemprop="headline">Jockon Don</h6>
                          <span class="thm-clr">10 months ago</span>
                          <p itemprop="description">
                            Cupcake ipsum dolor sit amet. Dragée sweet roll
                            tiramisu sweet cupcake croissant lollipop candy
                            Cupcake ip sum dolor sit amet. Dragée sweet roll
                            tiramisu sweet cupcake croissant lollipop candy.
                          </p>
                          <a
                            class="comment-reply-link"
                            href="#"
                            title=""
                            itemprop="url"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div class="cmt-bx">
                            <img
                              src={require("../../assets/images/resources/cmt-img1-2.jpg")}
                              alt="cmt-img1-2.jpg"
                              itemprop="image"
                            />
                            <div class="cmt-inf">
                              <h6 itemprop="headline">Thomas Tom</h6>
                              <span class="thm-clr">10 months ago</span>
                              <p itemprop="description">
                                Cupcake ipsum dolor gée sweet roll tiramisu
                                sweet cupcake croissant lollipop candy Cupcake
                                ip Dragée sweet roll tiramisu sweet cupcake
                                croissant lollipop candy.
                              </p>
                              <a
                                class="comment-reply-link"
                                href="#"
                                title=""
                                itemprop="url"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="rply-cmt">
                  <h4 itemprop="headline">Leave A Comment</h4>
                  <form>
                    <div class="row mrg10">
                      <div class="col-md-6 col-sm-12 col-lg-6">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div class="col-md-6 col-sm-12 col-lg-6">
                        <input type="email" placeholder="Your Email" />
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <textarea placeholder="Message"></textarea>
                        <button class="thm-btn" type="submit">
                          Send Message<span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </main>
    </div>
  );
}
export default BlogDetails5;
