import React from 'react'


const Transaction = (props) => {

    const {
        className,
        transaction,
        budget,
        closeButtonHidden,
        onDeleteButtonClick,

    } = props;



    const sign = transaction.amount < 0 ? '-': '+';
    const color = transaction.amount < 0 ? 'material-symbols-rounded text-red-600' : 'material-symbols-rounded text-blue-600'
    const trash = "material-symbols-rounded cursor-pointer text-slate-500 rounded-full flex flex-row items-center justify-center hover:bg-red-300"




  return (
        <>
            <div className={'TransactionBox hover:drop-shadow-2xl ' + className}>
                {!!budget && <p>{budget.category}</p>}
                <li className='TransactionList' >
                        {!closeButtonHidden && <span onClick={onDeleteButtonClick} className={trash}>close</span>}
                        <div>
                        <span className="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center"> {transaction.amount < 0 ? 'outBox':'move_to_inbox'}</span>
                        </div>
                        <div className='transaction'>
                            <span className=' max-w-10 text-xl font-semibold hover:text-blue-500 truncate'>{transaction.name}</span>
                            <span className=' text-sm font-light'>11/12/2023</span>
                        </div>

                        <div className=' flex flex-row items-center justify-center space-x-1'>
                            <span className={color}> {transaction.amount < 0 ? 'do_not_disturb_on':'add_box'}</span>
                            <span>{sign}${Math.abs(transaction.amount)}</span>
                        </div>
                </li>

            </div>
        </>
         )
}


export default Transaction;