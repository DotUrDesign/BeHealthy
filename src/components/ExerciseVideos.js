import React from 'react'
import {Box, Stack,Typography} from '@mui/material';

const ExerciseVideos = ({exerciseVideos,name}) => {

  if(!exerciseVideos.length) return "Loading...";  
  console.log(exerciseVideos);
  return (
    <Box 
        sx={{marginTop: {
            lg: '200px',
            xs: '20px'
        }}}
        p="20px"
    >
        <Typography variant ="h3" mb="33px" >
            Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}} >{name}</span> exercise videos
        </Typography>
        <Stack
            justifyContent="flex-start"
            flexWrap="wrap"
            alignItems="center"
            sx={{
                flexDirection: {lg: 'row'},
                gap: {lg: '50px', xs: '0'}
            }}
        >
            {exerciseVideos?.slice(0,3)?.map((item,index) => (
                <a 
                    key={index}
                    className="exercise-video"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank" // always to open the video in a new tab whenever clicked.
                    rel="noreferrer" // The noreferrer link type hides referrer information when the link is clicked. If someone arrives at your site from a link that uses this link type, your analytics won't show who referred that link. Instead, it will mistakenly show as direct traffic in your acquistion channels report. If you have an external link to someoneelse's site you don't trust and you want to hide referrer information then you can combine both the "noreferrer" and "nofollow".<a href="http://example.com/sample_page/" rel="noreferrer nofollow">Other Domain Link</a>
                >
                    <img style={{ borderTopLeftRadius: '15px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography 
                            sx={{ fontSize: { lg: '28px', xs: '18px' } }} 
                            fontWeight={600} 
                            color="#000" >
                            {item.video.title}
                        </Typography>
                        <Typography fontSize="14px" color="#000" >
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos
