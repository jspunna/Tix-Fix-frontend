import React, {useEffect, useState} from "react";
import {getSellerInfo} from "../../../services/sellService";
import SellerWishListItem from "./SellerWishListItem";

const SellerWishList = () => {

    const [eventsWatching, setEventsWatching] = useState([]);
    useEffect(() => {getSellerInfo().then(results => {setEventsWatching(results.eventsWatchlist)})}, []);

    return (
        <>
            <div className="card mt-4">
                <h3 className="card-header h4">Sell Watch List</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsWatching.length > 0 ? (eventsWatching.map(eventID => {
                            return (<SellerWishListItem eventID={eventID} key={eventID}/>);
                        })) : <li className="list-group-item">Nothing Currently In Watch List</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default SellerWishList;