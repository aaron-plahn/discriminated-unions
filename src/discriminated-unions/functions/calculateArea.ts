import { Circle, Rectangle, Shape, Square, Triangle } from "../types/Shape";

const circleArea = (circle: Circle) => Math.PI * circle.radius * circle.radius 

const rectangleArea = (rectangle: Rectangle) => rectangle.height * rectangle.width;

const squareArea = (square: Square) => square.size*square.size;

const triangleArea = (triangle: Triangle) => 0.5*triangle.base*triangle.height;

export default (s: Shape) => {
    switch(s.kind){
        case 'circle':
            return circleArea(s);
            break;
        
        case 'rectangle':
            return rectangleArea(s);
            break;

        case 'square':
            return squareArea(s);
            break;

        case 'triangle':
            return triangleArea(s);
            break;
        
    }

}