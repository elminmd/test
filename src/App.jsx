// import { RGlobe } from "./components";
import toast from 'react-hot-toast';
import { data } from "consts"
import { TrackingMap } from 'components';
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
      <TrackingMap {...{ data }} />
      {/* <button onClick={notify}>Notify</button> */}
    </>
  )
}

