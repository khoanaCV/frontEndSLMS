import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Card, ListGroup, Image, Badge, Modal, ListGroupItem, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSoccerBall, faSquare, faCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import HeaderBodyLeague from '../../common/HeaderBodyLeague';

const fakeData = {
    teamInfo: {
        logo: 'example',
        name: "CĐ Augustino Thanh Thuỷ",
        representative: "Nguyễn Hoàng",
        linked: true,
        achievements: "View More",
        matchesPlayed: 7,
        stats: { wins: 5, draws: 2, losses: 0 }
    },
    players: [
        {
            id: 1,
            name: "QUANG TỤNG",
            position: "Thủ môn",
            number: 1,
            avatar: 'https://html.com/wp-content/uploads/flamingo.jpg',
            scores: 0,
            yellows: 1,
            reds: 0
        },
        {
            id: 2,
            name: "QUANG TỤNG",
            position: "Goalkeeper",
            number: 1,
            avatar: 'https://html.com/wp-content/uploads/flamingo.jpg',
            scores: 0,
            yellows: 1,
            reds: 0
        },
        {
            id: 3,
            name: "QUANG TỤNG",
            position: "Goalkeeper",
            number: 1,
            avatar: 'https://html.com/wp-content/uploads/flamingo.jpg',
            scores: 0,
            yellows: 1,
            reds: 0
        },
        {
            id: 4,
            name: "QUANG TỤNG",
            position: "Goalkeeper",
            number: 1,
            avatar: 'https://html.com/wp-content/uploads/flamingo.jpg',
            scores: 0,
            yellows: 1,
            reds: 0
        },
        // More players...
    ],
    matches: [
        {
            id: "8640611",
            date: "19:30 08/10/2023",
            teams: [
                {
                    name: "CĐ Vinh - Hà Tĩnh",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
                    score: 2,
                    subscore: 9,
                    yellowCards: 1,
                    redCards: 0,
                },
                {
                    name: "CĐ Augustino Thanh Thuỷ",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
                    score: 2,
                    subscore: 10,
                    yellowCards: 2,
                    redCards: 0,
                }
            ],
            location: "Chưa cập nhật",
            phase: "chung kết",
            matchDetailLink: "example",
            matchPublicationLink: "example",
            events: [
                { time: "10'", detail: "Goal by Anton Phạm Quốc Chung", team: 1 },
                { time: "35'", detail: "Yellow card to Giuse Nguyễn Văn Huấn", team: 1 },
                { time: "50'", detail: "Goal by QUỐC ST", team: 2 },
                { time: "75'", detail: "Yellow card to QUÂN TÍP", team: 2 },
                // More events...
            ]
        },
        // Additional matches can be added here following the same structure.
    ]
};

const TeamOverview = () => {
    const { teamInfo } = fakeData;
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col sm={12}>
                        <div className="competitor-info">
                            <Image
                                className="competitor-info__img"
                                src="https://html.com/wp-content/uploads/flamingo.jpg" // Change this to actual image source if needed
                                roundedCircle
                            />
                            <div className="competitor-info__des">
                                <h4>
                                    <a href="https://html.com/wp-content/uploads/flamingo.jpg">
                                        <span className="name">{teamInfo.name}</span>
                                    </a>
                                </h4>
                                <div className="flex extend">
                                    <div className="small competitor-info__manager flex-item">
                                        <p className="label">Người đại diện</p>
                                        <p className="value">{teamInfo.representative}</p>
                                    </div>
                                    <div className="small competitor-info__manager flex-item">
                                        <p className="label">Liên kết đội</p>
                                        <p className="value">
                                            <Badge bg="success" text="light">
                                                Đã liên kết <FontAwesomeIcon icon={faAngleRight} />
                                            </Badge>
                                        </p>
                                    </div>
                                    <div className="small competitor-info__manager flex-item">
                                        <p className="label">Thành tích</p>
                                        <div className="value">
                                            <a href="https://html.com/wp-content/uploads/flamingo.jpg" target="_blank">
                                                Xem thêm <FontAwesomeIcon icon={faAngleRight} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="small competitor-info__manager flex-item">
                                        <p className="label">Số trận đã chơi</p>
                                        <p className="value">{teamInfo.matchesPlayed} trận</p>
                                    </div>
                                    <div className="small competitor-info__manager flex-item">
                                        <p className="label">thắng - hòa - thua</p>
                                        <div className="value">
                                            <Badge bg="success">{teamInfo.stats.wins}</Badge> -
                                            <Badge bg="warning">{teamInfo.stats.draws}</Badge> -
                                            <Badge bg="danger">{teamInfo.stats.losses}</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const PlayerInfo = ({players}) => {
    return (
        <Row>
            {players.map((player, index) => (
                <Col sm={6} key={player.id}>
                    <Card className="mb-3">
                        <Card.Header as="h5">{player.name}</Card.Header>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <div className="d-flex">
                                    <Image
                                        src={player.avatar}
                                        roundedCircle
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        className="mr-3"
                                    />
                                    <div>
                                        <Card.Title>{player.name}</Card.Title>
                                        <Card.Text>Vị trí thi đấu: {player.position}</Card.Text>
                                        <Card.Text>Số áo: {player.number}</Card.Text>
                                    </div>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ul className="list-inline">
                                    <li className="list-inline-item">{player.scores} <i className="fa fa-soccer-ball-o"></i></li>
                                    <li className="list-inline-item">{player.yellows} <span className="card card--yellow"></span></li>
                                    <li className="list-inline-item">{player.reds} <span className="card card--red"></span></li>
                                </ul>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

const MatchList = ({ matches }) => {
    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleMatchSelect = (match) => {
        setSelectedMatch(match);
    };

    const handleCloseModal = () => {
        setSelectedMatch(null);
    };

    return (
        <>
            {matches.map((match) => (
                <Card key={match.id} className="mb-3" onClick={() => handleMatchSelect(match)}>
                    <Card.Header as="h5">{match.phase.toUpperCase()}</Card.Header>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={match.teams[0].logo} alt={`Logo of ${match.teams[0].name}`} width="30" height="30" />
                                    <strong className="ml-2">{match.teams[0].name}</strong>
                                </div>
                                <div>
                                    <span className="badge badge-primary badge-pill mr-2">
                                        {match.teams[0].score} - {match.teams[1].score}
                                    </span>
                                    <span className="badge badge-secondary badge-pill">
                                        {match.teams[0].subscore} - {match.teams[1].subscore}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <strong className="mr-2">{match.teams[1].name}</strong>
                                    <img src={match.teams[1].logo} alt={`Logo of ${match.teams[1].name}`} width="30" height="30" />
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <small className="text-muted">{match.date}</small>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            ))}
            {selectedMatch && <MatchDetailModal match={selectedMatch} handleClose={handleCloseModal} />}
        </>
    );
};

const MatchDetailModal = ({ match, handleClose }) => {
    const eventItems = match.events.map((event, index) => (
        <div key={index} style={{ marginBottom: '35px' }}>
            <p>{event.detail} ({event.time})</p>
        </div>
    ));

    return (
        <Modal show={!!match} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Match Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{match.teams[0].name} vs {match.teams[1].name}</h5>
                <p>Date: {match.date}</p>
                <p>Location: {match.location}</p>
                <p>Phase: {match.phase}</p>
                <div>{eventItems}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default function DetailsTeams() {
    const [activeKey, setActiveKey] = useState('matches');
    return (
        <Container fluid>
            <Header/>
            <HeaderBodyLeague/>
            <Container>
            <Row>
                <Col>
                    {/* Phần thông tin tổng quan của đội */}
                    <TeamOverview />
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* Nav tabs */}
                    <Tab.Container id="team-details-tabs" defaultActiveKey={activeKey} onSelect={setActiveKey}>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="matches">Trận đấu</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="players">Vận động viên</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="matches">
                                {/* Danh sách trận đấu */}
                                <MatchList matches={fakeData.matches} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="players">
                                {/* Thông tin cầu thủ */}
                                <PlayerInfo players={fakeData.players}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
            </Container>
            <Footer/>
        </Container>
    
    );
}

