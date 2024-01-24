import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";



function App() {

const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["Florida", "Texas", "Alabama", "Alaska", "Nebraska"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="States"
        onSelectItem={handleSelectItem}
      />
      <Alert onClose={() => setAlertVisibility(false)}>
        <span></span>Hello World!
      </Alert>
      
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My alert</Alert>}
      <Button color = "primary" onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
