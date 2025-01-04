import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError()
    console.log(err);
  return (
    <div style={{textAlign:"center", backgroundColor:'lightgray', height:'500px', padding:'20px'}}>
      <h1>OOPS!!</h1>
      <hr/>
      <h2>Something went wrong</h2>
      <h3>{err.status} &nbsp; {err.statusText}</h3>
    </div>
  );
};
export default Error