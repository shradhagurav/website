import React from "react";
import Layout from "./Components/Layout";
import Image from "./Components/Image";
import Card from "./Components/Card";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
  <>
   
   <Layout>
      <Image />
      <Card />
      <Project />
      <Contact />
    </Layout>
   
  </>
   
  );
}

export default App;
