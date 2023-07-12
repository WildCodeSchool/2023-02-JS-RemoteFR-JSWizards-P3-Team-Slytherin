import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const WorkshopContext = createContext();

export function WorkshopProvider({ children }) {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [workshopData, setWorkshopData] = useState([]);

  const propsPassing = useMemo(
    () => ({
      selectedRowData,
      setSelectedRowData,
      workshopData,
      setWorkshopData,
    }),
    [selectedRowData, setSelectedRowData, workshopData, setWorkshopData]
  );

  return (
    <WorkshopContext.Provider value={propsPassing}>
      {children}
    </WorkshopContext.Provider>
  );
}

WorkshopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useWorkshop = () => useContext(WorkshopContext);
