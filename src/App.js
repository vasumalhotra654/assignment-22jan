import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
function App() {
  const response = [
    {
      itemName:"Nirma3",
      itemDate:"2023",
      itemMonth:"june",
      itemYear:"1987",
    } ,
    {
      itemName:"Nirm12",
      itemDate:"2012",
      itemMonth:"ju12",
      itemYear:"1912",
    } ,
    {
      itemName:"Nirma13",
      itemDate:"20213",
      itemMonth:"jun13",
      itemYear:"19813",
    } 

  ];
  
  return (
    <div>
     <Card>
     <Item name={response[0].itemName} ></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}>hello jeee </ItemDate>
      <Item name={response[1].itemName} ></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      <Item name={response[2].itemName} ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">
        <p>hello g </p>
      </div>
     </Card>
    </div>
  );
}

export default App;
