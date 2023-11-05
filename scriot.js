function togglemenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

    function scrollToSkills() {
        const skillsSection = document.getElementById('experience'); // Replace 'experience' with the actual ID of your "Skills" section
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    }

