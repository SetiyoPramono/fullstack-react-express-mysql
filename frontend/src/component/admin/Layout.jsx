import Sidebar from "./Sidebar";


export default function Layout({ children }) {
  return (
    <div>
       <div id="page-top">
        <div id="wrapper">
        <div className="w-auto" style={{position:"absolute", marginLeft:"260px"}}>
        {children}
        </div>
          <Sidebar />
        </div>
      </div>
    </div>
    
  );
}