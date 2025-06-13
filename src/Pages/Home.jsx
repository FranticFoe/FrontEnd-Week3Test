
import { Col, Container, Row, Card } from "react-bootstrap";
import { useSelector } from "react-redux";



function CardGroup() {
    const todos = useSelector((state) => state.todos);

    return todos.map((todo) => (
        <Col md={4} key={todo.id}>
            <Card>
                <Card.Title className="p-3 text-light bg-dark">
                    {todo.title}
                </Card.Title>
                <Card.Body>
                    <Card.Text>{todo.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {todo.status ? "completed" : "not completed"}
                </Card.Footer>
            </Card>
        </Col>
    ))
}

export default function Home() {

    return (
        <Container>
            <h1 className="my-3"> Your todos </h1>
            <Row>
                <CardGroup />
            </Row>
        </Container>
    )
}

