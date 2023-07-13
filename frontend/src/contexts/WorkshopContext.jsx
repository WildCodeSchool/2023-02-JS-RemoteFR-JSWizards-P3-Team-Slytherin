import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const WorkshopContext = createContext();

export function WorkshopProvider({ children }) {
  const [workshopData, setWorkshopData] = useState([]);

  const propsPassing = useMemo(
    () => ({
      workshopData,
      setWorkshopData,
    }),
    [workshopData, setWorkshopData]
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
