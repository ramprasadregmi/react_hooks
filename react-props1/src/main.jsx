import { createRoot } from 'react-dom/client'

function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);
