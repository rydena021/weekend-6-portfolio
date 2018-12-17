import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 445,
  },
  media: {
    height: 240,
  },
};


class ProjectItem extends Component {
  render() {
    const { classes } = this.props;
    let project = this.props.project;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="images/goat_small.jpg"
            title={project.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
          </Typography>
            <Typography component="p">
              {project.description}
          </Typography>
            <Typography component="p">
              {project.date_completed}
            </Typography>
            <Typography component="p">
              {project.tag_id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" >
            Github
        </Button>
          <Button size="small" color="primary" >
            Website
        </Button>
        </CardActions>
      </Card>
    );
  }
}

ProjectItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectItem);
