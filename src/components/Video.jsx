import { Stack, Box } from '@mui/material'
// import { Link } from "react-router-dom";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { Dna } from 'react-loader-spinner';

const Video = ({videos}) => {

  const loader = (
    <Dna
      visible={true}
      height='120'
      width='120'
      ariaLabel='dna-loading'
      wrapperStyle={{}}
      wrapperClass='dna-wrapper'
    />
  );

  return (
    <Stack direction='row' flexWrap='wrap' gap={2}
      justifyContent='start'
    >
      {
        videos ? 
        videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        )) :
        loader
      }
      
    </Stack>
  )
}

export default Video