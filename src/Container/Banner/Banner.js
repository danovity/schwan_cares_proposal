import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner__header">
          Highland Community Middle School Project Fund
        </div>

        <div className="banner__container--progressAndButtons">
          <div className="banner__progress">
            <div className="banner__progress--top">
              <div className="banner__progress--amountRaised">$1,075</div>
              <div className="banner__progress--goal">of $3,000 Goal</div>
            </div>
            <div className="banner__progress--bottom">
              <div className="banner__progress--daysLeft">93</div>
              <div className="banner__progress--daysLeftText">
                days left to earn cash back
              </div>
            </div>
          </div>
          <div className="banner__buttons">
            <div className="banner__buttons--container">
              <div className="banner__buttons--shopNow">Shop Now</div>
              <div className="banner__buttons--text">
                Earn 20% cash back at schwans.com
              </div>
            </div>
            <div className="banner__buttons--container--share">
              <div className="banner__buttons--share">Share</div>
              <div className="banner__buttons--text">To earn even more</div>
            </div>
            <div className="banner__createdBy">
              <figure className="banner__createdBy__avatarContainer">
                <img
                  src="https://d1zebr6xqllqk1.cloudfront.net/images/users/avatars/000/031/239/square_100/1429018936DSC02472.JPG?1429018936"
                  alt="userName"
                  className="banner__createdBy__avatar"
                />
              </figure>
              <div className="banner__createBy--rightSide">
                <div className="banner__createBy--rightSide--top">
                  <div className="banner__createdBy--text">Created by</div>
                  <div className="banner__createdBy--userName">Abbie Ramel</div>
                  <div className="banner__createdBy--icon">
                    <i class="fas fa-envelope" />
                  </div>
                </div>
                <div className="banner__createBy--rightSide--bottom">
                  <div className="banner__createdBy--link">
                    <a href="#">Schools & Education</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__recent-supporters">
          <div className="banner__recent-supporters__header">
            Recent Supporters
          </div>
          <div className="banner__recent-supporters__container">
            <div className="banner__recent-supporters__card">
              <div className="banner__recent-supporters__card--supporterName">
                Shelly Meyer
              </div>
              <div className="banner__recent-supporters__card--actionContainer">
                <div className="banner__recent-supporters__card--action">
                  Shopped & earned $4.60 to
                </div>
                <div className="banner__recent-supporters__card--teamMember">
                  Dante Meyer
                </div>
              </div>
              <div className="banner__recent-supporters__card--timeSupported">
                About 21 Hours Ago
              </div>
            </div>
            <div className="banner__recent-supporters__card">
              <div className="banner__recent-supporters__card--supporterName">
                Shelly Meyer
              </div>
              <div className="banner__recent-supporters__card--actionContainer">
                <div className="banner__recent-supporters__card--action">
                  Shopped & earned $4.60 to
                </div>
                <div className="banner__recent-supporters__card--teamMember">
                  Dante Meyer
                </div>
              </div>
              <div className="banner__recent-supporters__card--timeSupported">
                About 21 Hours Ago
              </div>
            </div>
            <div className="banner__recent-supporters__card">
              <div className="banner__recent-supporters__card--supporterName">
                Shelly Meyer
              </div>
              <div className="banner__recent-supporters__card--actionContainer">
                <div className="banner__recent-supporters__card--action">
                  Shopped & earned $4.60 to
                </div>
                <div className="banner__recent-supporters__card--teamMember">
                  Dante Meyer
                </div>
              </div>
              <div className="banner__recent-supporters__card--timeSupported">
                About 21 Hours Ago
              </div>
            </div>
            <div className="banner__recent-supporters__card">
              <div className="banner__recent-supporters__card--supporterName">
                Shelly Meyer
              </div>
              <div className="banner__recent-supporters__card--actionContainer">
                <div className="banner__recent-supporters__card--action">
                  Shopped & earned $4.60 to
                </div>
                <div className="banner__recent-supporters__card--teamMember">
                  Dante Meyer
                </div>
              </div>
              <div className="banner__recent-supporters__card--timeSupported">
                About 21 Hours Ago
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/* import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, GridList } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "../../Components/Card";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "100vh",
    backgroundImage: `url(
      'https://schwans-prod.imgix.net/images/campaigns/photos/000/041/287/width_800/1536238305DSC02778.JPG?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=650'
    )`,
    display: "grid",
    justifyContent: "center"
  },
  gridList: {
    display: "grid",
    alignContent: "end",
    gridTemplateColumns: "min-content min-content min-content"
  }
});

function Banner(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <Card />
        </GridList>
      </Paper>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner); */

/* import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <h1 className="heading-primary">
          Highland Community Middle School Project Fund
        </h1>
        <div className="banner__campaign-progress banner__container">
          <div className="banner__campaign-amountRaised__container">
            <div className="banner__campaign-currentRaised">$1070</div>
            <div className="banner__campaign-toBeRaised">of $3,000 Goal</div>
          </div>
          <div className="banner__campaign-teamSize">
            Raised by 59 team members
          </div>
        </div>
        <div className="banner__campaign-duration banner__container--duration banner__container">
          <div className="banner__campaign-daysLeft__container">
            <div className="banner__campaign-daysLeft--number">94</div>
            <div className="banner__campaign-daysLeft--text">days</div>
          </div>
          <p className="normal-text">days left to earn cash back</p>
        </div>
        <div className="banner__campaign-actions banner__container">
          <div className="banner__campaign-button button button__shop-now--full">
            <div className="button__name">Shop Now</div>
            <div className="button__description">
              Earn 20% cash back at schwans.com
            </div>
          </div>
          <div className="banner__campaign-button button button__share--full">
            <div className="button__name">Share</div>
            <div className="button__description">To earn even more</div>
          </div>
          <div className="banner__campaign-createdBy">
            <figure className="image-container__round">
              <img
                src="https://d1zebr6xqllqk1.cloudfront.net/images/users/avatars/000/031/239/square_100/1429018936DSC02472.JPG?1429018936"
                alt="userName"
                className="user-avatar"
              />
            </figure>
            <div className="banner__campaign-createdBy__container--main">
              <p className="normal-text__createdBy">Created by</p>
              <p className="normal-text__userName">Abbie Ramel</p>
              <div className="banner__campaign-createdBy__icon">
                <i class="fas fa-envelope" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 */
