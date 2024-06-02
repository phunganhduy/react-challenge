import { useState } from "react";
import TabButtons from "./components/TabButtons";
import TabContent from "./components/TabContent";

function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  return (
    <>
      <h1>Duy-Demo</h1>
      <TabButtons
        data={data}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent data={data} activeTab={activeTab} />
    </>
  );
}

export default Tab;
