
import { createRoot } from 'react-dom/client'
function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}
let x = "Ford";
createRoot(document.getElementById('root')).render(
  <Car brand={x} />
)
