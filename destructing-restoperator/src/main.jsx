
import { createRoot } from 'react-dom/client'
function Car({color,brand, ...rest}){
  return(
    <h2>My {brand} {rest.brand} is {color}</h2>
  );
}
createRoot(document.getElementById('root')).render(
  <Car brand="Suzuki" model="mustang" color="yellow" launched={1678}/>
);
