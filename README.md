# Compass Direction To Heading
A simple JavaScript helper to convert a [16-wind](https://en.wikipedia.org/wiki/Points_of_the_compass) compass direction to a degrees [heading](https://en.wikipedia.org/wiki/Heading_(navigation)) typically used in aviation.

## Example Usage

```
import compassToHeading from 'compassToHeading';

const heading = compassToHeading('NNW'); // Returns int 338

console.log(heading); // 338

```

## Docs

The helper function accepts a string (any case) containing one of the 16 point values:

| Compass Direction | Heading Returned |
| ------------- |:-------------:|
| N | 360 |
| NNE | 23 |
| NE | 45 |
| ENE | 68 |
| E | 90 |
| ESE | 113 |
| SE | 135 |
| SSE | 158 |
| S | 180 |
| SSW | 203 |
| SW | 225 |
| WSW | 248 |
| W | 270 |
| WNW | 293 |
| NW | 315 |
| NNW | 338 |

_Heading values are based on 16 points at 22.5deg and rounded up_