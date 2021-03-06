import React, {useEffect, useState} from "react";
import UpcomingTicketPurchase from "./UpcomingTicketPurchase";
import {getAllBuyerTransactions} from "../../../services/transactionService"

const UpcomingEvents = ( {currentUser} ) => {

    const [buyerTransactions, setBuyerTransactions] = useState([]);
    useEffect(() => {getAllBuyerTransactions().then(results => setBuyerTransactions(results))}, [])

    return (
        <>
            <div className="card">
                <h3 className="card-header h4">Your Upcoming Events</h3>
                <ul className="list-group list-group-flush">
                    {
                        buyerTransactions.length > 0 ? (buyerTransactions.map(event => {
                            return (<UpcomingTicketPurchase currentUser={currentUser} eventBought={event.eventID} purchaseDetails={ {qty: event.qty, price:event.price} } key={buyerTransactions._id}/>);
                        })) : <li className="list-group-item">No Tickets Have Been Bought Yet</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default UpcomingEvents;