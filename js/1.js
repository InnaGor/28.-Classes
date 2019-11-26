// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getR(radius) {
        return this.radius;
    }
    setR(radius) {
        this.radius = radius;
    }
    getDiametr(radius) {
        return this.radius * 2;
    }

    square(r) {
        return 3.14 * r * r;
    }
    length(r) {
        return 2 * 3.14 * r;
    }

}

let circle = new Circle(5);
console.log(circle);
console.log("Diametr", circle.getDiametr(5));
console.log("square", circle.square(5));
console.log("length", circle.length(5));
