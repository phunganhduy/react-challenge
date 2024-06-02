function TabButtons({ data, activeTab, setActiveTab }) {
  return (
    <div className="tab_header">
      {data.map((item, index) => {
        return (
          <button
            type="button"
            className="btn btn-primary button"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}
export default TabButtons;
