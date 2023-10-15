import './App.css'

function App() {

  return (
    <>
    <body>
        <header>
            <div class="navbar">
                <div class="left">
                    <div class="left-item"><a href="#home">WerkLinker</a></div>
                </div>
                <div class="center">
                    <div class="center-item"><a href="#home">Home</a></div>
                    <div class="center-item"><a href="#about-us">About Us</a></div>
                    <div class="center-item"><a href="#jobs">Jobs</a></div>
                    <div class="center-item"><a href="#insight">Insight</a></div>
                </div>
                <div class="right">
                    <button class="right-button"><a href="#sign-in">Sign In</a></button>
                    <button class="right-button"><a href="#sign-up">Sign Up</a></button>
                </div>
            </div>
            <div class="design">
            <div class="text-design">
                <h2>Find Your Perfect Dream Jobs With WerkLinker</h2>
                <p class="small-text">Good life begins with a good company. Start to explore thousands of jobs in one place and find your dream job.</p>
                <input type="text" placeholder="Search job or company name here" />
                <button class="text-design-button">Find jobs</button>
            </div>
            <div class="img-design">
                <img src="./images/lady3.png" alt="lady1"/>
                <div class="discord">
                    <i class="fa-brands fa-discord fa-2x"></i>
                    <p class="text-1">Software Engineer</p>
                    <p class="text-2">Discord.California US</p>
                    <button class="interview-button">Interview</button>
                </div>
                <div class="dropbox"><i class="fa-brands fa-dropbox fa-2x"></i></div>
                <div class="briefcase">
                    <i class="fa-solid fa-briefcase fa-2x"></i>
                    <p class="text-1">Easy made</p>
                    <p class="text-2">1000+ jobs</p>
                </div>
                <div class="airbnb"><i class="fa-brands fa-airbnb fa-2x"></i></div>
                <div class="basketball"><i class="fa-solid fa-basketball fa-2x"></i></div>
                <div class="credit-card">
                    <i class="fa-solid fa-credit-card fa-2x"></i>
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Applied</p>
                </div>
            </div>
            </div>
        </header>
        <main>
            <h3>Trusted <a href="#1000+">1000+</a> company find best </h3>
            <h3 class="m-text">jobseeker</h3>
            <div class="main-list">
                <div ><a href="https://www.youtube.com/"><img src="./images/youtube.png" alt="youtube"/>Youtube</a></div>
                <div><a href="https://slack.com/"><img src="./images/slack.png" alt="slack"/>slack</a></div>
                <div><a href="https://www.google.com/"><img src="./images/google1.png" alt="google"class="special" /></a></div>
                <div class="green"><a href="https://open.spotify.com/"><img src="./images/spotify.png" alt="spotify"/>Spotify</a></div>   
                <div class="red"><a href="https://www.pinterest.com/"><img src="./images/pinterest.png" alt="pinterest"/>Pinterest</a></div>   
                <div><a href="https://www.figma.com/"><img src="./images/figma.png" alt="figma"/>Figma</a></div>
            </div>
        </main>
        <footer>
            <div class="footer">
                <h2>Find your perfect dream jobs</h2>
                <p>WerkLinker presents help for candidate to meet dream company</p>
                <div class="footer_list">
                    <button class="footer-button"><a href="#ai">AI</a></button>
                    <button class="footer-button"><a href="#marketing">Marketing</a></button>
                    <button class="footer-button"><a href="#sales">Sales</a></button>
                    <button class="footer-button"><a href="#design">UI/UX Design</a></button>
                    <button class="footer-button"><a href="#developer">Developer</a></button>
                    <button class="footer-button"><a href="#hr">Human Resources</a></button>
                </div>
            </div>
        </footer>
    </body>
    </>
  )
}

export default App
