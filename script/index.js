
function NavBar(){
    return(
        <div>
            <nav>
                <div className ="companyname">
                    <i class = "fas fa-grin-hearts"></i>
                </div>
                <ul className ="nav-links">
                    
                    <li><a className ="firstnav"   href = "#about">About</a></li>
                    <li><a className ="firstnav"  href = "#project">Works</a> </li>
                     <li><a className ="firstnav"  href = "https://tolani.hashnode.dev/">Blog</a></li>
                    <li><a className ="firstnav"  href = "#contact">Contact</a></li>
                
                </ul>
                <div className  = "burger">
                    <div className ="line1"></div>
                    <div className ="line2"></div>
                    <div className ="line3"></div>
                </div>
            </nav>
        </div>
    )
}

function Main(){
    return(
        <div id = "maintext">
            <div>
                <img  src="/images/triangle1.svg" className="triangle1 fig" alt="" width="19" height="21"  />
                <img  src="https://droitthemes.com/wp/makro/wp-content/uploads/2020/04/shape_1-1-1.png" className="shape1 fig" alt="" width="60" height="40" />
                <img  src="/images/circle1.svg" className="dot1 fig " alt="" width="10" height="10" />
                <img  src="/images/circle3.svg" className="dot3 fig" alt="" width="20" height="20" />
                <img  src="https://droitthemes.com/wp/makro/wp-content/uploads/2020/04/shape_1-1-1.png" className="shape2 fig" alt=""  width="60" height="40" />
                <img   src="/images/triangle2.svg" className="triangle2 fig" alt=""  width="19" height="21" />
                <img  src="/images/dot4.svg" className="dot4 fig" alt="" width="10" height="10" /> 
                <img   src="https://droitthemes.com/wp/makro/wp-content/uploads/2020/04/dot_6-1.png" className="dot5 fig" alt="" width="24" height="24" />
            </div>
            <div id = "text">
                 <h4 >Blessing ojo</h4>
                 <h1 >Front-End Developer <br /> from Nigeria </h1>
                 <a  target = "_blank" href = "https://drive.google.com/file/d/1g8n-StuNkRXcJKPkF-Z2O18UwI_uxuNy/view?usp=sharing"><button id = "button0">View My Resume</button></a>
                 <a  href = "#contact"><button id = "button">Get in Touch!</button></a>
            </div>
            <div id = "grindiv"><img className = "grin" src = "/images/grin.png"/></div>
           
        </div>
    )
}
function About(){
    return(
        <div id = "about0">
            <div>
                <img data-speed = "-5"  src="/images/triangle12.svg" className="triangle1 img" alt=""  width="19" height="21" />
                <img data-speed = "-5"  src="/images/dot6.svg" className="dot5 img" alt="" width="24" height="24" />
                <img data-speed = "-5"  src="/images/dot2.svg" className="dot2 img" alt=""  width="14" height="14" />
                <img data-speed = "-5"  src="/images/dot5.svg" className="dot6 img" alt=""  width="20" height="20" />
                <img data-speed = "2"  src="/images/triangle3.svg" className="triangle3 img" alt="" width="19" height="21" />
            </div>
           <div  id = "abouthead">
               <h2>ABOUT ME</h2>
           </div>
           <div id = "abouttext">
               <p>I'm Blessing - Front End Developer in an Amazing way. <br />
                I love designs, illustrations, animations and building user interface from components.<br/>
                I am on a mission of building websites with semantic artwork, intuitive functionality 
                and slick performance for Businesses to appeal to their clients. <br />
                My vision is to be one of the best developers in the world.
                </p>
           </div>
        </div>
    )
}

function Project(){
    return(
        <div id = "project">
            <h2 className  = "all">WORKS</h2>
            <a className = "ap" href = "http://awardies.netlify.app/"><div className = "bigdiv all">
                <h4 className = "divtext">Award Nomination</h4>
                <div><img className = "peak " src = "/images/use3.png"/></div>
            </div></a>
            <a className = "ap" href = "http://pvcubes.netlify.app/"><div className = "bigdiv all">
                <h4 className = "divtext">Cubes</h4>
                <div><img className = "peak" src = "/images/Cubesnew.png"/></div>
            </div></a>
            <a className = "ap" href = "https://getarecipe.netlify.app/"><div className = "bigdiv all">
                <h4 className = "divtext">Recipe villa</h4>
                <div><img className = "cloud " src = "/images/recipe.png"/></div>
            </div></a>
            <a className = "ap" href = "https://ahamedia.netlify.app/"><div className = "bigdiv all">
                <h4 className = "divtext">Media Agency website</h4>
                
                <div><img className = "cloud " src = "/images/ahamedia.png"/></div>
            </div></a>
            <a className = "ap" href = "https://sagittiform-forehea.000webhostapp.com/"><div className = "bigdiv all">
                <h4 className = "divtext">Tutorial Eportal design</h4>
            
                <div><img className = "cloud " src = "/images/peak.png"/></div>
            </div></a>
        </div>
    )
}
function Footer(){
    return(
        <div>
            <div id="foot">
                <footer>
                    <p><span class="foot"> &#169; 2020 Tolani </span></p>
                </footer>
            </div>  
    </div>
    )
}



function SocialMedia(){
    return(
        <div id = "socialmedia">
            <div>
                <h3 id = "media">Reach out for<span id = "pro"></span></h3>
            </div>
            <div id = "social">
                <a  class="gmail" href="mailto:ojotolani3@gmail.com" target="_blank"><i class="far fa-envelope fa-lg"></i></a>
                <a class="linkedin"  href="https://www.linkedin.com/in/blessing-ojo-4848b6196" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
            </div>
        </div>
    )
}


ReactDOM.render(<NavBar/>, document.getElementById("header"));
ReactDOM.render(<Main/>, document.getElementById("main"));
ReactDOM.render(<About/>, document.getElementById("about"));
ReactDOM.render(<Project/>, document.getElementById("project"));
ReactDOM.render(<SocialMedia/>, document.getElementById("contact"));
ReactDOM.render(<Footer/>, document.getElementById("footer"));

var names = ["Projects", "Partnership", "Team Work"];
setInterval(function(){
    var rand = Math.floor(Math.random() * 3);
    document.getElementById("pro").innerHTML = names[rand];
}, 500);

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
            }
        })
    });

    
}
navSlide();