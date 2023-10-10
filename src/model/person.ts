import { Places, UserAdvancedInfo, UserBasicInfo, UserIDInfo } from "../publicInterfaces";

// person class
export class Person implements UserBasicInfo, UserIDInfo, UserAdvancedInfo{
    // Identifier info
    public cpf: number | null = null;    // CPF
    public rg: number | null = null;     // RG
    public cnh: number | null = null;    // CNH
    public cnpj: number | null = null;   // CNPJ

    // Basic info
    public name: string[] = [];
    public age: number[] = [];
    public email: string[] = [];
    public phone: string[] = [];
    public address: string[] = [];

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