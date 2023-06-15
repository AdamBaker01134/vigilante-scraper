const kijiji = require("kijiji-scraper");
require("dotenv").config();

const location = process.env.LOCATION || "canada";  // if .env is not setup, search all of Canada
const category = process.env.CATEGORY || "all";     // if .env is not setup, search all categories
const search_query = process.env.SEARCHQ || "bike"; // if .env is not setup, search for a bike

let location_id, category_id;

switch (location.toLowerCase()) {
    case "all":
        location_id = kijiji.locations.id;
        break;
    case "british columbia":
    case "bc":
        location_id = kijiji.locations.BRITISH_COLUMBIA.id;
        break;
    case "alberta":
    case "ab":
        location_id = kijiji.locations.ALBERTA.id;
        break;
    case "saskatchewan":
    case "sk":
        location_id = kijiji.locations.SASKATCHEWAN.id;
        break;
    case "manitoba":
    case "mb":
        location_id = kijiji.locations.MANITOBA.id;
        break;
    case "ontario":
    case "on":
        location_id = kijiji.locations.ONTARIO.id;
        break;
    case "quebec":
    case "qc":
        location_id = kijiji.locations.QUEBEC.id;
        break;
    case "newfoundland":
    case "newfoundland and labrador":
    case "nl":
        location_id = kijiji.locations.NEWFOUNDLAND.id;
        break;
    case "new brunswick":
    case "nb":
        location_id = kijiji.locations.NEW_BRUNSWICK.id;
        break;
    case "nova scotia":
    case "ns":
        location_id = kijiji.locations.NOVA_SCOTIA.id;
        break;
    case "prince edward island":
    case "pei":
    case "pe":
        location_id = kijiji.locations.PRINCE_EDWARD_ISLAND.id;
        break;
    case "yukon":
    case "yt":
        location_id = kijiji.locations.TERRITORIES.YUKON.id;
        break;
    case "northwest territories":
    case "nwt":
    case "nt":
        location_id = kijiji.locations.TERRITORIES.NORTHWEST_TERRITORIES.id;
        break;
    case "nunavut":
    case "nu":
        location_id = kijiji.locations.TERRITORIES.NORTHWEST_TERRITORIES.id;
        break;
    default:
        throw new Error("Error: Could not parse location. Please enter a province or its corresponding abbreviation or 'all' to search all of Canada");
}

switch (category.toLowerCase()) {
    case "all":
        category_id = kijiji.categories.id;
        break;
    case "buy and sell":
        category_id = kijiji.categories.BUY_AND_SELL.id;
        break;
    case "cars and vehicles":
    case "cars":
    case "vehicles":
        category_id = kijiji.categories.CARS_AND_VEHICLES.id;
        break;
    case "community":
        category_id = kijiji.categories.COMMUNITY.id;
        break;
    case "jobs":
    case "job":
        category_id = kijiji.categories.JOBS.id;
        break;
    case "pets":
    case "pet":
        category_id = kijiji.categories.PETS.id;
        break;
    case "real estate":
        category_id = kijiji.categories.REAL_ESTATE.id;
        break;
    case "services":
    case "service":
        category_id = kijiji.categories.SERVICES.id;
        break;
    case "vacation rentals":
    case "vacation rental":
    case "vacation":
        category_id = kijiji.categories.VACATION_RENTALS;
        break;
    default:
        throw new Error("Error: Could not parse category. Please review general categories and try again.");
}

console.log(`
 _______ _______ _______  ______ _______ _     _ _____ __   _  ______                     
 |______ |______ |_____| |_____/ |       |_____|   |   | \\  | |  ____                     
 ______| |______ |     | |    \\_ |_____  |     | __|__ |  \\_| |_____|      .      .      .
                                                                                                                                                                                                                      
`);

const params = {
    locationId: location_id,
    categoryId: category_id,
    q: search_query,
    sortType: "DATE_DESCENDING",
};
const options = {};

kijiji.search(params, options).then(ads => {
    for (let i = 0; i < ads.length; i++) {
        console.log(ads[i].title);
        console.log(ads[i].url);
        console.log(ads[i].date + "\n");
        console.log("--------------------------------------------------------------------------\n");
    }
}).catch(err => console.error(err));