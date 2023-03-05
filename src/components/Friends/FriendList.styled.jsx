import styled from '@emotion/styled';

export const FriendListCard = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 20px auto 0 auto;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #5e5e5e;
  background-color: #fff;
  box-shadow: 0px 8px 20px 0px #5e5e5e;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: -1px -1px 4px -1px #5e5e5e;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  display: block;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  padding: 8px;
  box-shadow: -1px -1px 4px -1px #5e5e5e;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
