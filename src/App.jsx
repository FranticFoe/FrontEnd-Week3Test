import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AddTodo from "./Pages/AddTodo";
import Home from "./pages/Home";
import ErrorPage from "./Pages/ErrorPage";

function Layout() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Todo App </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add">Add Todo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="add" element={<AddTodo />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
