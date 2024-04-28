import { useState } from "react";

import { CV_INFO } from "../data";
import Tabs from "../Tabs/Tabs";


export default function InfoCV() {
  const [newTab, setNewTab] = useState();

  function handleClick(selectedTab) {
    setNewTab(selectedTab);
  }

  return (
    <main>
      <section>
        <menu>
          <Tabs
            onClick={() => handleClick("Experience")}
          >
            Experience
          </Tabs>
          <Tabs
            onClick={() => handleClick("Education")}
          >
            Education and Awards
          </Tabs>
          <Tabs
            onClick={() => handleClick("Skills")}
          >
            Skills and Hobbies
          </Tabs>
        </menu>
        {!newTab ? (
          <p></p>
        ) : (
          <div id="meetMe">
            <h3>{CV_INFO[newTab].title}</h3>
            <p>{CV_INFO[newTab].description}</p>
          </div>
        )}
      </section>
    </main>
  );
}
