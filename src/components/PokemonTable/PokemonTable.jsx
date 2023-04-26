import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {typeHandler} from "../../utils"

export default function PokemonTable({pokemonData}) {
    const {weight, height, types} = pokemonData;

  return (
    <TableContainer sx={{height: "fit-content", borderRadius: "10px"}} elevation={3} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Height</strong></TableCell>
            <TableCell><strong>Weight</strong></TableCell>
            <TableCell><strong>Type</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{height}</TableCell>
              <TableCell>{weight}</TableCell>
              <TableCell>{typeHandler(types)}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

