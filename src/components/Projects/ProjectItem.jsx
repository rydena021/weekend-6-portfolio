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
import './Project.css'

const styles = {
  card: {
    maxWidth: 645,
  },
  media: {
    height: 240,
  },
};


class ProjectItem extends Component {
  render() {
    const { classes } = this.props;
    let project = this.props.project;

    let github;
    if (project.github_url) {
      github =
        <Button size="small" color="primary" target="_blank" href={project.github_url}>
          Github
        </Button>
    }
    let website;
    if (project.website_url) {
      website =
        <Button size="small" color="primary" target="_blank" href={project.website_url}>
          Website
        </Button>
    }

    return (
      <div className="card-item">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={project.thumbnail}
              title={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography component="h5">
                <em>{project.release_date}</em>
              </Typography>
              <Typography component="p">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {github}
            {website}
            <Typography className="tag-item" component="p">
              {project.tag_name}
            </Typography>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectItem);
