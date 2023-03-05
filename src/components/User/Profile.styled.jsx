import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 270px;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 8px 20px 0px #5e5e5e;

  overflow: hidden;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 120px;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid #5e5e5e;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 0 0;
`;

export const Tag = styled.p`
  margin: 10px 0 0 0;
  color: #5e5e5e;
`;

export const Location = styled.p`
  margin: 10px 0 0 0;
  color: #5e5e5e;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  background-color: #d4fcfb;
`;

export const StatsItem = styled.li`
  width: 90px;
  padding: 20px 0;

  box-shadow: -1px -1px 4px -1px #5e5e5e;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  color: #5e5e5e;
`;

export const Quantity = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 700;
`;
