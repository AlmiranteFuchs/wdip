import { Places } from "../publicInterfaces";

// person class
export class Person {
    // Basic info
    public name: string[] = [];          // List of possible names
    public age: number[] = [];           // List of possible ages
    public email: string[] = [];         // List of possible emails
    public phone: string[] = [];         // List of possible phones
    public address: string[] = [];        // List of possible addresses

    // TODO: Family info

    // Advanced info
    public profission: string[] = [];     // List of possible profissions
    public company: string[] = [];        // List of possible companies

    // Last seen info
    public visited_places: Places[] = [];  // List of possible visited places

    public profile_user(name: string | null, email: string | null, phone: string | null, address: string | null) {
        // TODO: Implement this
    }

}