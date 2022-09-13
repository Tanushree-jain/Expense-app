import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // let handleClick = e =>{
    //     props.updateFunc({
    //         ...props,
    //         title: 'updated',
    //         id: props.id
    //     })
    // }

    return (
       <li> <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button className='btn' onClick={handleClick}>Change Title</button> */}
        </Card>
        </li>
    )
}
export default ExpenseItem