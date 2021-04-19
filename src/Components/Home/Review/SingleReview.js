import React from 'react';

const SingleReview = (props) => {
    const review = props.review;
    return (
        <div className="col-md-5 d-flex m-5 p-3 border">
                  <div className="me-5">
                        <img style={{height:'40px'}} src={review.photo} alt=""/>
                  </div>
                  <div className="me-5">
                      <div className="border">
                          <small>Rating...</small>
                      </div>
                        <h4>{review.name}</h4>
                        <h6>{review.rank}</h6>
                        <p>{review.desc}</p>
                  </div>
              </div>
    );
};

export default SingleReview;