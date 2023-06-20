import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles.js";
import { ThemeProvider } from "@mui/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function App() {
  const classes = useStyles;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                This is a demo by using MUI-5, given by Mr. Rutul. I am Nadeem &
                I am a Intern React Developer in AMSYS working since 29-05-2023
              </Typography>
              <div className={classes.button}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  marginBottom="40px"
                >
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      alt="Image"
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            This demo uses MUI-4, Next target is to convert it into MUI-5
          </Typography>
        </footer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
