import React from 'react';
import Card from '@mui/material/Card/Card';
import Typography from '@mui/material/Typography/Typography';
import { SimpleCollapse } from '../../../ui/simple-collaapse/simple-collapse';

interface IProps {
  image: string,
  description: string;

}

export const HeroSection: React.FC<IProps> = ({ image, description }) => {
  const [openHeroSection, setOpenHeroSection] = React.useState(false);

  const handleOpenHeroSection = () => {
    setOpenHeroSection(state => !state);
  };

  return (
    <SimpleCollapse
      open={openHeroSection}
      size={400}
      onOpen={handleOpenHeroSection}
    >
      <div
        style={{
          height: '500px',
          position: 'relative',
          padding: '10px 15px',
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '4px',
          boxShadow: '0 0 3px 0 black'
        }}
      >
        <Card
          sx={{
            p: 1,
            position: 'absolute',
            bottom: '20px',
            left: '15px',
            right: '15px',
            background: '#534e4eba',
            boxShadow: '0 0 3px 0 #5f5f5f',
            color: 'white'
          }}
        >
          <Typography>{description}</Typography>
        </Card>
      </div>
    </SimpleCollapse>
  );
};
