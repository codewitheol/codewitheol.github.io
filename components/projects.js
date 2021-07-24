Vue.component('projects', {
    template: `
        <div>
            <h2 id="titleStyle">My projects</h2>
            <div class="imageContainer">
            <hr id="showCaseBackgroundLine">
            <div class="image a" style="background-image: url('/images/cyber-black.webp')" data-toggle="modal" data-target="#cyber-modal">
            </div>

            <div class="image b remove-800" style="background-image: url('/images/movie-freaks.webp')" data-toggle="modal" data-target="#movie-modal">
            </div>

            <div class="image c" style="background-image: url('/images/tower-1.webp')" data-toggle="modal" data-target="#tower-modal">
            </div>
            
            </div>
            <br>
            <br>
            <div class="show-800">
                <div class="imageContainer">
                    <hr id="showCaseBackgroundLine">
                    <div class="image a" style="background-image: url('/images/movie-freaks.webp')" data-toggle="modal" data-target="#movie-modal">
                    </div>
                    <div class="image c" style="background-image: url('/images/portfolio.webp')" data-toggle="modal" data-target="#portfolio-modal">
                    </div>
                
                </div>
                <br>
                <br>
            </div>
            <div class="imageContainer">
                <hr id="showCaseBackgroundLine">
                <div class="image a" style="background-image: url('/images/dino-5.webp')" data-toggle="modal" data-target="#dino-modal"></div>

                <div class="image b remove-800" style="background-image: url('/images/portfolio.webp')" data-toggle="modal" data-target="#portfolio-modal"></div>

                <div class="image c" style="background-image: url('/images/space-1.webp')" data-toggle="modal" data-target="#space-modal"></div>
            
            </div>
            <br>
            <br>
            <div class="imageContainer">
            <hr id="showCaseBackgroundLine">
            <div class="image a" style="background-image: url('/images/biblio1.webp')" data-toggle="modal" data-target="#bibliostack-modal">
            </div>

            <div class="image b remove-800" style="background-image: url('/images/commerce-1.webp')" data-toggle="modal" data-target="#market-modal">
            </div>

            <div class="image c" style="background-image: url('/images/mario1.webp')" data-toggle="modal" data-target="#super-modal">
            </div>
            
            </div>
            <br>
            <br>
        </div>
    `
})
new Vue({el: "#projects"});