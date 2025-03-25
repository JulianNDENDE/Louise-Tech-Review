import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    objectives: { sentence: '', index: null },
    basicInfo: { age: 0, weight: 0, height: 0, job: '' },
    endometriosis: { diagnosis: '', text: '' },
    medications: { allergies: [] },
  });
  console.log('userData', userData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
