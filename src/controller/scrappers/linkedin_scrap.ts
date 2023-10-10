import { Person } from "../../model/person";
import { ScrapperClass, ScrapperInterface } from "../../publicInterfaces";
import got from "got";

export abstract class LinkedInScrapper extends ScrapperClass {
    static get_by_name(name: string): Promise<Person> {
        return new Promise<Person>(async (resolve, reject) => {
            try {
                const first_name: string = name.split(" ")[0];
                const last_name: string = name.split(" ")[1];
                const base_url: string = `https://www.linkedin.com/pub/dir?firstName=${first_name}&lastName=${last_name}&trk=people-guest_people-search-bar_search-submit`;

                // got options
                const options = {
                    headers: {
                        'user-agent': 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0'
                    }
                };

                // Use got for getting the page
                const response = await got(base_url, options);

                console.log(response.body);
                


            } catch (error: any) {
                console.log("Error on LinkedInScrapper.get_by_name(): " + error);
                return reject(error);
            }
        });
    }
}