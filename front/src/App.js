import './css/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Log from './Log';
import Exercise from './Exercises';
import All from './All';
import Biceps from './Biceps';
import Triceps from './Triceps';
import Shoulders from './Shoulders';
import Chest from './Chest';
import Back from './Back';
import Abs from './Abs';
import Glutes from './Glutes';
import Legs from './Legs';
import Stretch from './Stretch';
import Workout from './Workout';
import FullBody from './FullBody';
import UpperBody from './UpperBody'
import LowerBody from './LowerBody';
import Users from './Users';
import Edit from './Edit';
import Delete from './Delete';
import { useState } from 'react';

function App() {
  const [userEmail, setUserEmail] = useState('')
  const [userDatas, setUserDatas] = useState('')

  return (
      <BrowserRouter>
       { userEmail && <Header userEmail={userEmail} setUserEmail={setUserEmail} />}
      <Routes>
        <Route path="/" element={<Home userEmail={userEmail} userDatas={userDatas} setUserDatas={setUserDatas} setUserEmail={setUserEmail} />} />
        <Route path="/log" element={<Log />} />
        <Route path="/exercises" element={<Exercise />}>
          <Route path='' element={<All />} />
          <Route path='biceps' element={<Biceps />} />
          <Route path='triceps' element={<Triceps />} />
          <Route path='shoulders' element={<Shoulders />} />
          <Route path='chest' element={<Chest />} />
          <Route path='back' element={<Back />} />
          <Route path='abs' element={<Abs />} />
          <Route path='glutes' element={<Glutes />} />
          <Route path='legs' element={<Legs />} />
        </Route>
        <Route path="/workout" element={<Workout />} >
          <Route path='' element={< FullBody />} />
          <Route path='upperbody' element={< UpperBody />} />
          <Route path='lowerbody' element={< LowerBody />} />
        </Route>
        <Route path="/stretch" element={<Stretch />} />
        <Route path="/user" element={<Users />} >
          <Route path='' element={<Edit />} />
          <Route path='delete' element={<Delete />} />
        </Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
