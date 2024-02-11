var Projects = Projects || function (output_) {

    output_.insertAdjacentHTML('beforeEnd', projectsHtmlString);
    buttonify();

    // ~~~~~ scrolling implementation ~~~~~
    // var nav = document.getElementById('projects-card');
    // var content = document.getElementById('projects-content')
    // console.log(nav);
    // console.log(content);
    // nav.setAttribute("data_overflowing", determineOverflow(content, nav));

    // var last_known_scroll_position = 0;
    // var ticking = false;
    
    // function doSomething(scroll_pos) {
    //     nav.setAttribute("data_overflowing", determineOverflow(content, nav));
    // }
    
    // nav.addEventListener("scroll", function() {
    //     last_known_scroll_position = window.scrollY;
    //     if (!ticking) {
    //         window.requestAnimationFrame(function() {
    //             doSomething(last_known_scroll_position);
    //             ticking = false;
    //         });
    //     }
    //     ticking = true;
    // });

    // function determineOverflow(content, container) {
    //     var containerMetrics = container.getBoundingClientRect();
    //     var containerMetricsRight = Math.floor(containerMetrics.right);
    //     var containerMetricsLeft = Math.floor(containerMetrics.left);
    //     var contentMetrics = content.getBoundingClientRect();
    //     var contentMetricsRight = Math.floor(contentMetrics.right);
    //     var contentMetricsLeft = Math.floor(contentMetrics.left);
    //     if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
    //         return "both";
    //     } else if (contentMetricsLeft < containerMetricsLeft) {
    //         return "left";
    //     } else if (contentMetricsRight > containerMetricsRight) {
    //         return "right";
    //     } else {
    //         return "none";
    //     }
    // }
    
}

const projectsHtmlString =
    `
    <div class="projects-card" id="projects-card">

    <div class="row" id="projects-content">

        <div class="col-sm-">
            <figure class="tile">
               <img src="images/Screenshot 2024-02-11 223028.png" width="310" height="394" alt="Resume Crafstman" />
               <div class="date"><span class="year">2024</span><span class="month">February</span></div>
               <figcaption>
                  <h3>Resume Crafstman                    </h3>
                  <h6>Your Personal Resume Generator</h6>
                  <h6>Easy to go no login reuired</h6>
                  <p>Resume Crafstman helps you to build resume in one click with standard ATS friendly template</p>
                  <button class="tags">HTML</button>
                  <button class="tags">CSS</button>
                  <button class="tags">JAVA SCRIPT</button>
                  <button class="tags">React</button>
                  
               </figcaption>
               <a href="https://github.com/sandesh7274/Resume-Craftsman" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/sandesh7274/Resume-Craftsman"
                  data-size="large">Resume Crafstman</a>
            </div>
            
        </div>

        <div class="col-sm-">
            <figure class="tile">
               <img src="images/Screenshot 2024-02-11 223136.png" width="310" height="394" alt="Grove Grain" />
               <div class="date"><span class="year">2023</span><span class="month">December</span></div>
               <figcaption>
                  <h3>Grove Grain                      </h3>
                  <h6>online Market place for millets , dry fruits , wheat . </h6>
                  <h6>For businesses</h6>
                  <p>made this for my dads business and helped him to go online</p>
                  <button class="tags">HTML</button>
                  <button class="tags">JavaScript</button>
                  <button class="tags">CSS</button>
               </figcaption>
               <a href="https://github.com/sandesh7274/GroveGrain" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/sandesh7274/GroveGrain"
                  data-size="large">Grove Grain</a>
            </div>
         </div>

         <div class="col-sm-">
            <figure class="tile">
               <img src="images/Screenshot 2024-02-11 222956.png" width="310" height="394" alt="City Weather" />
               <div class="date"><span class="year">2024</span><span class="month">Jan</span></div>
               <figcaption>
                  <h3>City Weather</h3>
                  <h6>API based Weather App</h6>
                  <h6>mini project</h6>
                  <p>This is a API based project for weather details of the city's used openweathermap for the API </p>
                  <button class="tags">HTML</button>
                  <button class="tags">CSS</button>
                  <button class="tags">JavaScript</button>
               </figcaption>
               <a href="https://github.com/sandesh7274/weather-app" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/sandesh7274/weather-app"
                  data-size="large">City Weather</a>
            </div>
         </div>
         <div class="col-sm-">
         <figure class="tile">
            <img src="images/Screenshot 2024-02-11 223019.png" width="310" height="394" alt="Note Flow" />
            <div class="date"><span class="year">2024</span><span class="month">Jan</span></div>
            <figcaption>
               <h3>Note Flow</h3>
               <h6>Note taking app</h6>
               <h6>mini project</h6>
               <p>This is a note taking app  </p>
               <button class="tags">HTML</button>
               <button class="tags">CSS</button>
               <button class="tags">JavaScript</button>
            </figcaption>
            <a href="https://github.com/sandesh7274/note-flow" target="_blank"></a>
         </figure>
         <div class="github-button-div">
            <a class="github-button" href="https://github.com/sandesh7274/note-flow"
               data-size="large">Note Flow</a>
         </div>
      </div>

    </div>

</div>
    `;