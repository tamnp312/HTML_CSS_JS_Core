fetch("../../components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
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

fetch("../../components/about.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("about").innerHTML = data;

    const tabContentsWrapper = document.querySelector('.tab__contents');
    tabContentsWrapper.innerHTML = tabContentsData.map((text, index) => `
    <div class="tab__content-item ${index === 0 ? 'tab__content-item--active' : ''}">
      <p class="tab__content-desc">${text}</p>
      <a href="#!" class="tab__content-more">View more</a>
    </div>
  `).join('');

    const tabs = document.querySelectorAll(".tab__item");
    const tabContent = document.querySelectorAll(".tab__content-item");

    console.log("tabs", tabs);
    console.log("tabContent", tabContent);

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
