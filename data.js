var data = {
    info: {
        name: "Andjela",
        surname: "Stanojevic",
        adress: {
            country: "Serbia",
            city: "Lapovo",
            street: "Radnicka",
            number: 19,
        },
        phone: "-",
        img: "image.jpg",
    },
    profile: {
        description: "I'm a Software Engineering student with great ambition looking for practice and gaining work experience in the IT profession. My current center of interest is front end development.I 'm willing to learn about new technologies and trying to improve my knowledge.I 'm an open-minded person who likes spending time with friends and researching about new trend in the field of IT technologies. I have a strong drive to achieve the best results against internal and external standards of excellence. I 'm very active and communicative so I enjoy working on everything that inspires me.I aspire to work in team in the dynamic environments with challenges that can motivate me to give my best.Creativity, responsibility, dilligence are something I could contribute to the team I work for ",
    },
    education: [{
            title: " Faculty of Engineering",
            desc: " Computer Science and Software Engineering",
            time: {
                from: {
                    year: 2019,
                },
            },
        },
        {
            title: " Code by Comtrade",
            desc: " Front-End Development",
            time: {
                from: {
                    month: 5,
                    year: 2022,
                },
            },
        },
        {
            title: ' Medical School "Sestre Ninkovic" ',
            desc: " Pharmacy tehnician",
            time: {
                from: {
                    month: 10,
                    year: 2015,
                },
                to: {
                    month: 6,
                    year: 2019,
                },
            },
        },
    ],
    projects: [{
            title: " Airport app",
            desc: " The task was to create an application that provides online operation for flights. The language we used is Java, and the database we used was created in SQL",
            time: {
                year: 2022,
            },
        },
        {
            title: " Pharmacy database",
            desc: " This project task will explain the development of the database of the information system for the management of the pharmacy-sale of non-drugs in order to improve their work and services. In our database, we decided to store information important for each pharmacy, orders, as well as information about employees, suppliers, customers, medical equipment, cosmetics...",
            time: {
                year: 2022,
            },
        },
        {
            title: " Taxi-V3 Machine Learning",
            desc: " In this game we trained the computer to play TAXI-V3 game",
            time: {
                year: 2022,
            },
        },
    ],
    skills: [{
            title: "Html",
            perc: 90,
        },
        {
            title: "CSS",
            perc: 90,
        },
        {
            title: "SCSS",
            perc: 80,
        },
        {
            title: "Bootstrap",
            perc: 80,
        },
        {
            title: "JavaScript",
            perc: 80,
        },
        {
            title: "React",
            perc: 70,
        },
        {
            title: "SQL",
            perc: 70,
        },
        {
            title: "Java",
            perc: 60,
        },
        {
            title: "Python",
            perc: 70,
        },
        {
            title: "C++",
            perc: 60,
        },
        {
            title: "PHP",
            perc: 70,
        },
        {
            title: "GAMS",
            perc: 80,
        },
        {
            title: "Microsoft Office",
            perc: 80,
        },
        {
            title: "Assembly",
            perc: 70,
        },
    ],
    languages: [{
        title: "Serbian",
        perc: 100,
    }, {
        title: "English",
        perc: 85,
    }],
    social: [
        { title: "Team player" },
        { title: "Communicative" },
        { title: "Responsible" },
        { title: "Creative" },
        { title: "Curious" },
        { title: "Calm" },
        { title: "Dilligent" },
        { title: "Rational" },
        { title: "Friendly" },
    ],
};

function renderInfo({ name, surname, adress, phone, img }) {


    var div = document.createElement("div");
    div.innerHTML = `<span><i class="fas fa-home"></i> ${adress.street} ${adress.number}</span><br />
    <span><i class="fas fa-flag"></i>${adress.city}, ${adress.country}</span><br />
    <span><i class="fas fa-mobile-alt"></i> ${phone}</span>`;
    var naslov = document.createElement("h1");
    naslov.textContent = name + " " + surname;
    var slika = document.createElement("img");
    slika.setAttribute("src", "images/" + img);
    slika.setAttribute("alt", name);
    slika.style.width = "300px"
    document.getElementById("info").append(slika, naslov, div);
}

function renderSection(data, targetSelector) {
    var element = document.querySelector(targetSelector);
    for (let i = 0; i < data.length; i++) {
        element.innerHTML += renderArtical(data[i]);
    }
}

function getStringFromTime(time) {
    let ispis = "";
    if (time.day) ispis += `${time.day}. `;
    if (time.month) ispis += `${time.month}. `;
    if (time.year) ispis += `${time.year}.`;

    return ispis;
}

function renderArtical({ title, desc, time }) {
    var timsIspis = `<div class="row article">
    <div class="col-3 time">`;

    if (!time.from) {
        timsIspis += getStringFromTime(time);
    } else {
        timsIspis += getStringFromTime(time.from);
        timsIspis += " - ";
        if (!time.to) {
            timsIspis += "present";
        } else {
            timsIspis += getStringFromTime(time.to);
        }
    }
    // console.log(timsIspis)

    timsIspis += `</div>`;

    timsIspis += `<div class="col-9 article-content">
    <h3>${title}</h3>
    <p>
${desc}
    </p> 
  </div> 
 </div>`;

    return timsIspis;
}

function renderSkils(skills) {
    for (let i = 0; i < skills.length; i++) {
        let skill = `
        <div class="col-lg-4 col-md-6 col-sm-12">
          ${skills[i].title}
          <div class="progress">
            <div class="progress-bar bg-primary" style="width:${skills[i].perc}%">
            ${skills[i].title}
            </div>
          </div>
        </div>`
        document.querySelector("#vestine .row").innerHTML += skill;
    }
}

function renderLanguages(languages) {
    for (let i = 0; i < languages.length; i++) {
        let language = `
        <div class="col-lg-4 col-md-6 col-sm-12">
          ${languages[i].title}
          <div class="progress">
            <div class="progress-bar bg-primary" style="width:${languages[i].perc}%">
            ${languages[i].title}
            </div>
          </div>
        </div>`
        document.querySelector("#jezik .row").innerHTML += language;
    }

}

function renderProfile(profile) {
    var opis = document.createElement("p");
    opis.textContent = profile.description;
    opis.style.margin = "0px 100px";
    document.getElementById("profile").append(opis);
}

function renderSocial(social) {
    for (let i = 0; i < social.length; i++) {
        let osobina = `<div class="col-lg-4 col-md-6 col-sm-12">${social[i].title}</div>`;
        document.querySelector("#social .row").innerHTML += osobina;
    }
}

function render(data) {
    renderInfo(data.info);
    renderProfile(data.profile);
    renderSection(data.education, "#education");
    renderSection(data.projects, "#projects");
    renderSkils(data.skills);
    renderLanguages(data.languages);
    renderSocial(data.social);
}

render(data);