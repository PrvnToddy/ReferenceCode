class Element {
    constructor(name, yearBuild) {
        this.name = name;
        this.yearBuild = yearBuild;
    }
}
class Park extends Element {
    constructor(name, yearBuild, area, numTrees) {
        super(name, yearBuild);
        this.area = area;
        this.numTrees = numTrees;
    }
    density() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a density of ${density} of tress per sq km`);
    }
}
class Street extends Element {
    constructor(name, yearBuild, length, size = 3) {
        super(name, yearBuild);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classifyStreet = new Map();
        classifyStreet.set(1, "tiny");
        classifyStreet.set(2, "small");
        classifyStreet.set(3, "normal");
        classifyStreet.set(4, "big");
        classifyStreet.set(5, "huge");
        console.log(
            `${this.name} build in ${this.yearBuild} is a ${classifyStreet.get(
        this.size
      )} street`
        );
    }
}

const allParks = [
    new Park("Green Park", 1987, 0.2, 215),
    new Park("National Park", 1894, 2.9, 3541),
    new Park("oak Park", 1953, 0.4, 949)
];
const allStreet = [
    new Street("Ram Street", 1999, 1.1, 4),
    new Street("Veeri Street", 2018, 2.7, 2),
    new Street("Ragul Street", 2015, 0.8),
    new Street("Bigil Street", 1982, 2.5, 5)
];

function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportPark(p) {
    console.log(`-----------PARK----------`);
    p.forEach(element => {
        element.density();
    });
    const age = p.map(el => new Date().getFullYear() - el.yearBuild);
    const [totalAge, avgAge] = calc(age);
    console.log(`Our ${p.length} Park have an avgrage of ${avgAge} Years`);

    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);

    console.log(`${p[i].name} has more than 1000 trees`)

}

function reportStreet(s) {
    console.log(`----------Street---------`);
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km with an average of ${avgLength} km`);
    s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreet(allStreet);