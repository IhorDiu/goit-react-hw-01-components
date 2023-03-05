import PropTypes from 'prop-types';
import {TransactionTable, TableTitle, TableLine, TableData} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <thead>
      <tr>
        <TableTitle>Type</TableTitle>
        <TableTitle>Amount</TableTitle>
        <TableTitle>Currency</TableTitle>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TableLine key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableLine>
        );
      })}
    </tbody>
  </TransactionTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

