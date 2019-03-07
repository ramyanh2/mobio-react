import React,{Component} from 'react';
import videos from './videos.json';
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
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

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
	},

};
const DialogContent = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing.unit * 2,
	},
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		borderTop: `1px solid ${theme.palette.divider}`,
		margin: 0,
		padding: theme.spacing.unit,
	},
}))(MuiDialogActions);


class LatestVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			currentVideo:""
		};
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	handleClose() {
		this.setState({
			open: false
		})
	}

	handleOpen(e,video){
		this.setState({
			currentVideo: video
		})
		this.setState({
			open: true
		})
	}
	render(){
		const { classes } = this.props;
		const bull = <span className={classes.bullet}>•</span>;
		var that = this;
		var musicVideos = videos.videos.map(function (video) {
			console.log('videos',video);
			let src = "https://www.youtube.com/embed/" + video.src;
			let dialogVideo = "https://www.youtube.com/embed/" + video.src+"?autoplay=1";
			let views = video.views + " views ";
			let date = video.date;
			return (
				<Card onClick={e=>that.handleOpen(e,dialogVideo)} className={classes.card} key={video.id} style={{display: 'inline-block',marginTop:'10px'}}>
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

			<Dialog
			style={{width:'50% !important'}}
			onClose={this.handleClose}
			aria-labelledby="customized-dialog-title"
			open={this.state.open}
			>
			<DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
			Modal title
			</DialogTitle>
			<DialogContent>
			<iframe style={{width:'600px'}}src={this.state.currentVideo} frameborder="0" 
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>
			</DialogContent>
			<DialogActions>
			</DialogActions>
			</Dialog>

			<Row style={{margin: '15px'}}>
			<Col>
			<i class="material-icons">music_video</i><span style={{position:'absolute',paddingLeft:'15px'}}>Latest Videos</span>
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
LatestVideos.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestVideos);