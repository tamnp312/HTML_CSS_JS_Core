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
    serviceItemsWrapper1.innerHTML = serviceItemsData
      .slice(0, 3)
      .map((item) => {
        return ` 
       <article class="service__item"> 
        <h3 class="service__item--heading">${item.title}</h3>
        <p class="service__item--desc">${item.description}</p>
        <a href="${item.link}" class="service__item--more">Read more</a>
       </article>
      `;
      })
      .join("");

    const serviceItemsWrapper2 = document.querySelector(".service__column2");
    serviceItemsWrapper2.innerHTML = serviceItemsData
      .slice(3)
      .map((item) => {
        return ` 
       <article class="service__item"> 
        <h3 class="service__item--heading">${item.title}</h3>
        <p class="service__item--desc">${item.description}</p>
        <a href="${item.link}" class="service__item--more">Read more</a>
       </article>
      `;
      })
      .join("");
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
    name: "Meghan Samit",
  },
  {
    id: 2,
    imgSrc: "./assets/img/staff02.png",
    title: "Veterinarian",
    name: "Alissa Silva",
  },
  {
    id: 3,
    imgSrc: "./assets/img/staff03.png",
    title: "Veterinarian",
    name: "Cindy Harris",
  },
  {
    id: 4,
    imgSrc: "./assets/img/staff04.png",
    title: "Animal Caretaker",
    name: "Lucas Tony",
  },
];
fetch("../../components/staff.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("staff").innerHTML = data;

    const staffListList = document.querySelector(".staff__list");
    staffListList.innerHTML = staffData
      .map((staff) => {
        return `
        <article class = staff__item> 
          <figure class ="staff__item--img">
            <img src="${staff.imgSrc}" alt="${staff.name}" class="staff__img">
          </figure>
          <p class = "staff__item--title">${staff.title}</p>
          <h3 class = "staff__item--name" >${staff.name}</h3>
        </article>`;
      })
      .join("");
  })
  .catch((error) => {
    console.error("Error loading staff:", error);
  });

// PPricing
const pricingData = [
  {
    type: "Basic",
    heading: "Day care",
    price: "$150",
    btnClass: "",
    features: [
      "Single room",
      "Socialist Exercise",
      "Custom Meals",
      "Spa and Grooming",
      "Exercise 2x",
      "Custom Meals",
      "Grooming 2x",
    ],
    active: true,
  },
  {
    type: "Exclusive",
    heading: "2X Care",
    price: "$199",
    btnClass: "btn--primary",
    features: [
      "Single room",
      "Socialist Exercise",
      "Custom Meals",
      "Spa and Grooming",
      "Exercise 2x",
      "Custom Meals",
      "Grooming 2x",
    ],
    active: false,
  },
  {
    type: "Platinum",
    heading: "4X Care",
    price: "$299",
    btnClass: "",
    features: [
      "Single room",
      "Socialist Exercise",
      "Custom Meals",
      "Spa and Grooming",
      "Exercise 2x",
      "Custom Meals",
      "Grooming 2x",
    ],
    active: false,
  },
];

fetch("../../components/pricing.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pricing").innerHTML = data;

    const pricingList = document.querySelector(".pricing__list");
    pricingList.innerHTML = pricingData
      .map((item) => {
        return `
      <article class= "pricing__item " >
        <p class ="pricing__item--type" > ${item.type}</p>
        <h3 class="pricing__item--heading">${item.heading}</h3>
        <p class="pricing__item--price">${item.price}</p>
        <button class="btn pricing__item--btn">Purchase Now</button>
         <ul class="pricing__item--list">
        ${item.features.map((feature) => `
          <li class="pricing__item--small">${feature}</li>`).join("")
        }
        </ul>
      </article>`;
      })
      .join("");
  });


  //  Review 
  const reviewsData = {
    sectionTitle: "Our Reviews",
    reviews: [
      {
        id: 1,
        image: "./assets/img/review-01.png",
        quote: "It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!",
        author: "Karla Deras"
      },
      {
        id: 2,
        image: "./assets/img/review-01.png",
        quote: "It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!",
        author: "Karla Deras"
      },
      {
        id: 3,
        image: "./assets/img/review-01.png",
        quote: "It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!",
        author: "Karla Deras"
      },
      {
        id: 4,
        image: "./assets/img/review-01.png",
        quote: "It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!",
        author: "Karla Deras"
      }
    ],
    activeDot: 1 // Indicates which review is currently active
  };
  fetch("../../components/review.html")
    .then((response) => response.text())
    .then((data) => { 
      document.getElementById("review").innerHTML = data;
      
      const reviewList = document.querySelector(".review__list");
      reviewList.innerHTML = reviewsData.reviews.map((review) => {  
        return `
          <article class="review__item">
            <figure class="review-item__media="${review.author}" class="review-item__img">
            </figure>
            <section class="review-item__content" >
            <h2 class="section__heading">Our Reviews </h2>
            <blockquote class="review-item__quote">${review.quote} </blockquote>
            <h3 class="review__item--author">${review.author}</h3>
            </section>
            
          </article>`;
      }
      ).join(""); 


    })
