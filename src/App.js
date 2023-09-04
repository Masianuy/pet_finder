import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import FindPet from './routes/FindPet';
import NotFound from './routes/NotFound';
import Privacy from './routes/Privacy';
import VolunteerApplication from './routes/VolunteerApplication';
import PetPage from './routes/PetPage';

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/pet_finder' index element={<Home />} />
          <Route path='/findpet' element={<FindPet />} />
          <Route path='/findpet/:id' element={<PetPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/volunteer-application' element={<VolunteerApplication />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
