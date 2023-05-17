window.onload = () => {
    const synth = window.speechSynthesis;
    let playground = document.getElementById("playground");
    playground.setAttribute("style", "margin-bottom: 5vh");

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = "Change Background";

    let colorPicker = document.createElement("input");
    colorPicker.setAttribute("type", "color");
    colorPicker.setAttribute("id", "color-picker");
    colorPicker.setAttribute("colorpick-eyedropper-active", "true");

    let title_color = document.createElement("h3");
    title_color.textContent = "Select background color";

    let tips = document.createElement("span");

    function createP() {
        return document.createElement("p");
    }

    let tips_string = document.createElement("p");
    tips_string.textContent = "Tips";
    let tip_highlight_text = document.createElement("p");
    tip_highlight_text.textContent = "Press \'h\' to highlight movie titles.";
    let tip_remove_tips = document.createElement("p");
    tip_remove_tips.textContent = "Press \'x\' to remove tips.";
    let tip_show_tips = document.createElement("p");
    tip_show_tips.textContent = "Press \'t\' to show tips.";

    playground.appendChild(title_color);
    playground.appendChild(colorPicker);
    playground.appendChild(button);
    playground.appendChild(tips);
    tips.appendChild(tips_string);
    tips.appendChild(tip_highlight_text);
    tips.appendChild(tip_remove_tips);

    let playgroundChildren = document.querySelectorAll(".playground>*:not(h3, p)");
    for (let elem of playgroundChildren) {
        elem.setAttribute("style", "margin-bottom: 5vh; display: block;");
    }
    button.addEventListener("click",
        () => {
            setTimeout(
                () => {
                    document.body.style.backgroundColor = colorPicker.value;
                },
                500
            );
        }
    );

    document.addEventListener("keydown", (e) => {
        let key = e.key;

        if (key === "h") {
            let titluri = document.getElementsByTagName("figcaption");
            for (let titlu of titluri) {
                titlu.setAttribute("style", "font-size:1.1vw;");
                setTimeout(() => {
                    titlu.setAttribute("style", "font-size:0.9vw;");
                }, 3000);
            }
        }
        if (key === "x") {
            tips.remove();
            playground.appendChild(tip_show_tips);
        }
        if (key === "t") {
            playground.appendChild(tips);
            playground.appendChild(tip_highlight_text);
            playground.appendChild(tip_remove_tips);
            playground.removeChild(tip_show_tips);
        }
    })
    let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];

    let animation = document.getElementsByClassName("animatie");
    if (localStorage.getItem("colorIndex")) {
        for (let anim of animation) {
            anim.backgroundColor = localStorage.getItem("anim_color");
        }
    } else {
        let index = Math.random();
        while (index >= colors.length) {
            index = Math.random();
        }

        for (let anim of animation) {
            let style = window.getComputedStyle(anim);
            localStorage.setItem("anim_color", colors[index]);
            anim.backgroundColor = colors[index];
        }
    }


}


