Vue.component('contact-form', {
    data() {
        return {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        };
    },
    methods:{
        send() {
            alert('message sent')
          }
    },
    template: `
    <div class="fade-in">
        <link rel="stylesheet" href="/css/login-form.css">
        <main class="main">
        <div class="form-container">
            <section class="wrapper">
                <div>
                    <h1 class="text text-large text-theme text-center">Contact Me</h1>
                </div>
                <div name="login" class="form">
                    <div class="input-control remove-800">
                        <input v-model="firstName" placeholder="First name">
                        <input v-model="lastName" placeholder="Last name">
                    </div>
                    <div class="input-control remove-800">
                        <input v-model="email" placeholder="Email">
                        <input v-model="phone" placeholder="Phone">
                    </div>
                    <div class="input-control show-800">
                        <input v-model="firstName" placeholder="First name">
                    </div>
                    <div class="input-control show-800">
                        <input v-model="lastName" placeholder="Last name">
                    </div>
                    <div class="input-control show-800">
                        <input v-model="email" placeholder="Email">
                    </div>
                    <div class="input-control show-800">
                        <input v-model="phone" placeholder="Phone">
                    </div>
                    <div class="input-control">
                        <textarea v-model="message" placeholder="Your message" rows="3"></textarea>
                    </div>
                    <div class="input-control">
                        <button class="input-submit" @click="send()">Send</button>
                    </div>
                </div>
            </section>
        </div>
    </main>
    </div>
    `
});
new Vue({el: "#contact-us"});