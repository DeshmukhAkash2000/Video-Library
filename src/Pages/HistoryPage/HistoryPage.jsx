import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { useHistory } from "../../Context/HistoryContext";
import { Link } from "react-router-dom";
// import "./features.css"

const HistoryPage = () => {
    const {
        stateHistory: { history }, dispatchHisory
    } = useHistory();
  
    return (
      <div className="main-watchlater-container">
          <div>
            <Sidebar />
          </div>
          <div>
            {history.length === 0 ? (
            <div className="watchlater-pre-text">
              <Link  to="/ExplorePage">
                <h2>History is Clear !</h2>
                <button className="watchlater-explore-btn">Explore Now...</button>
              </Link>
            </div>
            ) : (
              <>
             <div className="clear-history-btn-container">
              <button className="clear-history-btn" onClick={()=>dispatchHisory({type:"CLEAR_HISTORY"})}>Clear History</button>
             </div>
              <div className="history-explore-main-container">
                {history.map((item) => {
                  return (
                    <div>
                      <Link to={`/SingleVideo/${item.id}`}>
                        <div className="explore-card">
                          <img
                            className="explore-img"
                            src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                            alt=""
                          />
                          <p className="video-title">{item.title}</p>
                          <div className="card-lower-section">
                            <div className="channel-logo-container">
                              <img
                                className="chName"
                                src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2020/06/cropped-Copy-of-aw-1.png?fit=512%2C512&ssl=1"
                                alt=""
                              />
                              <p className="video-date">{item.chaName}</p>
                            </div>
                            <p className="video-date">{item.views}</p>
                            <p className="video-date">{item.date}</p>
                          </div>
                        </div>
                      </Link>
                      <button className="remove-from-watchlater-btn" onClick={()=>dispatchHisory({type:"REMOVE_FROM_HISTORY", payload:item})}>Remove from History</button>
                    </div>
                  );
                })}
              </div></>
            )}
          </div>
      </div>
    );
  };
  export { HistoryPage };
  