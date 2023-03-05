import styled from "@emotion/styled";

export const TransactionTable = styled.table`
width: 480px;
margin: 0 auto;
background-color: white;
`;

export const TableTitle = styled.th`
padding: 8px 0;
text-transform: uppercase;
background-color: #3827f5;
color: #fff;
`;

export const TableLine = styled.tr`
&:nth-of-type(even) {
    background-color: #75a0eb;
`;


export const TableData = styled.td`
width: 33.3333%;
padding: 8px 0;
font-size: 12px;
font-weight: 500;
border: 1px solid darkgrey;
text-transform: capitalize;
`;