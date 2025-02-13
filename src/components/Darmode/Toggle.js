import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import French from '../../assests/images/french.png';
import English from '../../assests/images/english.png';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const DarkModeToggle = () => {
    const {t, i18n} = useTranslation();
    const [alignment, setAlignment] = React.useState(i18n.language);

  
    function changeLangi18n(lang) {
        //alert(lang)
        i18n.changeLanguage(lang);
      }

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== alignment && newAlignment !== null) { setAlignment(newAlignment); }
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
                <ToggleButton value="fr"onClick={e=>{changeLangi18n("fr")}} aria-label="left aligned">
                    <img src={French} width={30} />
                </ToggleButton>

                <ToggleButton value="en" onClick={e=>{changeLangi18n("en")}} aria-label="centered">
                    <img src={English} width={22} />
                </ToggleButton>
            </ToggleButtonGroup>
       {/* 
            <ToggleButtonGroup value={alignment1} exclusive size='small' onChange={handleAlignment1} aria-label="text alignment" >
                <ToggleButton value="L" aria-label="left aligned">
                    🌙
                </ToggleButton>
                <ToggleButton value="D" aria-label="centered">
                    🔆
                </ToggleButton>
            </ToggleButtonGroup> */}
            
        </Box >
    );
}

export default DarkModeToggle;