import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  
  const loggedIn ={
    firstName: 'Sahil',
    lastName: 'Kashyap',
    email: 'Contact@gmail.com'
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className="home-header">
           <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficently"
           />

           <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
             totalCurrentBalance={1250.45}
           />
        </header>

        RECENT TRANSACTIONS  
      </div>

      <RightSidebar
       user={loggedIn}
       transaction={[]}
       banks={[{currentBalance: 500.63}, {currentBalance: 321.34}]}
      />
      </section>
  )
}

export default Home