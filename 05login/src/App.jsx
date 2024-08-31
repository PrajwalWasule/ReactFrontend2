// import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">React with Chai and share is important</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
