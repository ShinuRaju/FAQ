let h1 = document.querySelector(".container h1");
let container = document.querySelector(".container");

let chevronAddActiveFunction = (e) => {
  switch (e.target.tagName) {
    case "BUTTON":
      e.target.parentElement.classList.toggle("active");
      if (e.target.parentElement.classList.contains("active")) {
        e.target.innerHTML = `<i class="fas fa-times"></i>`;
      } else {
        e.target.innerHTML = `<i class="fas fa-chevron-down"></i>`;
      }
      break;

    default:
      break;
  }
};

async function fetchText() {
  try {
    let response = await fetch("./data.json");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

async function rend() {
  let qa = await fetchText();

  // let html = "";

  qa.forEach((eachqa) => {
    let divFaqBox = document.createElement("div");
    divFaqBox.classList.add("faq-box");

    divFaqBox.addEventListener("click", (e) => {
      chevronAddActiveFunction(e);
    });

    let h3FaqQuestions = document.createElement("h3");
    h3FaqQuestions.classList.add("faq-questions");
    h3FaqQuestions.textContent = `${eachqa.Question} ?`;

    let pFaqAnswers = document.createElement("p");
    pFaqAnswers.classList.add("faq-answers");
    pFaqAnswers.textContent = `${eachqa.Answer}`;

    let buttonChevron = document.createElement("button");
    buttonChevron.classList.add("chevron");
    buttonChevron.innerHTML = `<i class="fas fa-chevron-down"></i>`;

    // let buttonTimes = document.createElement("button");
    // buttonTimes.classList.add("times");
    // buttonTimes.innerHTML = ` <i class="fas fa-times"></i>`;

    divFaqBox.appendChild(h3FaqQuestions);
    divFaqBox.appendChild(pFaqAnswers);
    divFaqBox.appendChild(buttonChevron);
    // divFaqBox.appendChild(buttonTimes);

    container.appendChild(divFaqBox);

    // console.log(divFaqBox);

    // let htmlSegment = `
    // <div class="faq-box    ">
    // <h3 class="faq-questions "> ${eachqa.Question} ?</h3>
    //          <p class="faq-answers"> ${eachqa.Answer}</p>
    //          <button><i class="fas fa-chevron-down"></i> <i class="fas fa-times"></i></button>
    //          </div>
    //          `;
    // html += htmlSegment;
  });
}

rend();
