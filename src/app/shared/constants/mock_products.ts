export interface Product{
    id: string,
    name: string,
    price: number,
    description: string
}

export const products = [
    {
        id: '1',
        name: 'Cannabis sativa',
        price: 2500,
        description: 'Sokan jobban kedvelik a sativát agyi, nevettetős, kreatív gondolkodásra serkentő hatását, az indicák fotelba szegező, testi, elnehezítő, vagy altató hatásával szemben.'
    },
    {
        id: '2',
        name: 'Cannabis indica',
        price: 3500,
        description: 'A kikapcsolódási célra történő felhasználás szempontjából a leginkább elterjedt fogyasztási módja a cigarettába sodrás, a jobb éghetőség kedvéért gyakran dohánnyal keverve. A "joint" jelentése: csak marihuánát tartalmazó cigi.'
    },
    {
        id: '3',
        name: 'Heroin',
        price: 4000,
        description: 'Kedvenc dróóógom.'
    },
    {
        id: '4',
        name: 'Cocain',
        price: 15000,
        description: 'Főképpen a dopamin és a szerotonin nevű Ingerületátvivő anyagokra hat.'
    },
    {
        id: '5',
        name: 'LSD',
        price: 2800,
        description: 'Leginkább rekreációs és önismereti céllal, illetve a pszichedelikus terápiához használják. Az LSD nem okoz fizikai függőséget, nincs bizonyíték agykárosító hatására, és toxicitása a küszöbdózishoz mérten rendkívül alacsony, viszont kedvezőtlen mentális hatásai lehetnek, mint például a szorongás, paranoia, vagy zavaró érzékcsalódások.'
    },
    {
        id: '6',
        name: 'Ecstasy',
        price: 3000,
        description: 'Az MDMA általános hatásai közé tartozik az eufória, a meghittség, empátia érzete és a lecsökkent szorongás. Számos tanulmány - különösen a pszichológia és a kognitív terápia területén - állítja, hogy az MDMA-ban rejlik gyógyászati lehetőség, mivel terápiás ülések alkalmával megkönnyíti a beteg megnyílását, traumáinak újbóli átélését, feldolgozását.'
    }
];