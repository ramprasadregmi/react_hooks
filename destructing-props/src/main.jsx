
import { createRoot } from 'react-dom/client'
function Car({color})
{
  return(
    <h2>My car is {color}!</h2>
  );
}
createRoot(document.getElementById('root')).render(
  <Car brand="audi" model="mustang" color="red" year={2012}/>
);