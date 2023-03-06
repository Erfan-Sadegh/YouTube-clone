import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Video from './Video';
import { fetchFromApi } from './FetchFromApi';
import { useParams } from 'react-router-dom';


const SearchTerm = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white',
          }}
        >
          Search Results for <span style={{ color: '#f31503' }}> { searchTerm } </span> Videos
        </Typography>

        {videos ? <Video videos={videos} /> : <div>loading...</div>}
      </Box>
    
  );
};

export default SearchTerm;
