const setElements = (content) => {
    document.getElementById("title").innerHTML = content.header;
    document.getElementById("legend").innerHTML = content.legend;
    document.getElementById("moments").innerHTML = content.moments;
    document.getElementById("title1").innerHTML = content.titles[0];
    document.getElementById("title2").innerHTML = content.titles[1];
    document.getElementById("title3").innerHTML = content.titles[2];
    document.getElementById("title4").innerHTML = content.titles[3];
    document.getElementById("title5").innerHTML = content.titles[4];
    document.getElementById("title6").innerHTML = content.titles[5];
    document.getElementById("title7").innerHTML = content.titles[6];
    document.getElementById("title8").innerHTML = content.titles[7];
    document.getElementById("title9").innerHTML = content.titles[8];
    document.getElementById("title10").innerHTML = content.titles[9];
    document.getElementById("btn1").innerHTML = content.buttons[0];
    document.getElementById("description1").innerHTML = content.descriptions[0];
    document.getElementById("description2").innerHTML = content.descriptions[1];
    document.getElementById("description3").innerHTML = content.descriptions[2];
    document.getElementById("description4").innerHTML = content.descriptions[3];
    document.getElementById("description5").innerHTML = content.descriptions[4];
    document.getElementById("description6").innerHTML = content.descriptions[5];
    document.getElementById("description7").innerHTML = content.descriptions[6];
    document.getElementById("description8").innerHTML = content.descriptions[7];
    document.getElementById("feature1").innerHTML = content.features[0];
    document.getElementById("feature2").innerHTML = content.features[1];
    document.getElementById("feature3").innerHTML = content.features[2];
    document.getElementById("ask").innerHTML = content.form;
    document.getElementById("question1").innerHTML = content.questions[0];
    document.getElementById("question2").innerHTML = content.questions[1];
    document.getElementById("advantages-1").innerHTML = content.advantages[0];
    document.getElementById("advantages-2").innerHTML = content.advantages[1];
    document.getElementById("advantages-3").innerHTML = content.advantages[2];
    document.getElementById("call").innerHTML = content.callAction[0];
    document.getElementById("action").innerHTML = content.callAction[1];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cuboDevs2024", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("cuboDevs2024", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cuboDevs2024", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cuboDevs2024", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cuboDevs2024", "en", (content) => {
        setElements(content);
    });
});