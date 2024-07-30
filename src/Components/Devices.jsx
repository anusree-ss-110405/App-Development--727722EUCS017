import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Devices() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apple iPhone 15 Pro Max(256GB)-Natural Titanium
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹1,51,700
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black,12GB, 512GB Storage)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹1,39,999
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/71o8VehMHXL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OnePlus 12 (Silky Black, 12GB RAM, 256GB Storage)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹69,999
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
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
        image="https://m.media-amazon.com/images/I/715-IBd7vlL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X64L (Black)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹39,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/71CmKZXntgL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UR7500PSC (Dark Iron Gray)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹32,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Apple 2022 MacBook Air laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina dispaly,8G RAM, 515GB SSD storage, backlit keyboard, 1080p FaceTime HD camera
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹1,05,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/71jaja22JFL._AC_UY327_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         HP Pavilion 16, Enhanced by AI, Intel Core Ultre 7 155U,16-inch (40.6 cm), WUXGA, 16GB LPDDR5x, 512GB DDD, Intel graphics, 1080p FHD IR camera, Copilot, Backlit KB
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹90,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Samsung 550 L, Convertible, Digital Inverter, Frost Free French Door Refrigerator (Rf57A5032S9/Tl, Silver, Refined Inox, 2024 Model)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹69,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        LG 655 L Frost-Free Smart Inverter Double Door Side-By-Side Refrigerator (2023 Model, GL-B257HDSY, Dazzle Steel, Express Freeze | Multi Air-Flow)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹72,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Panasonic 7 Kg 5 Star Fully-Automatic Top Load Washing Machine (2024 Model, NA-F70LF3CRB, Charcoal Inox Grey, 12 Wash Program, Active Foam Wash Technology, Antibacterial Water Inlet)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹15,490
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRchwd8Qca4Z9kpJ_R2wf9kR4WYnRDLwsgQ&s"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹19,490
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 6-in-1 Cooling,High Density Filter, Auto Cleanser, 2024 Model,ESTER NEO Exi+, CAI18ER3R34F0,White)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹34,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/41Dd4+t6fsL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Voltas 1.4 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2024 Model, 173V CAE White)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹32,990
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹23,790
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblEsXFWtp9GPzJm88_Hk93bcwzvpb8MItEw&s"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Pure White), in Ear
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹1,299
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy on JtelMart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </>
  );
}
