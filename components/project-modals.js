Vue.component('project-modals', {
    template: `
    <div>
        <!-- ####################### Cyber City ###################-->
        <div class="modal fade" id="cyber-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="background-color: black;">
            <div class="modal-header">
                <h3 class="modal-title text-theme">Cyber City</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-theme">&times;</span>
                </button>
            </div>
            <div class="modal-body m-0 p-0">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/cyber-black.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/cyber-white.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/cyber-ipad.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/cyber-phone.png" alt="First slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="p-1">
                    <span class="btn btn-primary btn-tag bg-theme">
                        Website ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        HTML ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        CSS ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        JavaScript ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        Python ✔️
                    </span>
                    <br>
                    <div>
                    <p class="text-light m-0 p-0">Cyber City is a website that I did for a company that wanted to sell technology services to people.</p>
                    <p class="text-muted">Link to the website can be found <a href="http://cybercity-ks.com" class="text-theme">here</a><br>
                    The technologies that were used in Cyber City are:</p>
                    <ul class="list-group">
                        <li class="list-group-item text-theme bg-transparent border border-muted">Python - with the framework Flask that handled all the backend logic.</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">SQlite3 - is a database used to store information</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">JavaScript and JQuery - were used for doing the funcionality of the website</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">CSS and Bootstrap - were used for modals, buttons, icons etc..</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- ########################### Movie Freaks ################## -->
        <div class="modal fade" id="movie-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="background-color: black;">
            <div class="modal-header">
                <h3 class="modal-title text-theme">Movie Freaks</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-theme">&times;</span>
                </button>
            </div>
            <div class="modal-body m-0 p-0">
                <div id="carouselMovie" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/movie-freaks.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/movie-loader.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/movie-ipad.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/movie-phone.png" alt="First slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselMovie" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselMovie" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="p-1">
                    <span class="btn btn-primary btn-tag bg-theme">
                        Website ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        HTML ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        CSS ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        JavaScript ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        Python(Django) ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        PostgreSQL ✔️
                    </span>
                    <br>
                    <div>
                    <p class="text-light m-0 p-0">Movie Freaks is a website for streaming movies online for FREE. This project took me 5-6 months to complete it totally.</p>
                    <p class="text-muted">The technologies that were used in Movie Freaks are:</p>
                    <ul class="list-group">
                        <li class="list-group-item text-theme bg-transparent border border-muted">Python - with the framework Django that handled all the backend logic.</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">PostgreSQL - is a database used for storing movie information</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">JavaScript and JQuery - were used for controling the behavior of the website</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">CSS and Bootstrap - were used for modals, buttons, icons etc..</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- ########################### Tower War ################## -->
        <div class="modal fade" id="tower-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="background-color: black;">
            <div class="modal-header">
                <h3 class="modal-title text-theme">Tower War</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-theme">&times;</span>
                </button>
            </div>
            <div class="modal-body m-0 p-0">
                <div id="carouselTower" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/tower-1.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/tower-2.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/tower-3.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/tower-4.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/tower-5.png" alt="First slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselTower" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselTower" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="p-1">
                    <span class="btn btn-primary btn-tag bg-theme">
                        Game ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        2D ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        Python ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        PyGame ✔️
                    </span> 
                    <br>
                    <div>
                    <p class="text-light m-0 p-0">Is a desktop application game, where you place towers to defeat the monsters that are coming. There are three dificulties with twenty levels for each. If you beat them all you win.</p>
                    <p class="text-muted">Link to the website where I sold it can be found <a href="https://www.piecex.com/source-code/Tower-War-Game-1971" class="text-theme">here</a><br> The technologies that were used in Movie Freaks are:</p>
                    <ul class="list-group">
                        <li class="list-group-item text-theme bg-transparent border border-muted">Python - that handled all the game logic</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">PyGame - is a python module to create 2D desktop games</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">Sprinter - was used to create all the sprints for the game</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- ########################### Dino Game ################## -->
        <div class="modal fade" id="dino-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="background-color: black;">
            <div class="modal-header">
                <h3 class="modal-title text-theme">Dino Game</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-theme">&times;</span>
                </button>
            </div>
            <div class="modal-body m-0 p-0">
                <div id="carouselDino" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/dino-5.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/dino-2.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/dino-3.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/dino-4.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/dino-1.png" alt="First slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselDino" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselDino" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="p-1">
                    <span class="btn btn-primary btn-tag bg-theme">
                        Game ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        2D ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        Python ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        PyGame ✔️
                    </span> 
                    <br>
                    <div>
                    <p class="text-light m-0 p-0">Is a desktop application game that is a replication of chrome's dino game, with a few features added like turn on/off music, press p key to pause and start and play again screens.</p>
                    <p class="text-muted">Link to the website where I sold it can be found <a href="https://www.piecex.com/source-code/Dinosaur-Game-1983" class="text-theme">here</a><br> The technologies that were used in Dino Game are:</p>
                    <ul class="list-group">
                        <li class="list-group-item text-theme bg-transparent border border-muted">Python - that handled all the game logic</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">PyGame - is a python module to create 2D desktop games</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">Sprinter - was used to create all the sprints for the game</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- ####################### Portfolio ###################-->
        <div class="modal fade" id="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="background-color: black;">
            <div class="modal-header">
                <h3 class="modal-title text-theme">Portfolio</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-theme">&times;</span>
                </button>
            </div>
            <div class="modal-body m-0 p-0">
                <div id="carouselPortfolio" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/portfolio.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/portfolio-ipad.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/portfolio-phone.png" alt="First slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselPortfolio" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselPortfolio" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="p-1">
                    <span class="btn btn-primary btn-tag bg-theme">
                        Website ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        HTML ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        CSS ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        JavaScript ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        VueJS ✔️
                    </span>
                    <br>
                    <div>
                    <p class="text-light m-0 p-0">This is a portfolio I created for myself where it showcases who I am and what I do.</p>
                    <p class="text-muted">Link to the website can be found <a href="https://eolnuha.github.io" class="text-theme">here</a><br>
                    The technologies that were used in this Portfolio are:</p>
                    <ul class="list-group">
                        <li class="list-group-item text-theme bg-transparent border border-muted">HTML&CSS - The basics of the website.</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">JavaScript(VueJS) - The behavior of the website</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">Bootstrap - library used for modals, buttons, icons etc..</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- ########################### Space Invader Game ################## -->
        <div class="modal fade" id="space-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="background-color: black;">
            <div class="modal-header">
                <h3 class="modal-title text-theme">Space Invaders</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-theme">&times;</span>
                </button>
            </div>
            <div class="modal-body m-0 p-0">
                <div id="carouselSpace" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/space-1.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/space-2.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/space-3.png" alt="First slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselSpace" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselSpace" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="p-1">
                    <span class="btn btn-primary btn-tag bg-theme">
                        Game ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        2D ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        Python ✔️
                    </span>
                    <span class="btn btn-primary btn-tag bg-theme">
                        PyGame ✔️
                    </span> 
                    <br>
                    <div>
                    <p class="text-light m-0 p-0">Is a desktop application game, where you shoot bullets to defeat the monsters that are coming and move to avoid the meteors. There are three bosses that come each after five levels. If you beat them all you enter a level that only ends if you lose.</p>
                    <p class="text-muted">The technologies that were used in Space Invaders are:</p>
                    <ul class="list-group">
                        <li class="list-group-item text-theme bg-transparent border border-muted">Python - that handled all the game logic</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">PyGame - is a python module to create 2D desktop games</li>
                        <li class="list-group-item text-theme bg-transparent border border-muted">Sprinter - was used to create all the sprints for the game</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `
});
new Vue({el: "#project-modals"});