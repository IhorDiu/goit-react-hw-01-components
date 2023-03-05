import PropTypes from 'prop-types';
import { FriendListItem } from 'components/Friends/FriendListItem';
import { FriendListCard } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendListCard>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </FriendListCard>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number }).isRequired
  ),
};
