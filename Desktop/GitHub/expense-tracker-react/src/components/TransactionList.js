import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); 
    return (
        <>
           <h3>History</h3>
           <ul id="list" className="list">
               {/* Render a transaction component and pass it a prop */}
               {transactions.map(transaction => (<Transaction key={transaction.id} transaction= {transaction} />))}
            </ul> 
        </>
    )
}
