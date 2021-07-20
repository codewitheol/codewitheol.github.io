Vue.component('projects', {
    template: `
        <div>
            <link rel="stylesheet" href="/css/projects.css">
            <h2 id="titleStyle">My projects</h2>
            <div class="imageContainer">
            <hr id="showCaseBackgroundLine">
            <div class="image a" style="background-image: url('/images/cyber-black.png')" data-toggle="modal" data-target="#cyber-modal">
            </div>

            <div class="image b remove-800" style="background-image: url('/images/movie-freaks.png')" data-toggle="modal" data-target="#movie-modal">
            </div>

            <div class="image c" style="background-image: url('/images/tower-1.png')" data-toggle="modal" data-target="#tower-modal">
            </div>
            
            </div>
            <br>
            <br>
            <div class="imageContainer">
                <hr id="showCaseBackgroundLine">
                <div class="image a" style="background-image: url('/images/dino-5.png')" data-toggle="modal" data-target="#dino-modal"></div>

                <div class="image b remove-800" style="background-image: url('/images/portfolio.png')" data-toggle="modal" data-target="#portfolio-modal"></div>

                <div class="image c" style="background-image: url('/images/space-1.png')" data-toggle="modal" data-target="#space-modal"></div>
            
            </div>
            <br>
            <br>
            <div class="show-800">
                <div class="imageContainer">
                    <hr id="showCaseBackgroundLine">
                    <div class="image a" style="background-image: url('/images/movie-freaks.png')" data-toggle="modal" data-target="#movie-modal">
                    </div>
                    <div class="image c" style="background-image: url('/images/portfolio.png')" data-toggle="modal" data-target="#portfolio-modal">
                    </div>
                
                </div>
            </div>
        </div>
    `
})
new Vue({el: "#projects"});