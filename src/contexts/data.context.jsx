import { createContext, useState } from 'react';

import DATA from '../data.json';

export const DataContext = createContext({
    data: [],
});

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(DATA);
    const value = { data };

    return (
        <DataContext.Provider value={ value }>{ children }</DataContext.Provider>
    )
}