Vue.component('side-menu', {
    template: `
        <div>
            <ul>
                <li>
                    <a href="#" rel="home">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" rel="experiences">
                        <i class="fa fa-briefcase fa-2x"></i>
                        <span class="nav-text">
                            Experiences
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" rel="projects">
                        <i class="fa fa-tasks fa-2x"></i>
                        <span class="nav-text">
                            Projects
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" rel="skills">
                        <i class="fa fa-code fa-2x font-weight-bold"></i>
                        <span class="nav-text">
                            Skills
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" rel="contact-us">
                        <i class="fa fa-envelope fa-2x"></i>
                        <span class="nav-text">
                            Contact Me
                        </span>
                    </a>
                </li>
            </ul>
            <ul class="sidebar-expand show-800">
                <li>
                    <a>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </li>  
            </ul>
        </div>
    `
})
new Vue({el: "#side-menu"});