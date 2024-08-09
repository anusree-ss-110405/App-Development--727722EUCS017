import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Apps() {
  return (
    <>
    <h1>Entertainment</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioTV.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelTV
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One app for LIVE TV shows, news, sports, and more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioGames.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelGames
        </Typography>
        <Typography variant="body2" color="text.secondary">
        India's biggest 360-degree gaming platform
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrWtAVYFT62KvBej8k_ao1Q4-gcVAf35IDQ&s"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelCinema
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Carry 10,000+ movies, 700+ TV shows, and more in your pocket with the JtelCinema on your phone.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioSaavn.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelMusic
        </Typography>
        <Typography variant="body2" color="text.secondary">
        High-quality music anytime, anywhere.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <br></br>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioNews.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelNews
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Your one-stop solution for breaking news, live TV, newspapers, magazines, videos & photos.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <br></br>
    <h1>Shopping</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioMart.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelMart
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Grab some crazy offers on the best quality products in Grocery, Fashion, Electronics, and other categories.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <br></br>
    <h1>Partners</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioPOSLite.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelPOS Lite
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Excited? All you have to do is register as a Jtel Associate on the JtelPOS Lite app and start earning commissions by recharging for Jtel customers.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <br></br>
    <h1>Health</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jep-asset.akamaized.net/cms/assets/jioapps/revamp-app/listing-page/JioHealthHub.webp"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JtelHealthHub
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Have samples collected at home, consult with doctors via video conferences, manage your weight, and more—all while securely accessing and sharing reports with your doctor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </>
  );
}
