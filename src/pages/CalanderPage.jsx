import React from 'react'
import "./Calanderpage.css"
const CalanderPage = () => {
    return (
        <div className="cal">
            <div className="hed">
                <h1>Our 2081 Calander</h1>
            </div>
            <div className="cala">
                <div className="row1">
                    <div className="cal1"><img src="./calander1.jpg" alt="Baishak, Jestha" /></div>
                    <div className="cal2"><img src="./calander2.jpg" alt="Ashad, Shrawam" /></div>
                    <div className="cal3"><img src="./calander3.jpg" alt="Vadra, Ashoj" /></div>
                </div>
                <div className="row2">

                    <div className="cal4"><img src="./calander4.jpg" alt="Kartik, Mangsir" /></div>
                    <div className="cal5"><img src="./calander5.jpg" alt="Poush, Magh" /></div>
                    <div className="cal6"><img src="./calander6.jpg" alt="Falgun, Chaitra" /></div>
                </div>
            </div>

        </div>
    )
}

export default CalanderPage
