import { LinkedInScrapper } from "./controller/scrappers/linkedin_scrap";

main();
async function main() {
    var aa = await LinkedInScrapper.get_by_name("Gabriel");
}