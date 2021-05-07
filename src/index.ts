import calculateArea from "./discriminated-unions/functions/calculateArea";
import { Shape } from "./discriminated-unions/types/Shape";

const myDiscriminatedShapes: Shape[] = [
    {
        kind: 'circle',
        radius: 2
    },
    {
        kind: 'square',
        size: 5
    },
    {
        kind: 'rectangle',
        height: 12,
        width: 10
    },
    {
        kind: 'triangle',
        base: 4,
        height: 6
    },
    {
        kind: 'square',
        size: 3
    }
]

myDiscriminatedShapes.map(s=>console.log(calculateArea(s)));
