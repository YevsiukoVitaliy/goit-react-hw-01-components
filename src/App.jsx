import './App.css';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList'
import {TransactionHistory} from './components/TransactionHistory/TransactionHistory'
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

function App() {
  return (
    < >
      <Profile events={user} />
      <Statistics events={data} />
      <FriendList events={friends} />
      <TransactionHistory events={transactions}/>
    </>
  );
}

export default App;
