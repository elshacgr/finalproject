
import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Kim Namjoon (RM)',
      caption: 'Leader, Main Rapper. '
    },
    {
      title: 'Kim Seok Jin (Jin)',
      caption: 'Sub Vocalist, Visual'
    },
    {
      title: 'Min Yoongi (SUGA)',
      caption: 'Lead Rapper'
    },
    {
      title: 'Jung Hoseok (J-Hope)',
      caption: 'Main Dancer, Sub Rapper, Sub Vocalist'
    },
    {
      title: 'Park Jimin (Jimin)',
      caption: 'Main Dancer, Main Vocalist'
    },
    {
      title: 'Kim Taehyung (V)',
      caption: 'Sub Vocalist, Visual'
    },
    {
      title: 'Jeon Jung kook (Jungkook)',
      caption: 'Main Vocalist, Lead Dancer, Sub Rapper, Center, Maknae'
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Armypedia</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Members</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Variety Show</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Message</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Universe!</div>
        <div className="intro-heading text-uppercase">Let's Fandoming Together</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Let's Go</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">News</h2>
          <h3 className="section-subheading text-muted">Latest News.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">BTS CONCERT</h4>
          <p className="text-muted">
The two-hour set, for the boy band's Permission to Dance On Stage tour, was rife with confetti, smoke, pyrotechnics and — of course — the smoothest of dance moves. But it was the superstar power of BTS' seven members — RM, Jin, V, J-Hope, Suga, Jimin and Jungkook — that ruled the night.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">BTS Makes History </h4>
          <p className="text-muted">BTS has become the first Asian act in history to win Artist of the Year at the American Music Awards, and this also marks BTS’s third consecutive year winning Favorite Pop Duo or Group.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">BTS 'Dynamite'</h4>
          <p className="text-muted">“Dynamite” became the biggest song of the year and topped @AppleMusic 2021 most-streamed songs chart! Thank you #BTSARMY for your love and support!</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">From nothing to Legend</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2010-2013</h4>
                  <h4 className="subheading">Pre-Debut</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">BTS (Korean: 방탄소년단 Bangtan Sonyeondan; Japanese: 防弾少年团 Bōdan Shōnendan; also known as the Bangtan Boys and Beyond the Scene) is a seven-member boy group under BigHit Music. They debuted on June 13, 2013 with their first single 2 Cool 4 Skool.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2014-2016</h4>
                  <h4 className="subheading">Youth Duology</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">They introduce the era with a comeback trailer by RM, Intro: What Am I To You. They explore more themes of love but stick to their rough, angsty aesthetic. Lead single Danger is about feeling confused and dissatisfied in an imbalanced relationship. Some of the imagery in the Danger MV are eventually used for the HYYH MVs storyline.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019-2020</h4>
                  <h4 className="subheading">Map of the Soul</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">BTS signals the beginning of a brand new story with the release of their newest album MAP OF THE SOUL : PERSONA. As global superstars who play stadiums and are loved by countless fans across the world, BTS now looks to shape the future reflecting on and using the power they have gained while embracing all its shadows. </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2020</h4>
                  <h4 className="subheading">Dynamite</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Since its release, “Dynamite” has broken records on YouTube, Spotify and Billboard. It also became BTS's first real radio hit in the United States, which helped the song attract casual listeners outside of the group's already established fan base.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Can't wait
                  <br/>For the
                  <br/>Next!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Variety Show</h2>
          <h3 className="section-subheading text-muted">BTS uploaded two videos advertising the then upcoming new variety show to their V Live channel on February 28, 2015. The first video received 242,000 views and 2.24 million likes, and the second received 100,000 views and 87,000 likes within three days of being posted</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt=""/>
            <h4>Run BTS</h4>
            <p className="text-muted">2015 - Present</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt=""/>
            <h4>BTS In The Soop V1</h4>
            <p className="text-muted">2020</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt=""/>
            <h4>BTS In The Soop V2</h4>
            <p className="text-muted">2021</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">You can watch all the shows on Weverse.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Message for BTS</h2>
          <h3 className="section-subheading text-muted">Let's spread the joy</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;