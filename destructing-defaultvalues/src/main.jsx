
import { createRoot } from 'react-dom/client'
function Car({color="red",brand})
{
  return(
    <h2>My{color}{brand}!</h2>
  );
}
createRoot(document.getElementById('root')).render(
  <Car brand="Audi"/>
);