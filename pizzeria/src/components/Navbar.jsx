import Button from 'react-bootstrap/Button';

const Navbar = () =>{
    const total = 25000;
    const token = false;
    
    return (
        <>
            <Button>🍕 Home</Button>
            {token ? 
                <>
                    <Button>🔒 Profile</Button>
                    <Button>🔒 Logout</Button>
                </> : 
                <>
                    <Button>🔐 Login</Button> 
                    <Button>🔐 Register</Button>
                </>
            }    
            <Button>🛒 Total ${total.toLocaleString('es-CL')}</Button>
        </>
    );
}

export default Navbar;