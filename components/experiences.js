Vue.component('experienxes-section', {
    template: `
    <div class="container">
    <h1 class="display-4 title text-center text-light">Experiences</h1>
    <div class="slide-right">
        <!-- timeline item 1 -->
        <div class="row">
            <!-- timeline item 1 left dot -->
            <div class="col-auto text-center flex-column d-sm-flex">
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5>
                    <span class="badge text-light">Now</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <!-- timeline item 1 event content -->
            <div class="col py-2">
                <div class="card border border-light bg-theme">
                    <div class="card-body">
                        <h6 class="text-light font-weight-bold">Software Developer at Pythys Software</h6>
                        <p class="text-light">
                            • Modified existing software to correct coding
                            errors, upgrade interfaces and improve overall performance.<br>
                            • Worked on creating different websites, from e-commerce to live streaming
                            websites, using Java, Groovy, XML, PostgreSQL, ElasticSearch.<br>
                            • Worked closely with clients to collect requirements and ensure project
                            quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--/row-->
    </div>
    <div class="slide-left">
        <!-- timeline item 1 -->
        <div class="row">
            <!-- timeline item 1 left dot -->
            <div class="col-auto text-center flex-column d-sm-flex">
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5>
                    <span class="badge text-light">2021</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <!-- timeline item 1 event content -->
            <div class="col py-2">
                <div class="card border border-success">
                    <div class="card-body">
                        <h6 class="text-theme font-weight-bold">Python Developer at StarLabs</h6>
                        <p class="education-card-desc">
                            • Completed a 4 month internship with the python
                            team at StarLabs where we developed a question and
                            answer platform for students.<br>
                            • Helped on designing database models and developing the backend with the latest
                            technologies<br>(Python, Django, PostgreSQL)
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--/row-->
    </div>
    <div class="slide-right">
        <!-- timeline item 1 -->
        <div class="row">
            <!-- timeline item 1 left dot -->
            <div class="col-auto text-center flex-column d-sm-flex">
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5>
                    <span class="badge text-light">2020</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <!-- timeline item 1 event content -->
            <div class="col py-2">
                <div class="card border border-light bg-theme">
                    <div class="card-body">
                        <h6 class="text-light font-weight-bold">Software Developer at upWork and PieceX</h6>
                        <p class="text-light">
                            • Developed a hospital medication management website using technologies -
                            Python, Django, JavaScript, HTML & CSS and MySQL.<br>
                            • Worked on an e-commerce website for fashion using image recognition to display
                            recommended clothes to the users. Technologies that were used - Python, Django,
                            OpenCV, Pillow, JavaScript, HTML & CSS and MySQL.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--/row-->
    </div>
</div>`
})
new Vue({el: "#experiences"});