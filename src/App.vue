<script setup>
  import Navbar from './components/Navbar.vue';
  import TypedPara from './components/TypedPara.vue'

</script>

<template>
  <div class="wrapper">
      <section class="aboutSect" id="aboutSect" style="height: 100vh;">
        <Navbar/>  
        <div class="container-fluid text-light my-2 py-0" style="height:90%; width:100%;">
          <div class="row">
            <!-- <div class="col-6"></div> -->
            <TypedPara/>

            <div class="col-lg-6 col-md-12 order-xs-1 order-lg-2" style="margin-top: 5%;">
              <img class="mt-0" src="./assets/images/headshot.jpeg" style="height: 70%;"  alt="">
            </div>
          </div>
        </div>

      </section>
      
      <section class="p-5" id="skillsSect">
        <div class="container-fluid p-5" style="height:100%; width: 100%;">
          <div class="row">
            <div class="col-xl-6 col-m-6">
              <h1 class="mt-5 mb-5 text-light text-bold" style="font-size:2vw" >Certifications</h1>
              <ul  style="max-width: 600px; width: 95%; margin: 0px auto; display: flex; flex-wrap: wrap; justify-content: center;">
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em; font-size:1vw">Oracle Java Certified Foundations Associate</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em; font-size:1vw">Salesforce Process Automation Specialist</li>
              </ul>
            </div>
            <div class="col-xl-6 cold-m-6">
              <h1 class="mt-5 mb-5 text-light text-bold" style="font-size:2vw" >Competitions</h1>
              <ul  style="max-width: 600px; width: 95%; margin: 0px auto; display: flex; flex-wrap: wrap; justify-content: center;">
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em; font-size:1vw">Ninjavan Code Dojo '23'</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em; font-size:1vw">SMU Code# '22, '23</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em; font-size:1vw">Shopee Design Challenge 2023</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em; font-size:1vw">Shopee Code League 2022</li>
                
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h1 class="mt-5 mb-5 text-light text-bold" style="font-size:2vw" >My Skills</h1>
              <ul  style="max-width: 600px; width: 95%; margin: 0px auto; display: flex; flex-wrap: wrap; justify-content: center;">
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Java</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Python</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">JavaScript</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">C/C++</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">React</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Express</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">SQL</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">HTML/CSS</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Bash</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Python Flask</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Java Spring Boot</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Node.js</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Firebase</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">MongoDB</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Docker</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">RabbitMQ</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Git</li>
                <li class="buttonBlock buttonContent TransformAnimation" style="margin: 0.5em;font-size:1vw">Microservices</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </section>

      <section id="expSect">
        <div class="container-fluid p-5" style="height:100%; width: 60%;">

            <h1 class="text-light mb-5" style="font-size:3vw" >Experience</h1>

            <div class="expContent">
              
              <div class="expBox">
                <h4 style="font-size:2vw" class="text-light text-start">Full Stack Developer at <span style="color: #ffe400;">Telus International</span></h4>
                <ul class="text-light text-start">
                    <li style="font-size:1vw" >SMU Global Innovation Immersion Programe</li>
                    <li style="font-size:1vw" >Developed applications for internal use through Scrum / Agile Methodologies</li>
                </ul>
              </div>

              <div class="expBox">
                <h4 style="font-size:2vw" class="text-light text-start">Coding Mentor for <span style="color: #ffe400;">SCIS Ellipsis</span></h4>
                <ul class="text-light text-start">
                    <li style="font-size:1vw">Carried out workshops for students to revise / learn coding concepts and syntax</li>
                    <li style="font-size:1vw">Guided students on coding problems throughout their freshman year</li>
                </ul>
              </div>

              <div class="expBox">
                <h4 style="font-size:2vw" class="text-light text-start">Teaching Assistant at <span style="color: #ffe400;">SMU</span></h4>
                <ul class="text-light text-start">
                    <li style="font-size:1vw">Assisted Professors in teaching Python programming</li>
                    <li style="font-size:1vw">Conducted consultation sessions for students to clear any doubts with regards to coding fundamentals</li>
                </ul>
              </div>



            </div>
        </div>
      </section>

      <section id="projectSect" style="background-color: #313638;">

        <div class="container-fluid p-5" style="height:100%; width: 100%;">
          <h1 class="mb-4 text-bold text-light">Projects</h1>
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a href="/haus">
                  <img src="./assets/images/Haus2.png" style="width: 60%; height: 60%;" alt="...">
                </a>
              </div>
              <div class="carousel-item ">
                <a href="https://www.youtube.com/watch?v=mXnO4Y1JEVU&ab_channel=Sean" target="_blank">
                  <img src="./assets/images/FormBuilder.png" style="width: 72%; height: 70%;" alt="...">
                </a>
              </div>
              <!-- <div class="carousel-item">
                <a href="/haus">
                  <img src="./assets/images/Haus2.png" style="width: 60%; height: 60%;" alt="...">
                </a>
              </div> -->
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="caption-container mt-3">
            <div class="caption" data-index="0">
              <h3 class="text-light">Haus</h3>
              <p class="text-light">Webapp to assist students in finding safe and affordable accomodation</p>
              <p style="color: #ffe400; word-spacing: 10px;">[VueJS] [Javascript] [Firebase]</p>
            </div>
            <div class="caption" data-index="1" hidden>
              <h3 class="text-light">Customizable Form Builder</h3>
              <p class="text-light">Corporate Solution to assist Quantum Leap in handling vendor forms</p>
              <p class="text-light">(Click for video presentation)</p>
              <p style="color: #ffe400; word-spacing: 10px;">[VueJS] [Javascript] [Java] [Springboot] [MongoDB]</p>
            </div>
            <!-- <div class="caption" data-index="2" hidden>
              <h5 class="text-light">Third slide label</h5>
              <p class="text-light">Some representative placeholder content for the third slide.</p>
            </div> -->
          </div>


        </div>
      </section>

      <!-- <section id="contactSect" style="background-color: #040f16;">

      </section> -->
      

  </div>
</template>



<style scoped>
  *{
    font-family: Montserrat;
  }
  section{
    width: 100%;
    height: 100vh;

    scroll-snap-align: start;
  }

  .wrapper{
    height: 100vh;
    width: 100%;
    margin: 0;

    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExampleCaptions');
    const captions = document.querySelectorAll('.caption');
    const captionContainer = document.querySelector('.caption-container');

    carousel.addEventListener('slide.bs.carousel', function (event) {
      const activeIndex = event.to;
      captions.forEach((caption, index) => {
        if (index === activeIndex) {
          caption.removeAttribute('hidden');
        } else {
          caption.setAttribute('hidden', 'hidden');
        }
      });
    });
  });
</script>
