function TabContent({ data, activeTab }) {
  return (
    <div className="tab-content">
      <p>{data[activeTab].content}</p>
    </div>
  );
}

export default TabContent;
