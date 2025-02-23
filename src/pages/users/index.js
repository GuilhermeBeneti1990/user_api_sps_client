import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import UserModal from "../../components/userModal";
import UserModalDetail from "../../components/userModalDetail";
import UserTable from "../../components/usersTable";
import * as userService from "../../services/users";
import LogoffButton from "../../components/logoffBtn";

export default function User() {
    const authToken = localStorage.getItem("token");
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({ id: '', name: '', email: '', password: '' });
    const [openModal, setOpenModal] = useState(false);
    const [openModalDetail, setOpenModalDetail] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const data = await userService.getUsers(authToken);
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const getDetails = async (user) => { 
        try {
            const data = await userService.getUser(authToken, user.id);
            setCurrentUser({
                id: data.id,
                name: data.name,
                email: data.email,
            });
            openModalDetailHandler();
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const getUser = async (user) => {
        try {
            const data = await userService.getUser(authToken, user.id);
            setCurrentUser({
                id: data.id,
                name: data.name,
                email: data.email,
            });
            openModalHandler();
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const createUser = async (user) => {
        try {
            await userService.createUser(authToken, user);
            getUsers();
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const updateUser = async (user) => {
        try {
            await userService.updateUser(authToken, user);
            getUsers();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const deleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await userService.deleteUser(authToken, id);
                getUsers();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    const handleUserChange = (field, value) => {
        setCurrentUser(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        if (!currentUser.id) {
            createUser(currentUser);
        } else {
            updateUser(currentUser);
        }
        closeModalHandler();
    };

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const openModalDetailHandler = () => {
        setOpenModalDetail(true);
    }

    const closeModalHandler = () => {
        setOpenModal(false);
    };

    const closeModalDetailHandler = () => {
        setOpenModalDetail(false);
    };

    return (
        <>
            <UserModal
                show={openModal}
                onHide={closeModalHandler}
                user={currentUser}
                onSubmit={handleSubmit}
                onChange={handleUserChange}
            />
            <UserModalDetail
                show={openModalDetail}
                onHide={closeModalDetailHandler}
                user={currentUser}
            />
            <Button 
                style={{ margin: "0 0 20px 0" }} 
                variant="primary" 
                onClick={() => {
                    setCurrentUser({ id: '', name: '', email: '', password: '' });
                    openModalHandler();
                }}
            >
                New User
            </Button>
            <UserTable 
                users={users}
                onView = {(id) => getDetails(id)}
                onEdit={(id) => getUser(id)} 
                onDelete={(id) => deleteUser(id)}
            />
            <hr />
            <div className="d-flex justify-content-end">
                <LogoffButton />
            </div>
        </>
    );
}
