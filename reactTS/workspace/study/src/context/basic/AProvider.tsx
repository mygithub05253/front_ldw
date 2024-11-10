import React, { ReactNode } from "react";

export type ContextValues = {
  color : string;
}

export const initialValues:ContextValues = {
  color : ""
}

// context 초기값 설정
export const AContext = React.createContext<ContextValues>(initialValues);

const AProvider = ({children}:{children:ReactNode}) => {
  return (
    <AContext.Provider value={{color : "blue"}}>
      {children}
    </AContext.Provider>
  )
}

export default AProvider;