export default function Header() {
    return (
        <div class="header">
            <div class="navbar">
            <div class="left">
              <div class="left-item">
                <a href="#home">WerkLinker</a>
              </div>
            </div>
            <div class="center">
              <div class="center-item">
                <a href="#home">Home</a>
              </div>
              <div class="center-item">
                <a href="#about-us">About Us</a>
              </div>
              <div class="center-item">
                <a href="#jobs">Jobs</a>
              </div>
              <div class="center-item">
                <a href="#insight">Insight</a>
              </div>
            </div>
            <div class="right">
              <button class="right-button">
                <a href="#sign-in">Sign In</a>
              </button>
              <button class="right-button">
                <a href="#sign-up">Sign Up</a>
              </button>
            </div>
          </div>
          <div class="design">
            <div class="text-design">
              <h2>Find Your Perfect Dream Jobs With WerkLinker</h2>
              <p class="small-text">
                Good life begins with a good company. Start to explore thousands
                of jobs in one place and find your dream job.
              </p>

              <input
                type="text"
                placeholder="Search job or company name here"
              />
              <button class="text-design-button">Find jobs</button>
            </div>
            <div class="img-design">
              <img src="./images/lady3.png" alt="lady1" />
              <div class="discord">
                <i class="fa-brands fa-discord fa-2x"></i>
                <p class="text-1">Software Engineer</p>
                <p class="text-2">Discord.California US</p>
                <button class="interview-button">Interview</button>
              </div>
              <div class="dropbox">
                <i class="fa-brands fa-dropbox fa-2x"></i>
              </div>
              <div class="briefcase">
                <i class="fa-solid fa-briefcase fa-2x"></i>
                <p class="text-1">Easy made</p>
                <p class="text-2">1000+ jobs</p>
              </div>
              <div class="airbnb">
                <i class="fa-brands fa-airbnb fa-2x"></i>
              </div>
              <div class="basketball">
                <i class="fa-solid fa-basketball fa-2x"></i>
              </div>
              <div class="credit-card">
                <i class="fa-solid fa-credit-card fa-2x"></i>
                <i class="fa-solid fa-circle-check"></i>
                <p class="text">Applied</p>
              </div>
            </div>
          </div>
        </div>
    );
}