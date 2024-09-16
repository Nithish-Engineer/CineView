import { createContext, ReactNode, useReducer } from "react";

import { MovieDataType, moviesData } from "../assets/data";

interface MovieState {
    movies: MovieDataType[];
    trendingList?: MovieDataType[];
    recommendedList?: MovieDataType[];
    filteredData?: MovieDataType[];
}

interface MovieAction {
    type: string;
    id?: string;
}

const initialState: MovieState = {
    movies: moviesData,
    trendingList: moviesData.filter( tew => tew.isTrending),
    recommendedList: moviesData.filter( tew => !tew.isTrending),
}

interface MovieContextProps {
    children: ReactNode
}
const MovieDispatch = (state: MovieState, action: MovieAction): MovieState => {
    switch(action.type) {
        case "Movie":
            return { ...state, filteredData: state.movies.filter(tre => tre.category==="Movie") }
        case "Bookmark":
            return {...state, filteredData: state.movies.filter(twe => twe.isBookmarked)}
        case "TvSeries":
            return {...state, filteredData: state.movies.filter(uwe => uwe.category==="TV Series")}
        default:
            return {...state, filteredData: state.movies}
    }
}

export const MovieContext = createContext<{state: MovieState, dispatch: React.Dispatch<MovieAction> }>({state: initialState, dispatch: () => {}}); 

export const MovieProvider = ({ children }: MovieContextProps ) => {
    const [state, dispatch] = useReducer(MovieDispatch, initialState);
    return (
        <MovieContext.Provider value={{state, dispatch}}>
         {children}
        </MovieContext.Provider>
    )
}