import React from 'react'

 const History = () => {

    const order = [
        {
            id: "1",
            title: "Date",
            date: "Oct. 21, 2021",
            type: "Pro Annual",
            receipt: "Download"
        },

        {
            id: "2",
            title: "Type",
            date: "Oct. 21, 2021",
            type: "Pro Annual",
            receipt: "Download"
        },
        {
            id: "3",
            title: "Receipt",
            date: "July. 21, 2021",
            type: "Sponsored Post",
            receipt: "Download"
        }
        ,
        {
            id: "4",
            date: "Jun. 21, 2021",
            type: "Sponsored Post",
            receipt: "Download"
        }
    ]
  return (
    <div>
        <h3>Order History</h3>
        <h4>Manage billing information and view receips</h4>

        <div className='table'>
           
            {
                order.map((history) => {
                    return(
                        <div className='flex'>
                            <header>
                                <p>{history.title}</p>
                            </header>
                            {/* <div>{history.date}</div> */}


                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default History
