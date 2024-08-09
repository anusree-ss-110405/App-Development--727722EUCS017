import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function True5G() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Multi Recharge
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <Typography variant="body2" color="text.secondary">
           Vast web India is a high commission multi recharge company in Bihar. We provide you standard single SIM multi recharge app for mobile recharge business through which you can start recharge business at the admin level.
          </Typography>
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
        image="https://jep-asset.akamaized.net/cms/assets/true5g/v3/why-prefer-image_1.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Deep indoor 5G coverage
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Whether in the office, home, or any indoor location, Jio True 5G's 700 MHz spectrum band ensures you enjoy the best 5G experiences.
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
        image="https://jep-asset.akamaized.net/cms/assets/true5g/v3/why-prefer-image_2.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lightning-fast data speeds
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Download ultra high-definition movies in seconds, stream live events and concerts, and do much more, thanks to Jio's standalone 5G network.
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
  <br></br>
  <div style={{display:'flex',justifyContent:'space-between'}}>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/true5g/v3/why-prefer-image_3.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Indigenous 5G technology
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A globally competitive home-grown 5G solution, Jio True 5G is purely made in India, by Indians, and for the unique digital needs of India.
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
        image="https://jep-asset.akamaized.net/cms/assets/jiostories/5g-agri-24.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The 5G effect on agriculture
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Boosting agriculture with ultra-fast 5G internet and real-time data.
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
  <br></br>
  <h1>Explore the impact of True 5G</h1>
  <div style={{display:'flex',justifyContent:'space-between'}}>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jiostories/5g-edu-24.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Reshaping education with 5G
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ultra-fast 5G internet and data will redefine the education sector.
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
        image="https://jep-asset.akamaized.net/cms/assets/jiostories/5g-healthcare-24.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Redefining healthcare with 5G
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Transforming the healthcare system digitally with ultra-fast 5G
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
        image="https://jep-asset.akamaized.net/cms/assets/jiostories/5g-smart-home-24.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Enabling smart homes with 5G
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Intelligent homes are already in the making and here’s how!
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
