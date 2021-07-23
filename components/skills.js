Vue.component('skills', {
    template: `
    <div class="row">
    <div class="col-md">
        <div class="container__progressbars">

            <div class="progressbar">
                <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                </svg>
                <span class="progressbar__text shadow-html">HTML</span>
            </div>

            <div class="progressbar">
                <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
                </svg>
                <span class="progressbar__text shadow-css">CSS</span>
            </div>

            <div class="progressbar">
                <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-python shadow-python"> </circle>
                </svg>
                <span class="progressbar__text shadow-python">Python</span>
            </div>

            <div class="progressbar">
                <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
                </svg>
                <span class="progressbar__text shadow-js">JavaScript</span>
            </div>

            <div class="progressbar remove-800">
                <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-vue shadow-vue"> </circle>
                </svg>
                <span class="progressbar__text shadow-vue">Vue.js</span>
            </div>

            <div class="progressbar remove-800">
                <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
                </svg>
                <span class="progressbar__text shadow-react">React.js</span>
            </div>
        </div>
    </div>
    <div id="myCanvasContainer" class="col-md">
          <canvas id="myCanvas" width="500" height="500" style="width: 100%">
              <ul>
                  <li><a data-weight="25" href="#">Python</a></li>
                  <li><a data-weight="25" href="#">CSS</a></li>
                  <li><a data-weight="25" href="#">VueJs</a></li>
                  <li><a data-weight="25" href="#">TypeScript</a></li>
                  <li><a data-weight="24" href="#">REST</a></li>
                  <li><a data-weight="14" href="#">JSON</a></li>
                  <li><a data-weight="13" href="#">Java</a></li>
                  <li><a data-weight="14" href="#">JavaScript</a></li>
                  <li><a data-weight="26" href="#">Wordpress</a></li>
                  <li><a data-weight="26" href="#">Django</a></li>

                  <li><a data-weight="21" href="#">Flask</a></li>
                  <li><a data-weight="17" href="#">Git</a></li>
                  <li><a data-weight="17" href="#">C++</a></li>
                  <li><a data-weight="23" href="#">Bootstrap</a></li>
                  <li><a data-weight="15" href="#">SASS</a></li>
                  <li><a data-weight="24" href="#">ReactJS</a></li>
                  <li><a data-weight="12" href="#">jQuery</a></li>
                  <li><a data-weight="19" href="#">SQL</a></li>
                  <li><a data-weight="19" href="#">Groovy</a></li>
                  <li><a data-weight="19" href="#">Moqui</a></li>
                  <li><a data-weight="19" href="#">MySQL</a></li>

                </ul>
            </canvas>
        </div>
    </div>
    `
})
new Vue({el: "#skills"});