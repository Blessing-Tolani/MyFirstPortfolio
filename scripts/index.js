
function NavBar() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "nav",
            null,
            React.createElement(
                "div",
                { className: "companyname" },
                React.createElement("i", { "class": "fas fa-grin-hearts" })
            ),
            React.createElement(
                "ul",
                { className: "nav-links" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { className: "firstnav", href: "#about" },
                        React.createElement("i", { className: "fas fa-user foo" }),
                        "About"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { className: "firstnav", href: "#project" },
                        React.createElement("i", { className: "fas fa-clone foo" }),
                        "Works"
                    ),
                    " "
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { className: "firstnav", href: "#contact" },
                        React.createElement("i", { className: "fas fa-phone foo" }),
                        "Contact"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "burger" },
                React.createElement("div", { className: "line1" }),
                React.createElement("div", { className: "line2" }),
                React.createElement("div", { className: "line3" })
            )
        )
    );
}

function Main() {
    return React.createElement(
        "div",
        { id: "maintext" },
        React.createElement(
            "div",
            null,
            React.createElement("img", { src: "/images/triangle1.svg", className: "triangle1 fig", alt: "", width: "19", height: "21" }),
            React.createElement("img", { src: "https://droitthemes.com/wp/makro/wp-content/uploads/2020/04/shape_1-1-1.png", className: "shape1 fig", alt: "", width: "60", height: "40" }),
            React.createElement("img", { src: "/images/circle1.svg", className: "dot1 fig ", alt: "", width: "10", height: "10" }),
            React.createElement("img", { src: "/images/circle3.svg", className: "dot3 fig", alt: "", width: "20", height: "20" }),
            React.createElement("img", { src: "https://droitthemes.com/wp/makro/wp-content/uploads/2020/04/shape_1-1-1.png", className: "shape2 fig", alt: "", width: "60", height: "40" }),
            React.createElement("img", { src: "/images/triangle2.svg", className: "triangle2 fig", alt: "", width: "19", height: "21" }),
            React.createElement("img", { src: "/images/dot4.svg", className: "dot4 fig", alt: "", width: "10", height: "10" }),
            React.createElement("img", { src: "https://droitthemes.com/wp/makro/wp-content/uploads/2020/04/dot_6-1.png", className: "dot5 fig", alt: "", width: "24", height: "24" })
        ),
        React.createElement(
            "div",
            { id: "text" },
            React.createElement(
                "h4",
                null,
                "Blessing ojo"
            ),
            React.createElement(
                "h1",
                null,
                "Front-End Developer ",
                React.createElement("br", null),
                " from Nigeria "
            ),
            React.createElement(
                "a",
                { target: "_blank", href: "https://drive.google.com/file/d/1FDQKsqHkutNvdi9SRDm5om_HQD5OLod9/view?usp=sharing" },
                React.createElement(
                    "button",
                    { id: "button0" },
                    "View My Resume"
                )
            ),
            React.createElement(
                "a",
                { href: "#contact" },
                React.createElement(
                    "button",
                    { id: "button" },
                    "Get in Touch!"
                )
            )
        ),
        React.createElement(
            "div",
            { id: "grindiv" },
            React.createElement("img", { className: "grin", src: "/images/grin.png" })
        )
    );
}
function About() {
    return React.createElement(
        "div",
        { id: "about0" },
        React.createElement(
            "div",
            null,
            React.createElement("img", { "data-speed": "-5", src: "/images/triangle12.svg", className: "triangle1 img", alt: "", width: "19", height: "21" }),
            React.createElement("img", { "data-speed": "-5", src: "/images/dot6.svg", className: "dot5 img", alt: "", width: "24", height: "24" }),
            React.createElement("img", { "data-speed": "-5", src: "/images/dot2.svg", className: "dot2 img", alt: "", width: "14", height: "14" }),
            React.createElement("img", { "data-speed": "-5", src: "/images/dot5.svg", className: "dot6 img", alt: "", width: "20", height: "20" }),
            React.createElement("img", { "data-speed": "2", src: "/images/triangle3.svg", className: "triangle3 img", alt: "", width: "19", height: "21" })
        ),
        React.createElement(
            "div",
            { id: "abouthead" },
            React.createElement(
                "h2",
                null,
                "ABOUT ME"
            )
        ),
        React.createElement(
            "div",
            { id: "abouttext" },
            React.createElement(
                "p",
                null,
                "I'm Blessing - Front End Developer in an Amazing way. ",
                React.createElement("br", null),
                "I love designs, illustrations, animations and building user interface from components.",
                React.createElement("br", null),
                "I am on a mission of building websites with semantic artwork, intuitive functionality and slick performance for Businesses to appeal to their clients. ",
                React.createElement("br", null),
                "My vision is to be one of the best developers in the world."
            )
        )
    );
}

function Project() {
    return React.createElement(
        "div",
        { id: "project" },
        React.createElement(
            "h2",
            { className: "all" },
            "WORKS"
        ),
        React.createElement(
            "a",
            { className: "ap", target: "_blank", href: "https://sagittiform-forehea.000webhostapp.com/" },
            React.createElement(
                "div",
                { className: "bigdiv all" },
                React.createElement(
                    "h4",
                    { className: "divtext" },
                    "Peak tutors"
                ),
                React.createElement(
                    "h1",
                    { className: "divtext2" },
                    "Tutorial Eportal ",
                    React.createElement("br", null),
                    " Design"
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { className: "peak", src: "/images/peak.png" })
                )
            )
        ),
        React.createElement(
            "a",
            { className: "ap", target: "_blank", href: "https://wordcloud-generator-ub.herokuapp.com/" },
            React.createElement(
                "div",
                { className: "bigdiv all" },
                React.createElement(
                    "h4",
                    { className: "divtext" },
                    "wordcloud generator"
                ),
                React.createElement(
                    "h1",
                    { className: "divtext2" },
                    "Generate  Your  ",
                    React.createElement("br", null),
                    "WordCloud"
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { className: "cloud ", src: "/images/cloud.png" })
                )
            )
        )
    );
}
function Footer() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { id: "foot" },
            React.createElement(
                "footer",
                null,
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "span",
                        { "class": "foot" },
                        " \xA9 2020 Tolani "
                    )
                )
            )
        )
    );
}

function SocialMedia() {
    return React.createElement(
        "div",
        { id: "socialmedia" },
        React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                { id: "media" },
                "Reach out for",
                React.createElement("span", { id: "pro" })
            )
        ),
        React.createElement(
            "div",
            { id: "social" },
            React.createElement(
                "a",
                { "class": "gmail", href: "mailto:ojotolani3@gmail.com", target: "_blank" },
                React.createElement("i", { "class": "far fa-envelope fa-lg" })
            ),
            React.createElement(
                "a",
                { "class": "linkedin", href: "https://www.linkedin.com/in/blessing-ojo-4848b6196", target: "_blank" },
                React.createElement("i", { "class": "fab fa-linkedin fa-lg" })
            )
        )
    );
}

ReactDOM.render(React.createElement(NavBar, null), document.getElementById("header"));
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));
ReactDOM.render(React.createElement(About, null), document.getElementById("about"));
ReactDOM.render(React.createElement(Project, null), document.getElementById("project"));
ReactDOM.render(React.createElement(SocialMedia, null), document.getElementById("contact"));
ReactDOM.render(React.createElement(Footer, null), document.getElementById("footer"));

var names = ["Projects", "Partnership", "Team Work"];
setInterval(function () {
    var rand = Math.floor(Math.random() * 3);
    document.getElementById("pro").innerHTML = names[rand];
}, 500);

var navSlide = function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", function () {
        nav.classList.toggle("nav-active");

        navlinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = "navLinkFade 0.5s ease forwards " + index / 7 + "s";
            }
        });
    });
};
navSlide();