Vue.component('contact-form', {
    data() {
        return {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        };
      },
    methods:{
        sendEmail(e) {
            const btn = document.getElementById('button');
            btn.value = 'Sending...';
            emailjs.sendForm('default_service', 'template_uvinz95', e.target, 'user_1wflK7WkbyVGouoePZaLU', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                message: this.meessage
            }).then(res => {
                setTimeout(() => {  
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        text: 'Message successfully sent!',
                        icon: 'success',
                        showConfirmButton: false,
                        showCloseButton: true,
                        timerProgressBar: true,
                        timer: 5000
                    });
                    // Reset form field
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                    btn.value = 'Send';
                }, 1000);
            }).catch(err => {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    text: JSON.stringify(err.text),
                    icon: 'error',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timerProgressBar: true,
                    timer: 5000
                });
                btn.value = 'Send';
            })
        },
    },
    template: `
    <div class="fade-in">
        <link rel="stylesheet" href="/css/login-form.css">
        <main class="main">
        <div class="form-container">
            <section class="wrapper">
                <div>
                    <h1 class="text text-large text-theme text-center m-0">Contact Me</h1>
                </div>
                <form class="form p-3 m-0" id="form" @submit.prevent="sendEmail">
                    <div class="row input-control">
                        <input class="col-md m-2" placeholder="First name" name="firstName" id="firstName" required v-model="firstName">
                        <input class="col-md m-2" placeholder="Last name" name="lastName" id="lastName" required v-model="lastName">
                    </div>
                    <div class="row input-control">
                        <input class="col-md m-2" placeholder="Email" name="email" id="email" required v-model="email">
                        <input class="col-md m-2" placeholder="Phone" name="phone" id="phone" required v-model="phone">
                    </div>
                    <div class="input-control row">
                        <textarea placeholder="Your message" rows="3" name="message" id="message" minlength="15" class="m-2" v-model="message"></textarea>
                    </div>
                    <div class="input-control row">
                        <input class="input-submit m-2" type="submit" id="button" value="Send">
                    </div>
                </form>
            </section>
        </div>
    </main>
    </div>
    `
});
new Vue({el: "#contact-us"});