// Takes 16-point compass direction and converts to degrees heading 
// Values are rounded up to closes degrees
export default function compassToHeading(direction = '') {
  let heading = null;
  switch (direction.toUpperCase()) {
    case 'N':
      heading = 360;
      break;
    case 'NNE':
      heading = 23;
      break;
    case 'NE':
      heading = 45;
      break;
    case 'ENE':
      heading = 68;
      break;
    case 'E':
      heading = 90;
    case 'ESE':
      heading = 113;
      break;
    case 'SE':
      heading = 135;
      break;
    case 'SSE':
      heading = 158;     
      break; 
    case 'S':
      heading = 180;  
      break;
    case 'SSW':
      heading = 203;    
      break;
    case 'SW':
      heading = 225;    
      break;
    case 'WSW':
      heading = 248;    
      break;
    case 'W':
      heading = 270;  
      break;
    case 'WNW':
      heading = 293; 
      break;   
    case 'NW':
      heading = 315;                              
      break;  
    case 'NNW':
      heading = 338;                              
      break;            
    default:
      break;
  }
  return heading;
}
