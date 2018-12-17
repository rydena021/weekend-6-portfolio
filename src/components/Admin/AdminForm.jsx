import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const emptyProjectObject = {
  name: '',
  description: '',
  thumbnail: '',
  website_url: '',
  github_url: '',
  date_completed: '',
  tag_id: '',
};

class AdminForm extends React.Component {
  state = emptyProjectObject;

  addNewProject = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
    this.clearProjectFields();
  }

  clearProjectFields = () => {
    this.setState(emptyProjectObject);
  }
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_TAGS' });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    let tagsHtml = this.props.tags.map((tag, i) => <MenuItem key={i} value={tag.id}>{tag.name}</MenuItem>);

    return (
      <form onSubmit={this.addNewProject} className={classes.root} autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            name="name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
          />
        <TextField
          id="standard-description"
          label="Description"
          name="description"
          className={classes.textField}
          value={this.state.description}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          id="standard-website_url"
          label="Website URL"
          name="website_url"
          className={classes.textField}
          value={this.state.website_url}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          id="standard-github_url"
          label="GitHub URL"
          name="github_url"
          className={classes.textField}
          value={this.state.github_url}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          id="standard-thumbnail"
          label="Thumbnail"
          name="thumbnail"
          className={classes.textField}
          value={this.state.thumbnail}
          onChange={this.handleChange}
          margin="normal"
        />
        <input type="date" onChange={this.handleChange} name="date_completed" />
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="tag-label-placeholder">
            Tag
          </InputLabel>
          <Select
            value={this.state.tag_id}
            onChange={this.handleChange}
            input={<Input name="tag" id="tag-label-placeholder" />}
            displayEmpty
            name="tag_id"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {tagsHtml}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          ADD
          </Button>
      </form>
    );
  }
}

AdminForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
  tags: reduxState.tags,
});

export default connect(mapStateToProps)(withStyles(styles)(AdminForm));
