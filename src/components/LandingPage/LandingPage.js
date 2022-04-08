import React from 'react'
import './LandingPage.css'
import folkModern from './media/images/folkmodern.jpg'
import alternativeRock from './media/images/alternativerock.jpg'
import chillwave from './media/images/chillwave.jpg'
import classical from './media/images/chillwave.jpg'
import classicRock from './media/images/classicrock.jpg'

import honeybee from './media/music/honeybeeFolkModern.mp3'
import imagination from './media/music/imaginationAlternativeRock.mp3'
import recklessDesires from './media/music/recklessDesiresChillwave.mp3'
import symphony from './media/music/symphonyClassical.mp3'
import blowin from './media/music/blowinClassicRock.mp3'


const LandingPage = () => {

    window.addEventListener('scroll', function () {
        let header = document.querySelector('nav');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
      })
    
      document.addEventListener('play', function(e){
        var audios = document.getElementsByTagName('audio');
        for(var i=0, len = audios.length; i < len; i++){
          if(audios[i] !== e.target) {
            audios[i].pause();
            audios[i].currentTime = 0;
          }
        }
      }, true);

    return (
        <body>
        <nav id="navbar">
            <a href="#home" className="logo" >CoffeeTown</a>
            <input className="menu-btn" type="checkbox" id="menu-btn"></input>
            <label className="menu-icon" for="menu-btn">
                <span className="navicon"></span>
            </label>

            <ul className="menu">
                <li><a href="#home">home</a></li>
                <li><a href="#foodmenu">menu</a></li>
                <li><a href="#music">music</a></li>
                <li><a href="#jobs">jobs</a></li>
            </ul>
        
        </nav>

        <section id="home">
            <div class="home">
                <h1 class="">Best</h1>
                <h1 class="">Coffee</h1>
                <h1 class="">in Town</h1>
                <p class="">come and taste it now!</p>
            </div>
        </section>



        <section id="foodmenu">
            <p><strong>what we offer</strong></p>
            <div className="foodmenu-container">


            <div class="menu-card">
          <div class="coffee">
          </div>
          <div class="foodmenu-tile">

           

            <div class="menu-title">
              <div class="menu-item">
                <p class="item">coffee</p>
              </div>
              <div class="menu-price">
                <div class="menu-price-small"><p class="menu-price-name">SMALL</p></div>
                <div class="menu-price-large"><p class="menu-price-name">LARGE</p></div>
              </div>
            </div>

           
            <ul>
              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Brewed Coffee</p></div>
                <div class="menu-price">
                  <div class="menu-price-small">70</div>
                  <div class="menu-price-large">90</div>
                </div>
                </div>
              </li>
          
              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Cafe au lait</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>French press</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Cold Brewed Coffee</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Black coffee</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>
        
            </ul>
          
          </div>
        </div>
        

          
            <div className="menu-card">
        
                <div className="foodmenu-tile">

          

                    <div className="menu-title">
                    <div className="menu-item">
                        <p className="item">espresso</p>
                    </div>
                    <div className="menu-price">
                        <div className="menu-price-small"><p className="menu-price-name">SMALL</p></div>
                        <div className="menu-price-large"><p className="menu-price-name">LARGE</p></div>
                    </div>
                    </div>

                  

                    <ul>
                    <li>
                        <div className="menu-title">
                        <div className="menu-item"><p>Espresso</p></div>
                        <div className="menu-price">
                            <div className="menu-price-small">70</div>
                            <div className="menu-price-large">90</div>
                        </div>
                        </div>
                    </li>
                
                    <li>
                        <div className="menu-title">
                        <div className="menu-item"><p>Macchiato</p></div>
                        <div className="menu-price">
                            <div className="menu-price-small">70</div>
                            <div className="menu-price-large">90</div>
                        </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-title">
                        <div className="menu-item"><p>Cappuccino</p></div>
                        <div className="menu-price">
                            <div className="menu-price-small">70</div>
                            <div className="menu-price-large">90</div>
                        </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-title">
                        <div className="menu-item"><p>Mocha latte</p></div>
                        <div className="menu-price">
                            <div className="menu-price-small">70</div>
                            <div className="menu-price-large">90</div>
                        </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-title">
                        <div className="menu-item"><p>Cafe americano</p></div>
                        <div className="menu-price">
                            <div className="menu-price-small">70</div>
                            <div className="menu-price-large">90</div>
                        </div>
                        </div>
                    </li>
                
                    </ul>
                
                </div>
                
                <div className="espresso"></div>
                </div>


                <div class="menu-card">
          <div class="iceblended">
          </div>
          <div class="foodmenu-tile">

 

            <div class="menu-title">
              <div class="menu-item">
              <p class="item">ice blended</p>
              </div>
              <div class="menu-price">
                <div class="menu-price-small"><p class="menu-price-name">SMALL</p></div>
                <div class="menu-price-large"><p class="menu-price-name">LARGE</p></div>
              </div>
            </div>

            

            <ul>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Caramel</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>
          
              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Coffee Jelly</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Hazelnut</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Dalgona Iced coffee</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Macha Cream</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>
        
            </ul>
          
          </div>
        </div>



        <div class="menu-card">
        
          <div class="foodmenu-tile">

          

            <div class="menu-title">
              <div class="menu-item">
                <p class="item">tea</p>
              </div>
              <div class="menu-price">
                <div class="menu-price-small"><p class="menu-price-name">SMALL</p></div>
                <div class="menu-price-large"><p class="menu-price-name">LARGE</p></div>
              </div>
            </div>

          

            <ul>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Green Tea</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>
          
              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Earl Grey</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>English Breakfast</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Jasmine Tea</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>

              <li>
                <div class="menu-title">
                  <div class="menu-item"><p>Iced Tea</p></div>
                  <div class="menu-price">
                    <div class="menu-price-small">70</div>
                    <div class="menu-price-large">90</div>
                  </div>
                </div>
              </li>
        
            </ul>
          
          </div>

          <div class="tea"></div>
        </div>
        
        
        <div class="ordernow-container">
          <div class="ordernow">
            <a href="#foodmenu" rel="noreferrer" target="_blank" >
              <em>Order now!</em>
            </a>
          </div>
        </div>

            
            </div>


        </section>




        <section id="music">
            <p><strong>the music we play</strong></p>

            <div class="music-container">

                <div class="music-tile">
                    <p>Folk Modern</p>
                    <img src={folkModern} alt="Folk Modern"></img>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=kU0SJTmdFp4">
                        <em>Honeybee by The Head and The Heart</em>
                    </a>

                    <div>
                        <audio controls>
                            <source src={honeybee} type="audio/mp3"></source>
                            <source src="horse.ogg" type="audio/ogg"></source>
                            <source src="horse.mp3" type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
  

                <div class="music-tile">
                    <p>Alternative Rock</p>
                    <img src={alternativeRock} alt="Alternative Rock"></img>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=4C7EGz5EwYE">
                        <em>Imagination by Foster the People</em>
                    </a>
    
                    <div>
                        <audio controls>
                            <source src={imagination} type="audio/mp3"></source>
                            <source src="horse.ogg" type="audio/ogg"></source>
                            <source src="horse.mp3" type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
  
  
                <div class="music-tile">
                    <p>Chillwave</p>
                    <img src={chillwave} alt="Chillwave"></img>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=T8xBuBMmRvQ">
                        <em>Reckless Desires by Washed Out</em>
                    </a>

                    <div>
                        <audio controls>
                            <source src={recklessDesires} type="audio/mp3"></source>
                            <source src="horse.ogg" type="audio/ogg"></source>
                            <source src="horse.mp3" type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
  
                <div class="music-tile">
                    <p>Classical</p>
                    <img src={classical}alt="Classical"></img>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Q4sJuUPv7Uw">
                        <em>Symphony No. 40 by Mozart</em>
                    </a>

                    <div>
                        <audio controls>
                            <source src={symphony} type="audio/mp3"></source>
                            <source src="horse.ogg" type="audio/ogg"></source>
                            <source src="horse.mp3" type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>


        <div class="music-tile">
          <p>Classic Rock</p>
          <img src={classicRock} alt="Classic Rock"></img>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=MMFj8uDubsE">
            <em>Blowin' in the Wind by Bob Dylan</em>
          </a>

          <div>
            <audio controls>
              <source src={blowin} type="audio/mp3"></source>
              <source src="horse.ogg" type="audio/ogg"></source>
              <source src="horse.mp3" type="audio/mpeg"></source>
            </audio>
          </div>
        
        </div>
        
  
      </div>  
    </section>

    <footer id="jobs">
      <p class="jobs-p">
        <strong>the jobs we offer<br></br></strong>
        <em>Apply Now!</em>
      </p>

      <div class="hiring">
        <div>
          <h3>Barista</h3>
          <ul>
            <li>Making coffee drinks</li>
            <li>Operating cash registers</li>
          </ul>
        </div>

        <div>
          <h3>Pastry Chef</h3>
          <ul>
            <li>Baking pastries</li>
            <li>Arranging food in cases</li>
          </ul>
        </div>
        
      </div>

      <div class="contact-us">
        <h2>Contact Us</h2>
      </div>
      
        
      <ul class="contact">
        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=maeaubrey.baes@gmail.com&su=Job Application" rel="noreferrer" target="_blank" id="profile-link"><i class="fa fa-envelope"></i></a></li>
        <li><a href="https://www.facebook.com/aubreybaes.ph" rel="noreferrer" target="_blank"><i class="fa fa-facebook"></i></a></li>
        <li><a href="https://www.twitter.com/auvwey" rel="noreferrer" target="_blank"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/auvwey" rel="noreferrer" target="_blank"><i class="fa fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/mae-aubrey-baes-3220241b2/" rel="noreferrer" target="_blank"><i class="fa fa-linkedin"></i></a></li>
        </ul>


      <div class="copyright">
        <p> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 CoffeeTown. All Rights Reserved. Developed by <em>Aubrey Baes</em></p>
      </div>

    </footer>







        </body>
    )
}


export default LandingPage