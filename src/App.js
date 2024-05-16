import "./App.css";
import CustomTabs from "./components/CustomTabs/CustomTabs";
import RandomComponent from "./components/RandomComponent";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <div className="App">
      <CustomTabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
}

export default App;
