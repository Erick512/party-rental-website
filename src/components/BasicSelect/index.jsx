import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({name, values, def, value, onChange}) {
//   const [item, setCart] = React.useState('');

//   const handleChange = (event) => {
//     setCart(event.target.value);
//   };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      {/* <InputLabel id="demo-select-small">{name}</InputLabel> */}
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value ?? values[0]}
        // label={name}
        onChange={onChange}
      >

        { def && 

        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        }

        {values.map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
        ))}

      </Select>
    </FormControl>
  );
}
