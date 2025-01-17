import React, { createContext, useState, useEffect, useContext } from 'react';
const UserContext = createContext();
export const UserProvider = ({ children }) => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchUsers = async () => {
try {
const response = await fetch('https://674a3c6b8680202966340030.mockapi.io/:endpoint');
const data = await response.json();
setUsers(data);
} catch (error) {
setError(error);
} finally {
setLoading(false);
}
};
fetchUsers();
}, []);

return (
<UserContext.Provider value={{ users, loading, error }}>
{children}
</UserContext.Provider>
);
};

export const useUserContext = () => useContext(UserContext);