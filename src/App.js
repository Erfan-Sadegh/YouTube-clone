import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  Feed,
  VideoDetailes,
  ChannelDetailes,
  SearchTerm,
} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetailes />} />
        <Route path='/channel/:id' element={<ChannelDetailes />} />
        <Route path='/search/:searchTerm' element={<SearchTerm />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
