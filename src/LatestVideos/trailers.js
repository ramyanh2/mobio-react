import React,{Component} from 'react';
import trailers from './trailerVideos.json';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'reactstrap';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = {
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	MuiTypography:{
		fontSize: '1.00rem !important',
	}

};
class TrailerVideos extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
		};
		this.handleOpen = this.handleOpen.bind(this)
	}

	handleOpen(){
		alert('called')
	}	

	render(){
		const { classes } = this.props;
		const bull = <span className={classes.bullet}>•</span>;
		var musicVideos = trailers.videos.map(function (video) {
			let src = "https://www.youtube.com/embed/" + video.src;
			let date = video.date;
			let views = video.views + " views " ;
			console.log('videos',video);
			return (
				<Card onClick={() => this.handleOpen} className={classes.card} key={video.id} style={{display: 'inline-block',marginTop:'10px'}}>
				<CardActionArea>
				<CardMedia 
				/>
				<CardContent style={{width:'250px'}}>
				<iframe src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<Typography className={classes.MuiTypography} gutterBottom variant="h6" component="h4">
				{video.desc}
				</Typography>
				<Typography component="p">
				{views}{bull} {date}
				</Typography>
				</CardContent>
				</CardActionArea>
				<CardActions>
				</CardActions>
				</Card>
				)
		});
		return(
			<div>

			<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title">
			<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
			<div>
			<video controls width="400px" controls>
			<source src="2.mp4" type="video/mp4"/>
			<source src="mov_bbb.ogg" type="video/ogg"/>
			Your browser does not support HTML5 video.
			</video>
			</div>
			</Dialog>

			<Row style={{margin: '15px'}}>
			<Col>
			<i class="material-icons">music_video</i><span style={{position:'absolute',paddingLeft:'15px'}}>Trailers</span>
			</Col>
			</Row>
			<Row style={{
				marginLeft: '0px',
				marginRight: 0,
				width: '100%',
			}} >
			<Col md={4}>{musicVideos}</Col>
			</Row>
			</div>
			)
	}


}
TrailerVideos.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrailerVideos);