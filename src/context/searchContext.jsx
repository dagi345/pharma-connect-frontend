// import React, { createContext, useState, useContext } from "react";

// // Create the context
// const SearchContext = createContext();

// // Custom hook to use the search context
// export const useSearchContext = () => {
//     return useContext(SearchContext);
// };

// // Provider component
// export const SearchProvider = ({ children }) => {
//     const [searchResults, setSearchResults] = useState([]);

//     // Function to update the search results
//     const updateSearchResults = (results) => {
//         setSearchResults(results);
//     };

//     return (
//         <SearchContext.Provider value={{ searchResults, updateSearchResults }}>
//             {children}
//         </SearchContext.Provider>
//     );
// };