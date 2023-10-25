import axios from 'axios';

const GuestPerson = (props) => {
    
    const clickHandler = () => {
        console.log(props.guest.id);
        axios.delete(`/guests/${props.guest.id}`)
        .then((response) => {
            console.log('DELETE /guest successful');
            // TODO HERE
            props.getGuests();
        })
        .catch((error) => {
            console.error('DELETE guest did not work', error);
            alert('DELETE guest failed');
        })
    }
    
    return (
        <tr key={props.guest.id}>
            <td>{props.guest.name}</td>
            <td>{String(props.guest.kidsMeal)}</td>
            <td><button onClick={clickHandler}>Delete</button></td>
        </tr>
    )
}

export default GuestPerson;