import elementData from './PeriodicTableJSON.json'

export type PeriodicElementData = {
    number: number;
    name: string;
    symbol: string;
    category: string;
    atomic_mass: number;
    summary: string;
}

interface ElementsList {
    [key: number]: PeriodicElementData;
} 

let elementsList: ElementsList = {}

elementData["elements"].forEach(element => {
    elementsList[element["number"]] = element;
});

export default elementsList;