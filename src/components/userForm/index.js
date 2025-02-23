import { Form, Button } from "react-bootstrap";

export default function UserForm({ user, onSubmit, onChange, detail }) {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                {
                detail ? <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    value={user.name} 
                    onChange={(e) => onChange('name', e.target.value)}
                    disabled
                />
                : 
                <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    value={user.name} 
                    onChange={(e) => onChange('name', e.target.value)}
                />
                }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                {
                detail ? <Form.Control 
                    type="text" 
                    placeholder="Email" 
                    value={user.email} 
                    onChange={(e) => onChange('email', e.target.value)}
                    disabled
                />
                : 
                <Form.Control 
                    type="text" 
                    placeholder="Email" 
                    value={user.email} 
                    onChange={(e) => onChange('email', e.target.value)}
                />
                }
            </Form.Group>
                
            <Form.Group className="mb-3">
                {
                detail ? null
                :
                <>
                    <Form.Label>Password</Form.Label> 
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={user.password} 
                        onChange={(e) => onChange('password', e.target.value)}
                    />
                </>
                }
            </Form.Group>

            {detail ? null : 
            <Button variant="primary" onClick={onSubmit}>
                Save
            </Button>}
        </Form>
    );
}
