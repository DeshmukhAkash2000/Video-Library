import {useFilter} from "../../Context/genreContext"
import "./GenreChips.css";

const GenreFilter = () =>{
    const {VideoDispatch } = useFilter();
    


    const filters = ["All","Personal Finance","Geopolitics","Psychology","Taxes","Investment"]
    return(
        <div>
            <ul className="btn-list">
                {filters.map((item)=>
                <div>
                    <button className="category-btn" onClick={() =>
                VideoDispatch({ type: "FILTER_BY_GENRE", payload: item })
              }>
                        {item}
                    </button>
                </div>)}
            </ul>
        </div>
    )
}

export{GenreFilter}