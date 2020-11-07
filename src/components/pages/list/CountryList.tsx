import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography,
  withStyles,
} from '@material-ui/core'
import InfoSharpIcon from '@material-ui/icons/InfoSharp'
import HomeIcon from '@material-ui/icons/Home'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { deleteFromBasket } from '../../../redux/actions/basketAction'
import { AppState } from '../../../types'

import './CountryList.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    backgroundColor: 'rgba(0,0,0,.1)',
    margin: `0 auto`,
  },
})
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip)
const CountryListSlider = () => {
  const myBasket = useSelector((state: AppState) => state.country.myBasket)
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <div className="listAll">
      <Card className={classes.root}>
        <Link to="/">
          <HomeIcon color="action" fontSize="large" />
        </Link>
        {myBasket.map((data) => (
          <div key={data.name} className="listAll__divs">
            <CardActionArea>
              <CardMedia
                role="tooltip"
                component="img"
                alt={data.name}
                height="100"
                image={data.flag}
                title={data.name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="large"
                className="btn btn-danger"
                onClick={() => dispatch(deleteFromBasket(data))}
              >
                <DeleteForeverIcon fontSize="large" color="error" />
              </Button>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">{`Do you want to delete ${data.name.toUpperCase()}?`}</Typography>
                    <span>
                      Name: <ListItemText primary={data.name} />
                    </span>
                    <span>
                      Population: <ListItemText primary={data.population} />
                    </span>
                  </React.Fragment>
                }
              >
                <InfoSharpIcon fontSize="large" />
              </HtmlTooltip>
            </CardActions>
            <div className="listAll__div"></div>
          </div>
        ))}
      </Card>
    </div>
  )
}
export default CountryListSlider
