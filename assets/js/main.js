fetch("../../components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        navLinks.forEach((link) => link.classList.remove("nav__link--active"));
        link.classList.add("nav__link--active");
      });
    });
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("../../components/hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("hero").innerHTML = data;
  })
  .catch((error) => console.error("Error loading hero:", error));

const tabContentsData = [
  "While you're on holiday, here's where your furry friends will spend their time 1.",
  "While you're on holiday, here's where your furry friends will spend their time 2.",
  "While you're on holiday, here's where your furry friends will spend their time 3.",
];

const checkListData = [
  "Certified Groomer",
  "Animal Lover",
  "14+ Years Experience",
  "Pet Parent Of 3 Dogs",
];

fetch("../../components/about.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("about").innerHTML = data;

    const aboutCheckList = document.querySelector(".about__checklist");
    aboutCheckList.innerHTML = checkListData
      .map(
        (text) => `
      <span class="about__check-item"> ${text} </span>`
      )
      .join("");

    const tabContentsWrapper = document.querySelector(".tab__contents");
    tabContentsWrapper.innerHTML = tabContentsData
      .map(
        (text, index) => `
    <div class="tab__content-item ${
      index === 0 ? "tab__content-item--active" : ""
    }">
      <p class="tab__content-desc">${text}</p>
      <a href="#!" class="tab__content-more">View more</a>
    </div>
  `
      )
      .join("");

    const tabs = document.querySelectorAll(".tab__item");
    const tabContent = document.querySelectorAll(".tab__content-item");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("tab__item--active"));
        tabContent.forEach((c) =>
          c.classList.remove("tab__content-item--active")
        );

        tab.classList.add("tab__item--active");
        tabContent[index].classList.add("tab__content-item--active");
      });
    });
  })
  .catch((error) => console.error("Error loading about:", error));

// Services

const serviceItemsData = [
  {
    title: "Puppy Sitting",
    description:
      "Helping your new pup to be a good boy or girl isn't always easy, but we're here to help.",
    link: "#!",
  },
  {
    title: "Dog Walking",
    description:
      "Choose from a 30, 45, or 60-minute visit to give your pet their daily dose of fun-filled exercise.",
    link: "#!",
  },
  {
    title: "Pet Sitting",
    description:
      "While you're away we can make sure your pet has all the food, water, exercise, and care they need.",
    link: "#!",
  },
  {
    title: "Overnight Care",
    description:
      "If you're away for the night, we can stay the night or stop by in the evening and morning.",
    link: "#!",
  },
  {
    title: "Pet Taxi",
    description:
      "Does your pet need a lift to the groomers, vet, or dog park? We've got their tail covered.",

    link: "#!",
  },
  {
    title: "Pet Medical Admin",
    description:
      "Our team of experienced professionals can help with everything from pills to injections.",
    link: "#!",
  },
];

fetch("../../components/services.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("services").innerHTML = data;

    const serviceItemsWrapper1 = document.querySelector(".service__column1");
    serviceItemsWrapper1.innerHTML = serviceItemsData.slice(0, 3).map((item) => {
      return ` 
       <article class="service__item"> 
        <h3 class="service__item--heading">${item.title}</h3>
        <p class="service__item--desc">${item.description}</p>
        <a href="${item.link}" class="service__item--more">Read more</a>
       </article>
      `;
    }).join('');

    const serviceItemsWrapper2 = document.querySelector(".service__column2");
    serviceItemsWrapper2.innerHTML = serviceItemsData.slice(3).map((item) => {
      return ` 
       <article class="service__item"> 
        <h3 class="service__item--heading">${item.title}</h3>
        <p class="service__item--desc">${item.description}</p>
        <a href="${item.link}" class="service__item--more">Read more</a>
       </article>
      `;
    }).join('');
  })
  .catch((error) => {
    console.error("Error loading services:", error);
  });


  // staff 
  const staffData = [
    {
      id: 1,
      imgSrc: "./assets/img/staff01.png",
      title: "Pet Trainer",
      name: "Meghan Samit"
    },
    {
      id: 2,
      imgSrc: "./assets/img/staff02.png",
      title: "Veterinarian",
      name: "Alissa Silva"
    },
    {
      id: 3,
      imgSrc: "./assets/img/staff03.png",
      title: "Veterinarian",
      name: "Cindy Harris"
    },
    {
      id: 4,
      imgSrc: "./assets/img/staff04.png",
      title: "Animal Caretaker",
      name: "Lucas Tony"
    }
  ];
  fetch("../../components/staff.html")
    .then( response => response.text())
    .then (data => {
      document.getElementById("staff").innerHTML = data; 

      const staffListList = document.querySelector(".staff__list");
      staffListList.innerHTML = staffData.map( (staff) => {
        return `
        <article class = staff__item> 
          <figure class ="staff__item--img">
            <img src="${staff.imgSrc}" alt="${staff.name}" class="staff__img">
          </figure>
          <p class = "staff__item--title">${staff.title}</p>
          <h3 class = "staff__item--name" >${staff.name}</h3>
        </article>`
      }).join("");
    })
    .catch(error => {
      console.error("Error loading staff:", error);
    });
