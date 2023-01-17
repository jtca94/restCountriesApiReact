import { useState } from "react";
import Api from './components/Api'
import Card from './components/Card'
import Nav from './components/Nav'
import Buttons from './components/Buttons'

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [sorter, setSorter] = useState(0)

  const handleSortName = () => {
    setSorter(1) 
  }
  const handleSortPop = () => {
    setSorter(2)     
  }
  const handleSortArea = () => {
    setSorter(3)       
  }
  
    return (
    <div className="bg-dark">
      <Nav 
          query={query}
          setQuery={setQuery}
          />
        <div className="text-center mt-5">
          <Buttons
                  handleSortName={handleSortName}
                  handleSortPop={handleSortPop}
                  handleSortArea={handleSortArea}
          
          />
        </div>
        <div className="container">
          <section className="row g-3 mt-5">  
              <Card 
                  data={data}
                  query={query}
                  sorter={sorter} 
                  />       
          </section>
          </div>


      <Api 
        data={data}
        setData={setData}
      />
    </div>
    );
  };
export default App;

