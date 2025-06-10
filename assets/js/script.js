$(document).ready(function () {
    // Toggle responsive navbar menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Close menu on scroll or load
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    // Smooth scroll to section
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Load skills and projects
    fetchData().then(showSkills);
    fetchData("projects").then(showProjects);
});

// Fetch data from JSON
async function fetchData(type = "skills") {
    const response = await fetch(type === "skills" ? "skills.json" : "./projects/projects.json");
    return await response.json();
}

// Render skills
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>
    `).join('');
}

// Render projects
function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    projectsContainer.innerHTML = projects.slice(0, 10).filter(p => p.category !== "android").map(project => `
        <div class="box">
            <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="${project.name}" />
            <div class="content">
                <div class="tag"><h3>${project.name}</h3></div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

var typed = new Typed(".typing-text", {
  strings: [
    "MUAS FARHANDA FRISKI"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 500,
});
