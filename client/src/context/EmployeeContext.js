import React, { useState, createContext } from 'react';

export const EmployeeContext = createContext();

export const EmployeeContextProvider = (props) => {
  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployee([...employee, employee]);
  };
  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
        addEmployee,
        selectedEmployee,
        setSelectedEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
