import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './image.css'; // Ensure this CSS file is in the same directory or adjust the path accordingly

export default function Image1() {
  return (
    <div className="card-container">
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>Airtel</b>
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                <br />
                <br />
                FanCode, JtelCinema, JtelTV and JtelCloud are the OTT platforms provided in this plan.
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to='/airtel' style={{ textDecoration: 'none' }}>
                <Button size="small">Recharge</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>Jio</b>
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                <br />
                <br />
                JtelCinema, JtelTV and JtelCloud are the OTT platforms provided in this plan.
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
            <Link to='/Jio' style={{ textDecoration: 'none' }}>
                <Button size="small">Recharge</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>BSNL</b>
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                <br />
                <br />
                JtelCinema, JtelTV and JtelCloud are the OTT platforms provided in this plan.
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
            <Link to='/bsnl' style={{ textDecoration: 'none' }}>
                <Button size="small">Recharge</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
