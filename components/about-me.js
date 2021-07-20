Vue.component('about-me', {
    template: `
        <div>
            <div class="pt-5 remove-800"></div>
            <div class="row mx-0">
                <h1 class="ml-5 show-800 raleway-font text-light">About Me</h1>
                <div class="col-md mt-3">
                    <pre class="mr-3">
                        <p class="selfintro"></p>
                    </pre>
                    <pre class="ml-3" style="background-color: #2e2e2ef5">
                        <p class="whatido"></p>
                    </pre>
                    <pre class="mr-3">
                        <p class="currentage"></p>
                    </pre>
                </div>
                <div class="col-md remove-800">
                    <img src="images/profile-pic1.png" width="100%">
                </div>
            </div>
        </div>
    `
})
new Vue({el: "#home"});