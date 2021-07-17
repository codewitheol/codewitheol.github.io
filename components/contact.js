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
            axios.post('https://api.mailgun.net/v3/sandbox79b3ca83a8674596b6fed7e0b65cf676.mailgun.org', {
                apiKey: 'e62043bdaac0bd780f8a204ac2c1c155-e31dc3cc-1dfe9691',
                data: {
                    from: '<pygameswitheol@gmail.com>',
                    to: '<eol.nuha22@gmail.com>',
                    subject: 'Hello',
                    text: 'Testing some Mailgun awesomness!'
            }
            }).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    },
    template: `
    <div>
        <link rel="stylesheet" href="/css/login-form.css">
        <main class="main">
        <div class="form-container">
            <section class="wrapper">
                <div class="heading">
                    <h1 class="text text-large text-theme">Contact Me</h1>
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
                        <textarea v-model="message" placeholder="Your message" rows="4"></textarea>
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