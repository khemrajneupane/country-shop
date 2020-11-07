import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import clsx from 'clsx'
import {
  fade,
  Theme,
  makeStyles,
  useTheme,
  withStyles,
} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import HourglassEmptySharpIcon from '@material-ui/icons/HourglassEmptySharp'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, ListItem, MenuItem } from '@material-ui/core'
import Select from '@material-ui/core/Select'

import Basket from '../basket/Basket'
import { AppState, SearchType } from '../../../types'
import CountryCard from '../card/CountryCard'
import { CustomThemeContext } from '../../theme/CustomThemeProvider'

import './Drawer.css'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))
const useMyStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    noItem: {
      flexGrow: 1,
      display: 'none',
      color: 'red',
      fontFamily: 'curssive',
      fontSize: '2rem',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    items: {
      flexGrow: 1,
      display: 'none',
      color: 'white',
      fontFamily: 'curssive',
      fontSize: '2rem',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)

export type DrawerThemeProp = {
  setTheme: (name: string) => void
}

export const StyledListItem = withStyles({
  root: {
    margin: '2px',
    color: 'black',
  },
})(ListItem)

const MyDrawer = ({ keyword, handleChange }: SearchType) => {
  const classes = useStyles()
  const myClasses = useMyStyles()
  const theme = useTheme()
  const { setTheme }: DrawerThemeProp = useContext(CustomThemeContext)
  const myBasket = useSelector((state: AppState) => state.country.myBasket)
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleThemeChange = (theme: string) => setTheme(theme)
  const colors = [
    {
      name: 'white',
      color: 'rgba(0, 0, 0, 0.08)',
    },
    {
      name: 'black',
      color: '#000000',
    },
    {
      name: 'purple',
      color: '#6d1b7b',
    },
    {
      name: 'orange',
      color: '#f57c00',
    },
    {
      name: 'red',
      color: '#d32f2f',
    },
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Divider />
        <Toolbar>
          <Select
            className={myClasses.formControl}
            onChange={(e: string | any) => handleThemeChange(e.target.value)}
            defaultValue="white"
            style={{ color: '#69F0AE' }}
          >
            {colors.map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.name.toUpperCase()}
              </MenuItem>
            ))}
          </Select>

          <Divider />
          {myBasket.length === 0 ? (
            <Typography className={myClasses.noItem} variant="h6" noWrap>
              no items
            </Typography>
          ) : (
            <Typography
              className={myClasses.items}
              variant="h6"
              noWrap
            >{`${myBasket.length} items in basket`}</Typography>
          )}
          <div className={myClasses.search}>
            <div className={myClasses.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: myClasses.inputRoot,
                input: myClasses.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={keyword}
              onChange={handleChange}
              aria-label="Search"
            />
          </div>
          <Typography variant="h6" noWrap className={classes.title}>
            <Basket />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {myBasket.length === 0 ? (
            <Typography>
              <strong style={{ color: 'gray' }}>Cart is empty</strong>
              <HourglassEmptySharpIcon color="error" fontSize="large" />
            </Typography>
          ) : (
            myBasket.map((country) => (
              <ListItem key={country.name} button>
                <div>
                  <CountryCard
                    flag={country.flag}
                    name={country.name}
                    aCountry={country}
                  />
                </div>
              </ListItem>
            ))
          )}
        </List>
      </Drawer>
    </div>
  )
}

export default MyDrawer
