<template>
    <div class="col-lg-6 col-md-12 order-xs-2 order-lg-1" style="margin-top: 12%;">
      <div class="typewriter">
        <div v-if="showTypewriterEffect" class="typewriter-text">
            
            <h3 class="mb-3">Justin Pansacola</h3>

            <p class="p-0 m-0"> Information Systems Undergraduate</p>
            <p class="p-0 mb-5">Singapore Management University</p>
            

            <p class="p-0 m-0"> SCIS Dean's List '22-'23</p>
            <p class="p-0 mb-5">Coding Mentor / Teaching Assistant</p>

            <p class="p-0 mb-5"> Aspiring Software Engineer</p>

            <a href="https://www.github.com/JustinPansacola"><i class="fa-brands fa-github fa-2xl mx-3" style="color: #ffffff;"></i></a>
            <a href="https://www.linkedin.com/in/justinpansacola/"><i class="mx-3 fa-brands fa-linkedin fa-2xl" style="color: #ffffff;"></i></a>
        
        </div>
      </div>
    </div>
  </template>

<style>
    .typewriter {
    overflow: hidden;
    }

    .typewriter-text {
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.15em solid #fff;
    animation: typing 2s steps(80) 1;
    }

    @keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
    }
</style>

<script>
export default {
  data() {
    return {
      showTypewriterEffect: false,
      typewriterText: "This is the typewriter animation effect."
    };
  },
  mounted() {
    this.showTypewriterEffect = true;
  }
};
</script>