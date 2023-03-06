import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import SideBar from './SideBar';
import Video from './Video';
import { fetchFromApi } from './FetchFromApi';
// import { Dna } from 'react-loader-spinner';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  // const loader = (
  //   <Dna
  //     visible={true}
  //     height='120'
  //     width='120'
  //     ariaLabel='dna-loading'
  //     wrapperStyle={{}}
  //     wrapperClass='dna-wrapper'
  //   />
  // );

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white',
          }}
        >
          {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>

        {videos ? <Video videos={videos} /> : <div>loading...</div>}
      </Box>
    </Stack>
  );
};

export default Feed;
