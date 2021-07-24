Vue.component('about-me', {
    template: `
        <div>
            <div class="pt-5 remove-800"></div>
            <h1 class="show-800" id="titleStyle">About me</h1>
            <div class="row mx-0">
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
                    <img src="images/profile-pic1.png" width="100%" alt="Portfolio | Eol Nuha">
                </div>
            </div>
        </div>
    `
})
new Vue({el: "#home"});