import React, { Fragment } from "react";
import RecentSupportersCard from "../../Components/RecentSupportersCard";

function timeDifference(endsAt) {
  let timeEnded = new Date(endsAt).getTime();
  let difference = Date.now() - timeEnded;
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

  if (daysDifference > 0) {
    return (
      <div className="banner__progress--daysLeftText">Campaign Has ended.</div>
    );
  } else {
    return (
      <Fragment>
        <div className="banner__progress--daysLeft">
          ${Math.abs(daysDifference)}
        </div>
        <div className="banner__progress--daysLeftText">
          days left to earn cash back
        </div>
      </Fragment>
    );
  }
}

export default ({ supporters, campaignDetails }) => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.35),
        rgba(255, 255, 255, 0.35)
      ),
      url(${campaignDetails ? campaignDetails.image : null})`
      }}
    >
      <div className="banner__header">
        {campaignDetails ? campaignDetails.name : null}
      </div>

      <div className="banner__container--progressAndButtons">
        <div className="banner__progress">
          <div className="banner__progress--top">
            <div className="banner__progress--amountRaised">
              $
              {campaignDetails
                ? parseInt(campaignDetails.amountRaised).toFixed(0)
                : null}
            </div>
            <div className="banner__progress--goal">
              of $
              {campaignDetails
                ? parseInt(campaignDetails.goal).toFixed(0)
                : null}{" "}
              Goal
            </div>
          </div>
          <div className="banner__progress--bottom">
            {campaignDetails ? timeDifference(campaignDetails.endsAt) : null}
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
            <div className="banner__createdBy--rightSide">
              <div className="banner__createdBy--rightSide--top">
                <div className="banner__createdBy--text">Created by</div>
                <div className="banner__createdBy--userName">
                  {campaignDetails ? campaignDetails.owner.name : null}
                </div>
                <div className="banner__createdBy--icon">
                  <i class="fas fa-envelope" />
                </div>
              </div>
              <div className="banner__createdBy--rightSide--bottom">
                <div className="banner__createdBy--link">
                  <a href="#">
                    {campaignDetails ? campaignDetails.category : null}
                  </a>
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
          {supporters
            ? supporters.map(
                ({
                  teamMemberName,
                  supporterName,
                  action,
                  giveAmount,
                  supportedAt
                }) => (
                  <RecentSupportersCard
                    teamMemberName={teamMemberName}
                    supporterName={supporterName}
                    action={action}
                    giveAmount={giveAmount}
                    supportedAt={supportedAt}
                  />
                )
              )
            : null}
        </div>
      </div>
    </section>
  );
};
