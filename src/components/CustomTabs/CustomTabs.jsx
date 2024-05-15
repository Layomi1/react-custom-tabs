import { useState } from "react";
import styles from "./CustomTabs.module.css";

const CustomTabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnclick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className={styles.tabs}>
      <div className={styles.heading}>
        {tabsContent.map((tabItem, index) => (
          <div
            className={`item ${currentTabIndex === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleOnclick(index)}
          >
            <span className={styles.label}>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
