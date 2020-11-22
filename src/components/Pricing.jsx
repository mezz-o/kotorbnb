
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      fontFamily: 'Montserrat, sans-serif'
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'ProHost',
    price: '20%',
    description: [     
    '✔️ Check-in / Check-out',
    '✔️ Professional Cleaning',
    '✔️ Full Online Management',
    '✔️ Update Calendar & Pricing',
    '✔️ Handle Online Reservations',
    '✔️ Messaging With Guest',
    '✔️ Respond to Guest Issues',
    '✔️ Review Guest',
    '✔️ Availability 24/7'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'ProHost+',
    subheader: 'Complete solution',
    price: '25%',
    description: [
      '✔️ Check-in / Check-out',
      '✔️ Professional Cleaning',
      '✔️ Full Online Management',
      '✔️ Create New Listing',
      '✔️ Listing Optimization',
      '✔️ Update Calendar & Pricing',
      '✔️ Handle Online Reservations',
      '✔️ Messaging With Guest',
      '✔️ Respond to Guest Issues',
      '✔️ Review Guest',
      '✔️ Restock Essential & Supplies',
      '✔️ Availability 24/7'

    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  
];


export default function Pricing() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <h1 align="center">
PRICING
        </h1>
        <p align="center" style={{ fontFamily:'Montserrat, sans-serif', fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'italic',
    marginBottom: '75px',
    textTransform: 'none', color:'#868e96' }} color="textSecondary">
You can choose the solution that suits you best.        </p>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
           
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul> <br /> <br />
                  <div className={classes.cardPricing}>
                    <h1 style={{ color:'#868e96'}}>
                      {tier.price} <small style={{ fontFamily:'Montserrat, sans-serif', fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'italic',
    marginBottom: '75px',
    textTransform: 'none', color:'#868e96' }}> COMMISSION INCL. TAX</small> <br />
    <small style={{position:"center", fontFamily:'Montserrat, sans-serif', fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'italic',
    textTransform: 'none', color:'#868e96' }}> + cleaning fees*</small>
                    </h1>
                 
                  </div>
                </CardContent>

              </Card>
              <small>*Cleaning fees are paid by the guest.</small>

            </Grid>
          ))}
        </Grid>
      </Container>
    
    </>
  );
}
