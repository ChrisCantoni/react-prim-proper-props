import GuestPerson from '../GuestPerson/GuestPerson';

const GuestList = (props) => {
    
    return (
        <div>
            <h2>Guest List</h2>
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Kid's Meal</th>
                </tr>
            </thead>
            <tbody>
                {props.guestList.map(guest => (
                    <GuestPerson getGuests={props.getGuests} key={guest.id} guestList={props.guestList} guest={guest}/>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default GuestList;