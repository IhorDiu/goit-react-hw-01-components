import PropTypes from 'prop-types';
import defaultImage from 'components/User/defaultImg.jpg';

import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity

} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileCard>
    <Description>
      <Avatar src={avatar ? avatar : defaultImage} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </Stats>
  </ProfileCard>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
