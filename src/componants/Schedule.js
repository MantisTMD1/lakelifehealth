import Table from 'react-bootstrap/Table';
import '../styles/Schedule.css';

const ScheduleComponant = () => {
    return (


        <div className="storehours">
            <h1 id="hours">Hours of Operation</h1>
            <Table striped="columns" id="table-font">
                <thead>
                    <tr>

                        <th id = "days">Day</th>
                        <th id = "days">Hours</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>8:00 am - 5:00 pm (Stone Lake Location)</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>By appointment only</td>

                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>By appointment only</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>By appointment only</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>7:00 am- 5:00 pm (Rice Lake Location)</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Closed</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </Table>
        </div>


    );

}

export default ScheduleComponant;