export default class loadingFunc {
    constructor() {
        this.target = document.querySelector(".loading");
        this.mv = document.querySelector(".mv");
    }

    init() {
        if (this.target == null) {
            return
        }

        this.heightSet();
        window.setTimeout(this.loadingNone, 5500);
    }

    heightSet() {
        this.mvHeight = this.mv.clientHeight
        this.target.style.height = this.mvHeigh + "px";
        this.target.style.height = `calc(${this.mvHeight}px - 155px)`;
    }

    loadingNone() {
        document.querySelector(".loading").remove();
        this.target.remove();
    }
}
