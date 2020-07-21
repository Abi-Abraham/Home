import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LocIcon from "../../icons/icon-location.svg";
import UserIcon from "../../icons/icon-user.svg";

const Details = () => {
  let { id } = useParams();
  const [activeList, setActiveList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = async () => {
    await axios
      .get("../MOCK_DATA.json")
      .then((res) => {
        const lists = res.data;
        setActiveList(lists.find((list) => list.guid === id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(activeList);
  return (
    <div className="details-main">
      <div className="pag-title">
        <h3 className="page-title-inner">Property Details</h3>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-7 left-side">
          <div className="detail-img">
            <img src={`.${activeList.image}`} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-5 right-side">
          <div className="complete-details">
            <h4 className="detail-title">
              {activeList.name}{" "}
              <span className="detail-status">{activeList.status}</span>
            </h4>
            <p className="loc-details">
              {activeList.street_name}, {activeList.street_address}, <br />
              {activeList.city}, {activeList.state}, {activeList.country} -{" "}
              {activeList.postal_code}
            </p>
            <div className="exact-area">
              <img src={LocIcon} alt="" />
              {activeList.location_lat}, {activeList.location_lng}
            </div>
            <div className="user">
              <h6>
                <img src={UserIcon} alt="" />
                {activeList.customer}
              </h6>
            </div>
            <p className="details-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              dignissimos nemo! Tempora, quae veniam! Sapiente optio animi fuga
              autem totam natus? Fugit unde doloribus sunt accusamus cupiditate
              repellat ducimus recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A sed omnis nihil doloribus dolorum,
              at provident mollitia! Similique rerum accusantium voluptas alias
              nisi! Deserunt asperiores ipsam nesciunt corrupti facilis
              repudiandae. <br /> <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus ipsam sit eaque consequatur iusto molestias laboriosam.
              Quod accusantium cumque reiciendis perspiciatis esse sequi labore
              qui totam veniam? Eligendi fugit doloremque optio molestias
              commodi perferendis, qui voluptatibus pariatur aliquam, recusandae
              eveniet!
            </p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
