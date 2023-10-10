import { Person } from "./model/person";

export interface Places {
    country: string,
    state: string,
    city: string,
    zip: string,
    name: string,
    cep: string,
    date: number
}

export interface UserBasicInfo {
    // Basic info
    name: string[],          // List of possible names
    age: number[],           // List of possible ages
    email: string[],         // List of possible emails
    phone: string[],         // List of possible phones
    address: string[],        // List of possible addresses
}

export interface UserIDInfo {
    // Identifier info
    cpf: number | null,    // CPF
    rg: number | null,     // RG
    cnh: number | null,    // CNH
    cnpj: number | null,   // CNPJ
}

export interface UserAdvancedInfo {
    // Advanced info
    profission: string[],     // List of possible profissions
    company: string[],        // List of possible companies
}

/**
 * Scrappers should implement this interface
 */
export interface ScrapperInterface {
    get_by_name(name: string): Promise<Person>;
}

export abstract class ScrapperClass implements ScrapperInterface {
    public abstract get_by_name(name: string): Promise<Person>;
}