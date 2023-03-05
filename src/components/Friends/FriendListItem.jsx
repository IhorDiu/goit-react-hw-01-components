import PropTypes from 'prop-types';
import {ListItem, Status, FriendAvatar, FriendName} from './FriendList.styled'


export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem>
    <Status status={isOnline}></Status>
    <FriendAvatar src={avatar} alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </ListItem>
);

FriendListItem.prototypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
 
}

