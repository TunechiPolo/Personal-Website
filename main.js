const hoverOverHome = document.getElementById('m');
const hoverOverAbout = document.getElementById('a');
const hoverOverExperience = document.getElementById('e');
// const hoverOverExperience = document.getElementsByClassName('e');
const hoverOverProjects = document.getElementById('p');
const hoverOverContact = document.getElementById('c');

// The below .onmouseover & .onmouseleave functions apply the "Grow" CSS effect to the navigation bar:
hoverOverHome.onmouseover = () => {
    hoverOverHome.style.transform = "scale(1.3)";
}
hoverOverHome.onmouseleave = () => {
    hoverOverHome.style.transform = "scale(1.0)";
}
hoverOverAbout.onmouseover = () => {
    hoverOverAbout.style.transform = "scale(1.3)";
}
hoverOverAbout.onmouseleave = () => {
    hoverOverAbout.style.transform = "scale(1.0)";
}
hoverOverExperience.onmouseover = () => {
    hoverOverExperience.style.transform = "scale(1.3)";
}
hoverOverExperience.onmouseleave = () => {
    hoverOverExperience.style.transform = "scale(1.0)";
}
hoverOverProjects.onmouseover = () => {
    hoverOverProjects.style.transform = "scale(1.3)";
}
hoverOverProjects.onmouseleave = () => {
    hoverOverProjects.style.transform = "scale(1.0)";
}
hoverOverContact.onmouseover = () => {
    hoverOverContact.style.transform = "scale(1.3)";
}
hoverOverContact.onmouseleave = () => {
    hoverOverContact.style.transform = "scale(1.0)";
}

