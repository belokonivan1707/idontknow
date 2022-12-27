import Box from '@mui/system/Box/Box';
import Button from '@mui/material/Button/Button';
import Collapse from '@mui/material/Collapse';
import LessIcon from '@mui/icons-material/ExpandLess';
import MoreIcon from '@mui/icons-material/ExpandMore';

interface IProps {
    children: React.ReactNode;
    open: boolean;
    size?: number;
    onOpen: () => void;
}

export const SimpleCollapse: React.FC<IProps> = ({ children, open, size, onOpen }) => {
    return (
        <Box>
            <Collapse in={open} collapsedSize={size ? size : 0}>
                {children}
            </Collapse>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button
                    disableRipple
                    sx={{ '&:hover': { background: 'transparent' }, textTransform: 'capitalize' }}
                    endIcon={open ? <MoreIcon /> : <LessIcon />}
                    onClick={onOpen}
                >
                    {open ? 'show less' : 'show more'}
                </Button>
            </Box>
        </Box>
    );
};