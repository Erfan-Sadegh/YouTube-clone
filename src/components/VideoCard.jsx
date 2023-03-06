import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

import {
  demothumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constans';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{
        width: { xs: '100%' ,sm: '358px', md: '310px' },
        boxShadow: 0, border: 0, borderRadius: 0
    }}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: '100%',
              sm: '358px',
              md: '310px'
            },
            height: 180,
          }}
        />
        <CardContent
          sx={{
            backgroundColor: '#1e1e1e',
            height: '150px',
          }}
        >
          <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color='#ccc'>
              {snippet?.channelTilte || demoChannelTitle}
              <CheckCircle sx={{
                fontSize: 12,
                color: '#ccc',
                ml: '5px'
              }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
