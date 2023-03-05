import PropTypes from 'prop-types';
import getRandomHexColor from '../../utils/getRandomHexColor.ts';

import {
  StatisticsCard,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsCard>
    {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(({ id, label, percentage }) => {
        return (
          <Item
            key={id}
            style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        );
      })}
    </StatList>
  </StatisticsCard>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
