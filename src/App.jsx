// import { RGlobe } from "./components";
import toast from 'react-hot-toast';
const delay = (ms) => new Promise((res, rej) => setTimeout(rej, ms));
const notify = () => toast.promise(delay(1000), {
  loading: 'Loading',
  success: 'Loaded',
  error: 'Error',
}, {
  duration: 5000
});

export default function App() {

  return (
    <>
      <h1>React Globe</h1>
      <button onClick={notify}>Notify</button>
    </>
  )
}

