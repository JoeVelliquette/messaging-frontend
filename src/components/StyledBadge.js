import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

export const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },

}))(Badge);
