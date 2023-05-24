
$(document).ready(function () {
    let receivedData = generateData(8); // <== change this arg to adjust the number of cards generated. 
    let parsedData = parseAll(receivedData); // converts JSON into javascript objects (assuming received JSON)

    parsedData.forEach((entry, index) => {
        let cardTemplate = generateCardTemplate(entry.title, entry.details, entry.img, index);

        $("#js-card-content").append(cardTemplate);
    });

    update(parsedData);
});


/** Creates an arbitary (n) number of cards with randomly selected images.
 *  @param {number} number Number of cards to be generated
 *  @returns {Array} Generated array of JSONs.
 */
function generateData(number) {
    let createdData = [];

    for(let i = 0; i < number; i++) {
        let createdEntry = JSON.stringify({"title": `Title ${i}`, "details": `Lorem ipsum dolor sit amet consectetur adipisicing elit. ea corporis consequatur? Doloremque quae labore dolorem ${i}.`, "img":`${getRandomImg()}`}); 
        createdData.push(createdEntry);
    }

    return createdData;
}


/** Parses all JSONs inside an array, then returns a new array.
 * @param {Array} receivedData Received unparsed JSON array
 * @returns {Array} Created parsed javascript object array
 */
function parseAll(receivedData) {
    let parsedData = [];

    receivedData.forEach(entry => {
        parsedData.push(JSON.parse(entry));
    });

    return parsedData;
}


/** Creates an HTML template for the given card.
 * @param {string} title Card title
 * @param {string} details Card body text
 * @param {string} img Card image name
 * @param {number} index Index passed for data-index attribute creation purporses.
 * @returns {string} HTML card template
 */
function generateCardTemplate(title, details, img, index) {
    let template = `
    <div class="col-12 col-sm-8 col-lg-6 col-xl-3">
    <div class="card border-0 mb-4" data-index="${index}">
        <img src="./img/${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center text-blue fw-bold">${title}</h5>
          <p class="card-text text-center">${details}</p>
          <div class="card-details text-grey fs-6">
            <div class="row">
                <div class="col-6">
                    <i class="fa-regular fa-calendar fa-xs me-1"></i>
                    <span>Aug 5, 2013 </span>
                </div>
                
                <div class="col-6 text-end">
                    <i class="fa-regular fa-comments fa-xs me-1"></i>
                    <span>22 Comments</span>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    `;

    return template;
}


/** Returns a random image from the available images.
 * @returns {string} Image name
 */
function getRandomImg(){
    let randomNumber = getRndInteger(0, 12)  // Returns a random integer from 0 to 11
    let imgArray = ["beach", "beds", "boat", "boat2", "camels", "canyons", "couple", "pool", "port", "pyramids", "ruins", "sailship"];
    return imgArray[randomNumber].concat(".jpeg");
}


/** Returns a randomly generated number between min (included) and max (exluded)
 * @param {number} min Minimum number (included)
 * @param {number} max Maximum number (exluded)
 * @returns {number} A randomly generated number
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
