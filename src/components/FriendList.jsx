import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    <FriendListItem
      avatar={friends.avatar}
      name={friends.name}
      isOnline={friends.isOnline}
    />
  </ul>
);
