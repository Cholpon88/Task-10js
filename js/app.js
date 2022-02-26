// task-1
class Restaurant {
    constructor(name, cuisineType, served = 0) {
        this.name = name;
        this.cuisineType = cuisineType;
        this.served = served;
    }

    showInfo() {
        return `Restaurant: ${this.name} <br> Cuisine type: ${this.cuisineType} `;
    }



    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();

        if (currentDay === 6 || currentDay === 0) {
            return `${this.name} is closed`
        } else {
            if (currentHour > 9 && currentHour < 22) {
                return `${this.name} is open`;
            } else {
                return `${this.name} is closed`;
            }

        }
    }

    serve() {
        return `${this.served += 5}`
    };

    setServed() {
        return Math.floor(num);
    }

    showTotalServed() {
        return Math.floor(num + (this.serve() - 5))
    }
}


const kazan = new Restaurant("Kazan", "kyrgyz");
const num = 22


document.write(kazan.showInfo() + '<br>');
document.write(kazan.isOpen() + '<br>');
document.write('Количество посетителей:' + ' ' + kazan.serve() +
    '<br>');
document.write('Общее число посетителей:' + ' ' + kazan.showTotalServed() + '<hr>');

// task-2
class Cars {
    constructor(model, year, capacity, color) {
        this.model = model;
        this.year = year;
        this.capacity = capacity;
        this.color = color;
    }
    showCar() {
        document.write(`Марка авто: ${this.model} <br> Год выпуска: ${this.year} <br> Мощность двигателя: ${this.capacity} <br> Цвет машины: ${this.color}<br> <br>`)
    }
}

class ElectroCars extends Cars {
    constructor(model, year, capacity, color, batteryvolume) {
        super(model, year, capacity, color);
        this.batteryvolume = batteryvolume;
    }

    showCar() {
        super.showCar();
        document.write(`Объем аккумулятора: ${this.batteryvolume} <br>`)
    }
    promote() {
        document.write(`Срочно продается: ${this.model}`)
    }

}
const car = new Cars("Tayota", 2020, 2500, "red", );

const elcar = new ElectroCars("Lexus", 2022, 3000, "blue", "250mm");
car.showCar();
elcar.showCar();
elcar.promote();