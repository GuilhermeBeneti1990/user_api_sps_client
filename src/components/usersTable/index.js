import { Table, Button } from "react-bootstrap";

export default function UserTable({ users, onView, onEdit, onDelete }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button variant="success" onClick={() => onView(user)} style={{ marginRight: '10px' }}>
                                Details
                            </Button> 
                            <Button variant="secondary" onClick={() => onEdit(user)} style={{ marginRight: '10px' }}>
                                Update
                            </Button> 
                            <Button variant="danger" onClick={() => onDelete(user.id)}>
                                Remove
                            </Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}
