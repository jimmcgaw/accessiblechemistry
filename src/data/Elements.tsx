import elementData from './PeriodicTableJSON.json'

type PeriodicElementData = {
    number: number;
    name: string;
    symbol: string;
}

interface ElementsList {
    [key: number]: PeriodicElementData;
} 

let elementsList: ElementsList = {}

elementData["elements"].forEach(element => {
    elementsList[element["number"]] = element;
});

export default elementsList;