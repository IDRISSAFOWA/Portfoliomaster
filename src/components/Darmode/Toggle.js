import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import French from '../../assests/images/french.png';
import English from '../../assests/images/english.png';
import { Box } from '@mui/material';

const DarkModeToggle = () => {
    const [alignment, setAlignment] = React.useState('Fr');
    const [alignment1, setAlignment1] = React.useState('L');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleAlignment1 = (event, newAlignment) => {
        setAlignment1(newAlignment);
    };

    return (
        <Box display={'flex'}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                size='small'
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                    <ToggleButton value="Fr" aria-label="left aligned">
                        <img src={French} width={30} />
                    </ToggleButton>
           
                
                    <ToggleButton value="En" aria-label="centered">
                        <img src={English} width={22} />
                    </ToggleButton>
             
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={alignment1}
                exclusive
                size='small'
                onChange={handleAlignment1}
                aria-label="text alignment"
            >

                <ToggleButton value="L" aria-label="left aligned">
                    🌙
                </ToggleButton>

                <ToggleButton value="D" aria-label="centered">
                    🔆
                </ToggleButton>

            </ToggleButtonGroup>
        </Box >
    );
}

export default DarkModeToggle;