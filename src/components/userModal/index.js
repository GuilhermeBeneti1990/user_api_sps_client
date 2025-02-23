import { Modal, Button } from "react-bootstrap";
import UserForm from "../userForm";

export default function UserModal({ show, onHide, user, onSubmit, onChange }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* TODO verify why user is coming wrapped as an id object */}
                <UserForm user={user.id} onSubmit={onSubmit} onChange={onChange} detail={false} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
