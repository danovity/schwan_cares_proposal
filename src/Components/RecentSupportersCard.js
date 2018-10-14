import React from "react";

function timeDifference(supportedAt) {
  let timeSupported = new Date(supportedAt).getTime();
  let difference = Date.now() - timeSupported;
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

  return daysDifference;
}

export default ({
  teamMemberName,
  supporterName,
  action,
  giveAmount,
  supportedAt
}) => {
  const daysSinceSupported = timeDifference(supportedAt);
  return (
    <div className="banner__recent-supporters__card">
      <div className="banner__recent-supporters__card--supporterName">
        {supporterName}
      </div>
      <div className="banner__recent-supporters__card--actionContainer">
        <div className="banner__recent-supporters__card--action">
          {action} {giveAmount} to
        </div>
        <div className="banner__recent-supporters__card--teamMember">
          {teamMemberName}
        </div>
      </div>
      <div className="banner__recent-supporters__card--timeSupported">
        About {daysSinceSupported} Days Ago
      </div>
    </div>
  );
};
