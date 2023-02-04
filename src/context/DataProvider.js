import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [phone, setPhone] = useState()
  const [product, setProduct] = useState("")
  return (
    <>
      <DataContext.Provider
        value={{
          account,
          setAccount,
          phone,
          setPhone,
          product,
          setProduct
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
