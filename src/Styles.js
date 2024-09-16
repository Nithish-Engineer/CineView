import { css } from 'styled-components';
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export const SearchIcon = styled(FaSearch)`
    width:1.5rem;
    height:1.5rem;
    position:relative;
    right: 4%;
    transform: translateY(6px);
    cursor: pointer;
`

export const Main = styled.div`
margin:0;
padding: 0;
display: flex;
background-color: cadetblue;
@media (max-width: 786px) {
flex-direction: column;
}
`;
export const LeftSide = styled.div(() => ({
    padding: '5px',
    textWrap: 'nowrap',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    background: '#1f8f69',
    borderTopBottomRadius: '1rem',
    borderTopRightRadius: '1rem',
    '@media (max-width: 786px)': {
          flexDirection: 'row'
    }
}));

export const navLinks = styled(Link)`

&hover {
width: -webkit-fill-available;
}
`

export const Card = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '88%',
    backgroundColor: '#97c9b7',
    borderRadius: '8px',
    height: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '-10px 7px 8px rgb(14 85 70 / 93%)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
'&:hover': {
    transform: 'translate(-10px)',
    boxShadow: '9px -7px 8px rgb(14 85 70 / 93%)'
    
},
'& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderBottom: '1px solid #ccc'
 },
 '& h6, & h4': {
    margin: '0px 0px 0px 3%',
    border: '0',  
 }

}));

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    justify-items: center;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }`;

    export const Search = styled.input(() => ({
        background: 'inherit',
        marginTop: '1%',
        border: '0px',
        borderRadius: '2rem',
        outline: 'none',
        width: '50%',
        padding: '1%',
        color: '#245426e3',
        fontSize: 'larger',
        border: '0.2rem solid #245426e3',
    '&:focus-visible': {
        borderColor: '#245426e3',
    },

    '&::placeholder': {
        color: '#245426e3',
    }
    }))