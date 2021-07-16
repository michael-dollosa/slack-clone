import "./SidebarOption.scss";

const SidebarOption = ({
  Icon,
  id,
  addChannelOption,
  title,
  handleAddChannelToggle = null,
  optionType
}) => {
  
  return (
    <section className="sidebar-option-item">
      {
        optionType
        ? optionType === "user"
          ? 
            <div className="sidebar-option sidebar-padding">
              <section className="sidebar-option-user-img sidebar-option-flex-center">
                <img src={Icon} alt="" />
              </section>
              {Icon 
                ? (
                  <h3 onClick={handleAddChannelToggle}>{title}</h3>
                  ) 
                : (
                  <h3 className="sidebar-option-channel sidebar-option-flex-center">
                    <span className="sidebar-option-hash">#</span>
                  </h3>
                  )
                }
            </div>
          : 
          <div className="sidebar-option sidebar-padding">
            {Icon && <Icon className="sidebar-option-icon sidebar-option-flex-center" />}
            {Icon 
              ? (
                <h3 onClick={handleAddChannelToggle}>{title}</h3>
                ) 
              : (
                <h3 className="sidebar-option-channel sidebar-option-flex-center">
                  <span className="sidebar-option-hash">#</span>
                </h3>
                )
              }
          </div>
            
        : 
          <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option-icon sidebar-option-flex-center" />}
            {Icon 
            ? (
              <h3 onClick={handleAddChannelToggle}>{title}</h3>
              ) 
            : (
              <h3 className="sidebar-option-channel sidebar-option-flex-center">
                <span className="sidebar-option-hash">#</span>
              </h3>
              )
            }
           </div>

      }
      
    </section>
  );
};

export default SidebarOption;
