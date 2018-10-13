import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Paper } from "@material-ui/core";

const styles = {
  root: {
    gridColumn: "1/4",
    marginTop: "0rem",
    backgroundColor: "primary"
  },
  label: {
    fontSize: "1.5rem",
    textTransform: "capitalize"
  }
};

class PageTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Campaign" className={classes.label} />
          <Tab label="Team Members" className={classes.label} />
          <Tab label="Updates" className={classes.label} />
          <Tab label="Supporters" className={classes.label} />
        </Tabs>
      </Paper>
    );
  }
}

PageTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageTabs);
