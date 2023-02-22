console.log("Nasa Mars Rover Gallery");

const curiosityRoverUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=RZg5JneChbPRQzBf2QvVSuhcjX6gip6WTElg9dey";
const opportunityRoverUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=RZg5JneChbPRQzBf2QvVSuhcjX6gip6WTElg9dey";
const spiritRoverUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=RZg5JneChbPRQzBf2QvVSuhcjX6gip6WTElg9dey";

const btnContainer = document.querySelector(".btn-container");

const roversContainer = document.getElementById("rovers");
console.log(roversContainer);
const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);
const curiosityRoverSelect = roversContainer[0];
const opportunityRoverSelect = roversContainer[1];
const spiritRoverSelect = roversContainer[2];
console.log(curiosityRoverSelect, opportunityRoverSelect, spiritRoverSelect);

// new fetch syntax

// async function getRoverDataCuriosity() {
//   const response = await fetch(curiosityRoverUrl);
//   const data = await response.json();
//   console.log(response, data);
// }
// getRoverDataCuriosity();

// promise syntax
const fetchCuriosityData = async function () {
  const response = await fetch(curiosityRoverUrl).catch((err) =>
    console.log(err)
  );
  console.log(response);
  if (response) {
    return response.json();
  }
  const data = await response.json();
  console.log(data);
  return response;
};

const fetchOpportunityData = async function () {
  const response = await fetch(opportunityRoverUrl).catch((err) =>
    console.log(err)
  );
  console.log(response);
  if (response) {
    return response.json();
  }
  const data = await response.json();
  console.log(data);
  return response;
};

const fetchSpiritData = async function () {
  const response = await fetch(spiritRoverUrl).catch((err) => console.log(err));
  console.log(response);
  if (response) {
    return response.json();
  }
  const data = await response.json();
  console.log(data);
  return response;
};

// DOM display functionality for the curiosity rover
async function displayCuriosityGallery() {
  const curiosityData = await fetchCuriosityData();
  // console.log(curiosityData);
  // console.log(curiosityData.photos);
  const curiosityDataPhotos = curiosityData.photos;
  console.log(curiosityDataPhotos);
  curiosityDataPhotos.map((item) => {
    const {
      id,
      camera: { full_name },
      img_src,
      earth_date,
      rover: { name, landing_date, launch_date, status },
    } = item;
    // console.log(
    //   id,
    //   full_name,
    //   img_src,
    //   name,
    //   landing_date,
    //   launch_date,
    //   status
    // );
    const article = document.createElement("article");
    const dataset = document.createAttribute("data-id");
    dataset.value = "curiosity";
    article.setAttributeNode(dataset);
    article.classList.add("photo-card");
    const roverCard = `<img
              src="${img_src}"
              alt="rover photo"
              class="card-image"
            />
            <div class="card-info">
              <h2>Rover Name: ${name}</h2>
              <h3>Camera: ${full_name}</h3>
              <h4>Landing date: ${landing_date}</h4>
              <h4>Launch Date: ${launch_date}</h4>
              <h4>Earth Date: ${earth_date}</h4>
              <h4>Status: ${status}</h4>
            </div>`;
    article.innerHTML = roverCard;
    mainContainer.appendChild(article);
    removeOpportunityDOM();
    removeSpiritDOM();
  });
}

async function displayOpportunityGallery() {
  const opportunityData = await fetchOpportunityData();
  // console.log(opportunityData);
  const opportunityDataPhotos = opportunityData.photos;
  // console.log(opportunityDataPhotos);
  opportunityDataPhotos.map(function (item) {
    const {
      id,
      camera: { full_name },
      img_src,
      earth_date,
      rover: { name, landing_date, launch_date, status },
    } = item;
    // console.log(
    //   id,
    //   full_name,
    //   img_src,
    //   earth_date,
    //   name,
    //   landing_date,
    //   launch_date,
    //   status
    // );
    const article = document.createElement("article");
    const dataset = document.createAttribute("data-id");
    dataset.value = "opportunity";
    article.setAttributeNode(dataset);
    article.classList.add("photo-card");
    const roverCard = `<img
              src="${img_src}"
              alt="rover photo"
              class="card-image"
            />
            <div class="card-info">
              <h2>Rover Name: ${name}</h2>
              <h3>Camera: ${full_name}</h3>
              <h4>Landing date: ${landing_date}</h4>
              <h4>Launch Date: ${launch_date}</h4>
              <h4>Earth Date: ${earth_date}</h4>
              <h4>Status: ${status}</h4>
            </div>`;
    article.innerHTML = roverCard;
    mainContainer.appendChild(article);
    removeCuriosityDOM();
    removeSpiritDOM();
  });
}

async function displaySpiritGallery() {
  const spiritData = await fetchSpiritData();
  // console.log(spiritData);
  const spiritDataPhotos = spiritData.photos;
  // console.log(spiritDataPhotos);
  spiritDataPhotos.map(function (item) {
    const {
      id,
      camera: { full_name },
      img_src,
      earth_date,
      rover: { name, landing_date, launch_date, status },
    } = item;
    // console.log(
    //   id,
    //   full_name,
    //   img_src,
    //   earth_date,
    //   name,
    //   landing_date,
    //   launch_date,
    //   status
    // );
    const article = document.createElement("article");
    const dataset = document.createAttribute("data-id");
    dataset.value = "spirit";
    article.setAttributeNode(dataset);
    article.classList.add("photo-card");
    const roverCard = `<img
              src="${img_src}"
              alt="rover photo"
              class="card-image"
            />
            <div class="card-info">
              <h2>Rover Name: ${name}</h2>
              <h3>Camera: ${full_name}</h3>
              <h4>Landing date: ${landing_date}</h4>
              <h4>Launch Date: ${launch_date}</h4>
              <h4>Earth Date: ${earth_date}</h4>
              <h4>Status: ${status}</h4>
            </div>`;
    article.innerHTML = roverCard;
    mainContainer.appendChild(article);
    removeCuriosityDOM();
    removeOpportunityDOM();
  });
}

// Dropdown selection functionality for the preferred mars rover
roversContainer.addEventListener("change", function () {
  if (roversContainer.selectedIndex === 0) {
    // displayCuriosityGallery();
    curiosityDisplayPages();
    btnContainer.classList.remove("hide");
    // removeOpportunityDOM();
    // removeSpiritDOM();
  }
  if (roversContainer.selectedIndex === 1) {
    displayOpportunityGallery();
    btnContainer.classList.add("hide");
    // removeCuriosityDOM();
    // removeSpiritDOM();
  }
  if (roversContainer.selectedIndex === 2) {
    displaySpiritGallery();
    btnContainer.classList.add("hide");
    // removeCuriosityDOM();
    // removeOpportunityDOM();
  }
});

// remove extra DOM elements
function removeCuriosityDOM() {
  const curiosityDataset = document.querySelectorAll("[data-id='curiosity']");
  if (curiosityDataset) {
    // console.log(curiosityDataset);
    curiosityDataset.forEach((item) => {
      // console.log(item);
      item.remove();
      // console.log(item.parentElement);
    });
  }
}

function removeOpportunityDOM() {
  const opportunityDataset = document.querySelectorAll(
    "[data-id='opportunity']"
  );
  if (opportunityDataset) {
    opportunityDataset.forEach((item) => {
      item.remove();
    });
  }
}

function removeSpiritDOM() {
  const spiritDataset = document.querySelectorAll("[data-id='spirit']");
  if (spiritDataset) {
    spiritDataset.forEach((item) => {
      item.remove();
    });
  }
}

// pagination functionality
function pagination(items) {
  const itemsPerPage = 20;
  // round up
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  console.log(numberOfPages);
  const newItems = Array.from({ length: numberOfPages }, function (_, index) {
    const start = index * itemsPerPage;
    // starting point from 0 to 20
    return items.slice(start, start + itemsPerPage);
  });
  // console.log(newItems);
  return newItems;
}

let index = 0;
async function curiosityDisplayPages() {
  const curiosityData = await fetchCuriosityData();
  const curiosityDataPhotos = curiosityData.photos;
  let pages = pagination(curiosityDataPhotos)[index];
  // console.log(pages);
  // console.log(pages.length);
  // if (index > pages.length - 1) {
  //   index = 0;
  // }
  displayBtns(btnContainer, pages, index);
  pages.map(function (item) {
    const {
      id,
      camera: { full_name },
      img_src,
      earth_date,
      rover: { name, landing_date, launch_date, status },
    } = item;
    const article = document.createElement("article");
    const dataset = document.createAttribute("data-id");
    dataset.value = "curiosity";
    article.setAttributeNode(dataset);
    article.classList.add("photo-card");
    const roverCard = `<img
                src="${img_src}"
                alt="rover photo"
                class="card-image"
              />
              <div class="card-info">
                <h2>Rover Name: ${name}</h2>
                <h3>Camera: ${full_name}</h3>
                <h4>Landing date: ${landing_date}</h4>
                <h4>Launch Date: ${launch_date}</h4>
                <h4>Earth Date: ${earth_date}</h4>
                <h4>Status: ${status}</h4>
              </div>`;
    article.innerHTML = roverCard;
    mainContainer.appendChild(article);
  });
  removeOpportunityDOM();
  removeSpiritDOM();
}
// curiosityDisplayPages();
// display buttons in the DOM
function displayBtns(container, pages, activeIndex) {
  let btns = pages.map(function (_, pageIndex) {
    return `<button class="num-btn ${
      activeIndex === pageIndex ? "active-btn" : "null"
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">Next</button>`);
  btns.unshift(`<button class="prev-btn">Previous</button>`);
  container.innerHTML = btns.join("");
}

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("num-btn")) {
    console.log(e.target.dataset.index);
    index = parseInt(e.target.dataset.index);
    console.log(e.target.parentElement.previousElementSibling.children);
    const containerChildren = [
      ...e.target.parentElement.previousElementSibling.children,
    ];
    // console.log(containerChildren);
    containerChildren.forEach(function (item) {
      item.remove();
    });
    curiosityDisplayPages();
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    // console.log("next button");
    // console.log(index);
    if (index > 19) {
      index = 0;
    }
    const containerChildren = [
      ...e.target.parentElement.previousElementSibling.children,
    ];
    containerChildren.forEach(function (item) {
      item.remove();
    });
    curiosityDisplayPages();
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = 19;
    }
    const containerChildren = [
      ...e.target.parentElement.previousElementSibling.children,
    ];
    containerChildren.forEach(function (item) {
      item.remove();
    });
    curiosityDisplayPages();
    console.log(index);
    console.log("prev button");
  }
});

console.log(index);
// initialize as soon as the HTML document is parsed
window.addEventListener("DOMContentLoaded", function () {
  curiosityDisplayPages();
  // displayCuriosityGallery();
});
