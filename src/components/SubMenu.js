import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export default function SubMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <Divider />
        <MenuItem>
          <ListItemText inset>Presentacion</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Saberes y oficios</ListItemText>
        </MenuItem>

        <Divider />
        <MenuItem>
          <ListItemText>Contenido del Taller</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>
            <Typography noWrap>Guias</Typography>
          </ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText>
            <Typography noWrap>febrero 9 de 2022</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap>febrero 11 de 2022</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> febrero 14 de 2022</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> marzo 2 y 4 del 2022</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> marzo 7, 9 y 11 del 2022</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 14, 16 y 18 de marzo</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 21, 23 y 25 de marzo</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 28 y 30 de marzo</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 1, 4, 6 y 8 de abril</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 11, 13 y 15 de abril</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 18, 20 y 22 de abril</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography noWrap> 25, 27 y 29 de abril</Typography>
          </ListItemText>
        </MenuItem>

        <Divider />
        <MenuItem>
          <ListItemText>Museo Vivo</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Galeria Imagen</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
