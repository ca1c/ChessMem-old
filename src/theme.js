import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// fonts

const theme = createMuiTheme({
	typography: {
		fontFamily: ['PT Mono'].join(',')
	},
	palette: {
		type: "dark",
		primary: {
      		main: '#00e676',
    	},
    	secondary: {
    		main: blue[500],
    		contrastText: '#8f8979',
    	},
    	
    	
    	// #ccc4af
    	// #ede6d5
    },
})

export default theme;