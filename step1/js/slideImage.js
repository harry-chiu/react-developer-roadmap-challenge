const data = [
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

setSlideImage = (index) => {
    let slideImage = document.querySelector("#slide-image");
    let slideTitle = document.querySelector("#slide-title");
    let slideDescription = document.querySelector("#slide-description");

    slideImage.style.backgroundImage = `url(${data[index].imageUrl})`;
    slideTitle.innerText = data[index].title;
    slideDescription.innerText = data[index].description;
};

initialSetting = () => {
    setSlideImage(0);
};

infiniteSlideImage = () => {
    let counter = 1;

    initialSetting();
    setInterval(() => {
        setSlideImage(counter);

        counter++;

        if (counter > 2) {
            counter = 0;
        };
    }, 3000)
};

infiniteSlideImage();