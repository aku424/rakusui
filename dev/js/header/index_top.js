export default class indexHeader {
    constructor() {
        this.btn = document.querySelector(".js-hum");
        this.header = document.querySelector(".header");
        this.open = "header-open";
        this.scroll = "header-scroll";
        this.offsetTop = 0

    }

    init() {
        this.btn.addEventListener("click", this.toggleClass.bind(this));
        window.addEventListener("scroll", this.headerScroll.bind(this));
    }

    toggleClass() {
        if (this.header.classList.contains(this.open)) {
            this.header.classList.remove(this.open);
        }else {
            this.header.classList.add(this.open);
        }
    }

    headerScroll() {
        console.log(window.pageYOffset);
        if (this.offsetTop == window.pageYOffset) {
            this.header.classList.remove(this.scroll);
        }else {
            this.header.classList.add(this.scroll);
        }
    }
}

