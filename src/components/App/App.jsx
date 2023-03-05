import { Section } from 'components/Section/Section';

import { Profile } from 'components/User/Profile';
import user from '../../data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data/data.json';

import { FriendList } from 'components/Friends/FriendList';
import friends from '../../data/friends.json';

import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import transactions from '../../data/transactions.json';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title="1 - The Social network profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="2- The statistics section">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>

      <Section title="3 - The list of friends">
        <FriendList friends={friends} />
      </Section>

      <Section title="4 - The history of transactions">
         <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}; 
