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
        <p className='order'>Order History</p>
        <p className='receips'>Manage billing information and view receips</p>

        <div className='table'>
            <header className='flex'>
                <p>Date</p>
                <p>Type</p>
                <p>Receipt</p>
            </header>

            <main>
                <p>Oct. 21, 2021</p>
                <p>Pro Annual</p>
                <p>Download</p>
            </main>

            <main>
                <p>Oct. 21, 2021</p>
                <p>Pro Annual</p>
                <p>Download</p>
            </main>
            <main>
                <p>July. 21, 2021</p>
                <p>Pro Annual</p>
                <p>Download</p>
            </main>
            <main>
                <p>June. 21, 2021</p>
                <p>Pro Annual</p>
                <p>Download</p>
            </main>

            <p className='more'>Learn more</p>
           
            
        </div>
    </div>
  )
}

export default History


/**{
                order.map((history) => {
                    return(
                        <div className=''>
                            <header className="f">
                                <p>{history.title}</p>
                            </header>

                            <div>{history.date} {history.type} {history.receipt}</div>
                            


                            
                        </div>
                    )
                })
            } */