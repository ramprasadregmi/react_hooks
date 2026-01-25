
import { createRoot } from 'react-dom/client'
function My(props) {
  return (
    <h2>My Nmae is {props.name} and age is {props.age}! </h2>
  );

}
createRoot(document.getElementById('root')).render(
  <My name="Ram" age={22} />
)