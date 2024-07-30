import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function AirFiber() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://jep-asset.akamaized.net/cms/assets/airfiber/reliability.png"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reliable network
          </Typography>
          <Typography variant="body2" color="text.secondary">
          AirFiber is a service that will redefine how we experience and manage our homes and businesses. It provides an opportunity for TV or broadband users to upgrade to a world-class home entertainment, broadband, and digital experience, delivered through one integrated service. AirFiber provides the best-in-class value proposition and plans as JioFiber.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://jep-asset.akamaized.net/cms/assets/airfiber/reaches.png"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wider reach
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Enjoy top TV shows, movies, news, sports, and more in over 15 languages.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://jep-asset.akamaized.net/cms/assets/home/connect-multiple-device.png"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Connect multiple devices
          </Typography>
          <Typography variant="body2" color="text.secondary">
          With the CatchUp TV feature, watch any missed episodes of a TV show, later.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://jep-asset.akamaized.net/cms/assets/airfiber/cheering-desk.webp"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Real-time streaming
          </Typography>
          <Typography variant="body2" color="text.secondary">
          With 15+ OTT subscriptions, enjoy latest movies, TV shows, web series and more on your TV.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
    </div>
          </>
  );
}
