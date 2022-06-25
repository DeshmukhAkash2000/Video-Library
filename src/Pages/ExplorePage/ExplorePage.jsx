import React from "react";
import "./features.css";
import { Link } from "react-router-dom";
import { useExploreContext } from "../../Context/ExploreContext";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { GenreFilter } from "../../Component/genre-chips/GenreChips";
import { useFilter } from "../../Context/genreContext";
import { useHistory } from "../../Context/HistoryContext";

export const ExplorePage = () => {
  const { state } = useExploreContext();

  const {
    VideoState: { videosFilter },
    VideoDispatch,
  } = useFilter();
  const {
    dispatchHisory,
  } = useHistory();

  let categoryFilterArray = state.filter(
    (item) => item.category === videosFilter
  );

  if (videosFilter === "All") {
    categoryFilterArray = state;
  }
  return (
    <>
      <div>
        <GenreFilter />
      </div>
      <div className="explore-upper">
        <div>
          {" "}
          <Sidebar />
        </div>
        <div className="explore-main-container">
          {categoryFilterArray.map((item) => (
            <div >
            <Link to={`/SingleVideo/${item.id}`}>
              {" "}
              <div onClick={(()=> dispatchHisory({type:"ADD_TO_HISTORY",payload:item}))} className="explore-card">
                <img
                  className="explore-img"
                  src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                  alt="video"
                />
                <h3 className="video-title">{item.title}</h3>

                <div className="card-lower-section">
                  <div  className="channel-logo-container">
                    <img
                      className="chName"
                      src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2020/06/cropped-Copy-of-aw-1.png?fit=512%2C512&ssl=1"
                      alt=""
                    />
                    <p  className="video-date">{item.chaName}</p>
                  </div>
                  <p className="video-views">{item.views}</p>
                  <p className="video-date">{item.date}</p>
                </div>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
