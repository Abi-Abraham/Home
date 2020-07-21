import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHomeList } from "../../redux";
import { Link } from "react-router-dom";

const Listing = ({ homesData, fetchHomeList }) => {
  useEffect(() => {
    fetchHomeList();
  }, [fetchHomeList]);
  console.log(homesData);
  return (
    <div className="list-main">
      <div className="pag-title">
        <h3 className="page-title-inner">Property Listing</h3>
      </div>
      <div className="row">
        {homesData.map((homelists) => (
          <div
            className="col-md-6 col-lg-4 col-xs-12 colms"
            key={homelists.guid}
          >
            <Link to={`/details/${homelists.guid}`}>
              <div className="main-card">
                <div className="home-img">
                  <img src={homelists.image} alt="" width="100%" />
                </div>
                <div className="home-half-details">
                  <h6 className="home-name">{homelists.name}</h6>
                  <p className="home-loc">
                    {homelists.city}, {homelists.country_code}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    homesData: state.homelists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeList: () => dispatch(fetchHomeList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
