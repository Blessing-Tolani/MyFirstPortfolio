




function NavBar(){
    return(
        <div>
            <nav>
                <div className ="companyname">
                    <i class = "fas fa-grin-hearts"></i>
                </div>
                <ul className ="nav-links">
                    
                    <li><a className ="firstnav"   href = "#about"><i className  = "fas fa-user foo"></i>About</a></li>
                    <li><a className ="firstnav"  href = "#project"><i className  = "fas fa-clone foo"></i>Projects</a> </li>

                    <li><a className ="firstnav"  href = "#contact"><i className  = "fas fa-phone foo"></i>Contact</a></li>
                
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
            <div id = "text">
                 <h4 className = "text1">Blessing ojo</h4>
                 <h1 className = "text1">Front-End Developer <br /> from Nigeria </h1>
                 <a className = "text1" target = "_blank" href = "https://drive.google.com/file/d/1FDQKsqHkutNvdi9SRDm5om_HQD5OLod9/view?usp=sharing"><button id = "button0">View My Resume</button></a>
                 <a className = "text1" href = "#contact"><button id = "button">Get in Touch!</button></a>
            </div>
            <div id = "grindiv"><img className = "grin" src = "/images/grin.png"/></div>
           
        </div>
    )
}
function About(){
    return(
        <div id = "about0">
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
            <a className = "ap" target = "_blank" href = "https://sagittiform-forehea.000webhostapp.com/"><div className = "bigdiv all">
                <h4 className = "divtext">Peak tutors</h4>
                <h1 className = "divtext2">Tutorial Eportal <br /> Design</h1>
                <div><img className = "peak" src = "/images/peak.png"/></div>
            </div></a>
            <a className = "ap" target = "_blank" href = "https://wordcloud-generator-ub.herokuapp.com/"><div className = "bigdiv all">
                <h4 className = "divtext">wordcloud generator</h4>
                <h1 className = "divtext2">Generate  Your  <br />WordCloud</h1>
                <div><img className = "cloud " src = "/images/cloud.png"/></div>
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