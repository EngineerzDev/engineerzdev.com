function changetheme() {
    var theme = document.querySelector("#theme");
    var themeswitch = document.getElementById("themeswitch");

    var logo = document.getElementById("logo");
    var mywork = document.getElementById("mywork")
    var git = document.getElementById("git");
    var stm = document.getElementById("stm");
    var dsc = document.getElementById("dsc");
    var leftBtn = document.getElementById("left");
    var rightBtn = document.getElementById("right");

    if (!themeswitch.checked) {
        theme.href = "index-dark.css"
        logo.src = "./res/engineerzdev.comlogocolor.svg"
        mywork.src = "./res/myworkcolor.svg"
        git.src = "./res/githubiconcolor.svg"
        stm.src = "./res/steamlogocolor.svg"
        dsc.src = "./res/discordlogocolor.svg"
        leftBtn.style.background = "url(./res/chevron-left-color.svg)"
        rightBtn.style.background = "url(./res/chevron-right-color.svg)"
    }
    else {
        theme.href = "index-light.css"
        logo.src = "./res/engineerzdev.comlogo.svg"
        mywork.src = "./res/mywork.svg"
        git.src = "./res/githubicon.svg"
        stm.src = "./res/steamlogo.svg"
        dsc.src = "./res/discordlogo.svg"
        leftBtn.style.background = "url(./res/chevron-left.svg)"
        rightBtn.style.background = "url(./res/chevron-right.svg)"
    }
}
