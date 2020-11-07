import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp'
import { CardType } from '../../../types'
import { deleteFromBasket } from '../../../redux/actions/basketAction'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    backgroundColor: 'rgba(0,0,0,.2)',
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

const CountryCard = ({ flag, name, aCountry }: CardType) => {
  const randomPrice = Math.floor(Math.random() * (25 - 5) + 5)

  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="100"
          image={flag}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link to={`/country/${name}`}>{name}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">{`Do you want to delete ${name.toUpperCase()}?`}</Typography>
              <Typography>
                <em>{name}</em>{' '}
                <b>
                  {' '}
                  has cheaper price{' '}
                  <strong style={{ color: `green`, fontSize: `2.5rem` }}>
                    ${randomPrice}
                  </strong>
                </b>
              </Typography>
            </React.Fragment>
          }
        >
          <Button
            size="large"
            color="primary"
            onClick={() => dispatch(deleteFromBasket(aCountry))}
          >
            <DeleteOutlineSharpIcon fontSize="large" />
          </Button>
        </HtmlTooltip>

        <Typography>
          <b>
            <strong style={{ color: 'purple', fontSize: `2.5rem` }}>
              ${randomPrice}
            </strong>
          </b>
        </Typography>
      </CardActions>
      <div
        style={{
          padding: `1rem`,
          height: `1.5px`,
          backgroundColor: `white`,
          marginBottom: `2rem`,
        }}
      />
    </Card>
  )
}

export default CountryCard
