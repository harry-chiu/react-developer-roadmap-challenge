class SlideEffect {
    constructor() {
        this.index = 0;
        this.image = document.querySelector("#slide-image");
        this.title = document.querySelector("#slide-title");
        this.description = document.querySelector("#slide-description");
        this.data = [
            {
                title: "New York",
                description: "The atmosphere in New York is lorem ipsum.",
                imageUrl: "https://www.w3schools.com/w3images/la.jpg"
            },
            {
                title: "Los Angeles",
                description: "We had the best time playing at Venice Beach!",
                imageUrl: "https://www.w3schools.com/w3images/ny.jpg"
            },
            {
                title: "Chicago",
                description: "Thank you, Chicago - A night we won't forget.",
                imageUrl: "https://www.w3schools.com/w3images/chicago.jpg"
            }
        ];
    };

    setIndex = (index) => {
        this.index = index;
    };

    setImage = () => {
        this.image.style.backgroundImage = `url(${this.data[this.index].imageUrl})`;
    };

    setTitle = () => {
        this.title.innerText = this.data[this.index].title;
    };

    setDescription = () => {
        this.description.innerText = this.data[this.index].description;
    };

    render = () => {
        this.setImage();
        this.setTitle();
        this.setDescription();
    };

    loop = () => {
        let counter = 1;
        
        setInterval(() => {
            this.setIndex(counter);
            this.render();

            counter++;

            if (counter > 2) {
                counter = 0;
            };
        }, 3000)
    };
};

const slideEffect = new SlideEffect();
slideEffect.render();
slideEffect.loop();