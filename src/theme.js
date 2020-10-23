import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
      		main: '#00e676',
    	},
    	secondary: blue,
    },
})

export default theme;