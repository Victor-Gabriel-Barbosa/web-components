class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anônimo");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url") || "#";

        const contentNews = document.createElement("p");
        contentNews.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(contentNews);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const imageNews = document.createElement("img");
        imageNews.src = this.getAttribute("img-url") || "assets/default.jpg";
        imageNews.alt = this.getAttribute("img-alt") || "Imagem da notícia";

        cardRight.appendChild(imageNews);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const styles = document.createElement("style");
        styles.textContent = `
            :host {
                display: flex;
                justify-content: center;
                width: 100%;
                margin-bottom: 20px;
            }

            .card {
                width: 80%;
                height: 200px;
                -webkit-box-shadow: 14px -1px 32px 0px rgba(0, 0, 0, 0.72);
                box-shadow: 14px -1px 32px 0px rgba(0, 0, 0, 0.72);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                overflow: hidden;
                border-radius: 15px;
                margin-bottom: 35px
            }

            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 15px;
                width: 65%;
                box-sizing: border-box;
            }

            .card_left > a {
                margin-top: 10px;
                font-size: 22px;
                font-weight: 600;
                color: #ff5e00;
                text-decoration: none;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .card_left > p {
                color: #6c757d;
                margin-top: 8px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .card_left > span {
                font-weight: 400;
                font-size: 14px;
                color: black;
            }

            .card_right {
                width: 35%;
                height: 100%;
            }

            .card_right > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        `;
        return styles;
    }
}

customElements.define("card-news", CardNews);