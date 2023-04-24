import * as React from 'react';

import {useNavigate} from "react-router-dom"

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function NavBar({pokemonFilter, hideSearch}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, margin: "100px 0px"}}>
      <AppBar position="fixed" sx={{backgroundColor: "black"}}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box component="img" onClick={() => navigate("/")} src="/assets/pokemon-logo.png" height="3em" sx={{cursor: "pointer"}}/>
            {!hideSearch && (
              <Search sx={{width: "60%"}} onChange={(e) => pokemonFilter(e.target.value)}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} sx={{margin: "5px 0px 0px 0px"}} />
              </Search>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
