import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class AdminTagForm extends React.Component {
  state = {
    tag: ''
  };

  addNewTag = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TAG', payload: this.state })
    this.props.dispatch({ type: 'SHOW_TAG_SNACK' })
    this.clearFields();
  }

  clearFields = () => {
    this.setState({
      tag: ''
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Add New Tag</h1>
        <form onSubmit={this.addNewTag} className={classes.root} autoComplete="off">
          <TextField
            id="standard-tag"
            label="Tag"
            name="tag"
            className={classes.textField}
            value={this.state.tag}
            onChange={this.handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

AdminTagForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect()(withStyles(styles)(AdminTagForm));
