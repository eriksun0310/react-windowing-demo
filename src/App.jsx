import { useState } from "react";
import "./App.css";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteItems from "./components/InfiniteItems";

const Row = ({ index, style , data}) => <div style={style}>Row {data[index]}</div>;

function App() {
  const [lists, setList] = useState([]);
  const addLists = () => {
    setList(new Array(20000).fill(0).map((v, id) => id));
  };
  return (
    <>
      <button onClick={addLists}>Add Lists</button>
      {/* 全螢幕 */}
      {/* <AutoSizer>
        {({width, height})=>(
             <FixedSizeList
             className="List"
             width={width}
             height={height}
             itemSize={35}
             itemCount={lists.length}
             itemData={lists}
           >
             {Row}
           </FixedSizeList>
        )}
      </AutoSizer> */}
      <InfiniteItems></InfiniteItems>
     
      {/* {lists.map((list, i) => (
        <Row key={i} data={list} index={i} />
      ))} */}
    </>
  );
}

export default App;
