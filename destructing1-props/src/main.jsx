
import { createRoot } from 'react-dom/client'
function Car(props)
{
  const{brand,model}=props;
  return(
    <h2>I love my {brand} {model}!</h2>
  );
}
createRoot(document.getElementById('root')).render(
  <Car brand="ford" model="mustang" color="red" launched={1966}/>
);