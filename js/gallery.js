let btnlike = document.getElementById('like1');
let btnclose = document.getElementById('close');

btnlike.addEventListener('click', opensidebar);
btnclose.addEventListener('click',closeSideBar);
function opensidebar(event) {


    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("sidebar").style.display = "block";

    





}

function closeSideBar() {

    document.getElementById("sidebar").style.width = "0px";
}
