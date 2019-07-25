export interface CountryDetails {
    flag: string;
    name: string;
    nativeName: string;
    alpha3Code: string;
    capital: string;
    region: string;
    subregion: string;
    numericCode: number;
    population: number;
    borders: string[];
    callingCodes: number[];
    currencies: object[][];
    languages: object[][];
    latlng: number[];
}
