import React, { useState } from 'react';
import styles from "../../../Assets/css/user/league/calenderleague.css";
import { Container, Row, Col, Tab, Tabs, Button, Card, ListGroup, Table, Form, Modal } from 'react-bootstrap';
import { BsDownload, } from 'react-icons/bs'; // Assuming you're using react-icons
import { GiSoccerBall } from "react-icons/gi";
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import HeaderBodyLeague from '../../common/HeaderBodyLeague';
import { useParams } from 'react-router-dom';

export default function CalendarLeague() {
    const [key, setKey] = useState('overview');
    const matches = [
        // Replace this with your actual match data
        { id: '1', team1: "FC Champs", logoteam1: "https://gramotech.net/html/tigers/images/nmf-logo1.png", team2: "Tigers", logoteam2: "https://gramotech.net/html/tigers/images/nmf-logo2.png", round: "Bán kết", date: "22-05-2024", time: "18h00", location: "Rối bời 1 Stadium" },
        { id: '2', team1: "FC Rối Bời 1", logoteam1: "https://gramotech.net/html/tigers/images/nmf-logo1.png", team2: "FC Rối Bời 2", logoteam2: "https://gramotech.net/html/tigers/images/nmf-logo2.png", round: "Bán kết", date: "22-05-2024", time: "18h00", location: "Rối bời 1 Stadium" },
        { id: '3', team1: "FC Champs 1", logoteam1: "https://gramotech.net/html/tigers/images/nmf-logo1.png", team2: "Tigers 2", logoteam2: "https://gramotech.net/html/tigers/images/nmf-logo2.png", round: "Bán kết", date: "22-05-2024", time: "18h00", location: "Rối bời 1 Stadium" },
        { id: '4', team1: "FC Champs 3", logoteam1: "https://gramotech.net/html/tigers/images/nmf-logo1.png", team2: "Tigers 4", logoteam2: "https://gramotech.net/html/tigers/images/nmf-logo2.png", round: "Bán kết", date: "22-05-2024", time: "18h00", location: "Rối bời 1 Stadium" },
        // ...more matches
    ];

    const [reportModalShow, setReportModalShow] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleReportClick = (match) => {
        setSelectedMatch(match);
        setReportModalShow(true);
    };

    const handleClose = () => {
        setReportModalShow(false);
    };

    const handleReportSubmit = () => {
        // Process the report submission here
        // You will need to collect data from the form
        // After processing, you can close the modal
        setReportModalShow(false);
    };


    const [rows, setRows] = useState([{}]); // Khởi tạo với một dòng

    const addRow = () => {
        // Thêm một dòng mới
        setRows([...rows, {}]);
    };
    const [rowsYellowCard, setRowsYellowCard] = useState([{}]); // Khởi tạo với một dòng

    const addRowYellowCard = () => {
        // Thêm một dòng mới
        setRowsYellowCard([...rowsYellowCard, {}]);
    };
    const [rowsRedCard, setRowsRedCard] = useState([{}]); // Khởi tạo với một dòng

    const addRowRedCard = () => {
        // Thêm một dòng mới
        setRowsRedCard([...rowsRedCard, {}]);
    };
    const { idLeague } = useParams();
    return (
        <Container fluid>
            <Header />
            <HeaderBodyLeague idLeague={idLeague} />
            <Container>
                <Row>
                    <Col style={{ padding: "20px" }}>
                        <Tabs
                            activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                            <Tab eventKey="overview" title="Tổng quan">
                                {/* Match cards */}
                                <Card className="mb-4 match-card">
                                    <Card.Header as="h5" className="text-center bg-danger text-white">Bán Kết</Card.Header>
                                    <Card.Body style={{ padding: '0' }}>
                                        <Row style={{ width: "100%", border: "1px solid #ccc", padding: "20px" }}>
                                            <Col xs={4} className="d-flex align-items-center justify-content-center">
                                                <div className="team-info text-center">
                                                    <strong>FC Champs</strong>
                                                </div>
                                                <img src="https://gramotech.net/html/tigers/images/nmf-logo1.png" alt="FC Champs Logo" className="team-logo" />
                                                <span className="score">?</span>
                                            </Col>
                                            <Col xs={4} className="match-details d-flex flex-column justify-content-center align-items-center">
                                                <div className="Tournament">TÊN GIẢI ĐẤU</div>
                                                <div className="time">18h00</div>
                                                <div className="date">22-05-2024</div>
                                                <GiSoccerBall />
                                                <div className="stadium">Rối bời 1 Stadium</div>
                                                <Button variant="link" className="info-button">Thông tin trận đấu</Button>
                                            </Col>
                                            <Col xs={4} className="d-flex align-items-center justify-content-center">
                                                <span className="score">?</span>
                                                <img src="https://gramotech.net/html/tigers/images/nmf-logo2.png" alt="Tigers Logo" className="team-logo" />
                                                <div className="team-info text-center">
                                                    <strong>Tigers</strong>
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row style={{ width: "100%", border: "1px solid #ccc", padding: "20px" }}>
                                            <Col xs={4} className="d-flex align-items-center justify-content-center">
                                                <div className="team-info text-center">
                                                    <strong>FC Champs</strong>
                                                </div>
                                                <img src="https://gramotech.net/html/tigers/images/nmf-logo1.png" alt="FC Champs Logo" className="team-logo" />
                                                <span className="score">?</span>
                                            </Col>
                                            <Col xs={4} className="match-details d-flex flex-column justify-content-center align-items-center">
                                                <div className="Tournament">TÊN GIẢI ĐẤU</div>
                                                <div className="time">18h00</div>
                                                <div className="date">22-05-2024</div>
                                                <GiSoccerBall />
                                                <div className="stadium">Rối bời 1 Stadium</div>
                                                <Button variant="link" className="info-button">Thông tin trận đấu</Button>
                                            </Col>
                                            <Col xs={4} className="d-flex align-items-center justify-content-center">
                                                <span className="score">?</span>
                                                <img src="https://gramotech.net/html/tigers/images/nmf-logo2.png" alt="Tigers Logo" className="team-logo" />
                                                <div className="team-info text-center">
                                                    <strong>Tigers</strong>
                                                </div>

                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                                <Card className="mb-4 match-card">
                                    <Card.Header as="h5" className="text-center bg-danger text-white">Chung kết</Card.Header>
                                    <Card.Body style={{ padding: '0' }}>
                                        <Row style={{ width: "100%", border: "1px solid #ccc", padding: "20px" }}>
                                            <Col xs={4} className="d-flex align-items-center justify-content-center">
                                                <div className="team-info text-center">
                                                    <strong>FC Champs</strong>
                                                </div>
                                                <img src="https://gramotech.net/html/tigers/images/nmf-logo1.png" alt="FC Champs Logo" className="team-logo" />
                                                <span className="score">?</span>
                                            </Col>
                                            <Col xs={4} className="match-details d-flex flex-column justify-content-center align-items-center">
                                                <div className="Tournament">TÊN GIẢI ĐẤU</div>
                                                <div className="time">18h00</div>
                                                <div className="date">22-05-2024</div>
                                                <GiSoccerBall />
                                                <div className="stadium">Rối bời 1 Stadium</div>
                                                <Button variant="link" className="info-button">Thông tin trận đấu</Button>
                                            </Col>
                                            <Col xs={4} className="d-flex align-items-center justify-content-center">
                                                <span className="score">?</span>
                                                <img src="https://gramotech.net/html/tigers/images/nmf-logo2.png" alt="Tigers Logo" className="team-logo" />
                                                <div className="team-info text-center">
                                                    <strong>Tigers</strong>
                                                </div>

                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                {/* More cards */}
                            </Tab>
                            <Tab eventKey="list" title="Danh sách">
                                <Table responsive="sm" striped bordered hover variant="white">
                                    <thead>
                                        <tr>
                                            <th>Đội 1</th>
                                            <th>Đội 2</th>
                                            <th>Vòng đấu</th>
                                            <th>Ngày thi đấu</th>
                                            <th>Thời gian</th>
                                            <th>Địa điểm</th>
                                            <th colSpan="2">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {matches.map((match, index) => (
                                            <tr key={index}>
                                                <td style={{ textAlign: 'left' }}><img src={match.logoteam1} alt={match.team1} className="team-logo" /> {match.team1}</td>
                                                <td style={{ textAlign: 'left' }}><img src={match.logoteam2} alt={match.team2} className="team-logo" /> {match.team2}</td>
                                                <td>{match.round}</td>
                                                <td>{match.date}</td>
                                                <td>{match.time}</td>
                                                <td style={{ textAlign: 'left' }}>{match.location}</td>
                                                <td><Button variant="danger" onClick={() => handleReportClick(match)}>
                                                    Gửi báo cáo
                                                </Button></td>
                                                <td><Button variant="danger"><BsDownload /> Tải báo cáo</Button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="downloadschedule" title="Tải lịch thi đâu">
                                <Button variant="danger">
                                    <BsDownload /> Tải lịch thi đấu
                                </Button>
                            </Tab>
                        </Tabs>
                        <Modal show={reportModalShow} onHide={handleClose} className="custom-modal-width" style={{ maxWidth: '100%' }}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gửi Báo Cáo Trận Đấu</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {selectedMatch && (
                                    <>
                                        <Row style={{ padding: "20px" }}>
                                            <Col>
                                                <div style={{ fontWeight: '600' }}>I. Thông tin về trận đấu</div>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col >
                                                        Giải bóng đá: Giải đấu rối bời nhất
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col xs={5}>
                                                        Đội 1: {selectedMatch.team1}
                                                    </Col>
                                                    <Col xs={5}>
                                                        Đội 2: {selectedMatch.team2}
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col xs={5}>
                                                        Sân thi đấu: {selectedMatch.location}
                                                    </Col>
                                                    <Col xs={3}>
                                                        Ngày: {selectedMatch.date}
                                                    </Col>
                                                    <Col xs={2}>
                                                        Giờ: {selectedMatch.time}
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col xs={5}>
                                                        Kết quả:
                                                        <input type='number' style={{ width: "80px" }} placeholder='Đội 1' />
                                                        -
                                                        <input type='number' style={{ width: "80px" }} placeholder='Đội 2' />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col >
                                                        Luân lưu (Nếu không có điền 0-0):
                                                        <input type='number' style={{ width: "80px" }} placeholder='Đội 1' />
                                                        -
                                                        <input type='number' style={{ width: "80px" }} placeholder='Đội 2' />
                                                    </Col>

                                                </Row>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col >
                                                        Thời gian bù giờ: <br />
                                                        <input type='number' style={{ width: "80px" }} placeholder='Hiệp 1' /> -
                                                        <input type='number' style={{ width: "80px" }} placeholder='Hiệp 2' />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginBottom: '10px' }}>
                                                    <Col>
                                                        Trọng tài chính:<input type='text' />
                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                        <Row style={{ padding: "20px" }}>
                                            <Col>
                                                <div style={{ fontWeight: '600' }}>II. Số liệu chuyên môn:</div>
                                                <Row style={{ display: "flex", justifyContent: 'center' }}>
                                                    <Col xs={5} className='bd_up bd_right bd_left'>
                                                        Đội 1: Rối Bời 1
                                                    </Col>
                                                    <Col xs={5} className='bd_up bd_right'>
                                                        Đội 2: Rối Bời 2
                                                    </Col>
                                                </Row>
                                                <Row style={{ display: "flex", justifyContent: 'center' }}>
                                                    <Col
                                                        xs={10}
                                                        style={{ textAlign: "center" }}
                                                        className='bd_up bd_right bd_left bd_bottom'>
                                                        Cầu thủ ghi bàn
                                                    </Col>

                                                </Row>
                                                <Row style={{ display: "flex", justifyContent: 'center', marginBottom: '10px' }}>
                                                    <Col
                                                        xs={5}
                                                        style={{ padding: '0' }}
                                                    >
                                                        <Table bordered >
                                                            <thead>
                                                                <tr>
                                                                    <th>Phút</th>
                                                                    <th>Số áo</th>
                                                                    <th>Tên cầu thủ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {rows.map((_, index) => (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='text' style={{ width: "200px" }} />
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                        <Button onClick={addRow}>Thêm</Button>
                                                    </Col>
                                                    <Col
                                                        xs={5}
                                                        style={{ padding: '0' }}
                                                    >
                                                        <Table bordered >
                                                            <thead>
                                                                <tr>
                                                                    <th>Phút</th>
                                                                    <th>Số áo</th>
                                                                    <th>Tên cầu thủ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {rows.map((_, index) => (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='text' style={{ width: "200px" }} />
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                    </Col>

                                                </Row>

                                                {/* Thẻ vàng */}
                                                <Row style={{ display: "flex", justifyContent: 'center' }}>
                                                    <Col
                                                        xs={10}
                                                        style={{ textAlign: "center" }}
                                                        className='bd_up bd_right bd_left '>
                                                        Thẻ vàng
                                                    </Col>

                                                </Row>
                                                <Row style={{ display: "flex", justifyContent: 'center', marginBottom: '10px' }}>
                                                    <Col
                                                        xs={10}
                                                        style={{ padding: '0' }}
                                                    >
                                                        <Table bordered >
                                                            <thead>
                                                                <tr>
                                                                    <th>Phút</th>
                                                                    <th>Số áo</th>
                                                                    <th>Tên cầu thủ</th>
                                                                    <th>CLB</th>
                                                                    <th>Lý do</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {rowsYellowCard.map((_, index) => (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='text' style={{ width: "200px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <select style={{ width: '100px', height: '30px' }}>
                                                                                <option value="team1">{selectedMatch.team1}</option>
                                                                                <option value="team2">{selectedMatch.team2}</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <input type='text' style={{ width: "300px" }} placeholder='Ghi ngắn gọn lí do' />
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                        <Button onClick={addRowYellowCard}>Thêm</Button>
                                                    </Col>



                                                </Row>
                                                {/* Thẻ đỏ */}
                                                <Row style={{ display: "flex", justifyContent: 'center' }}>
                                                    <Col
                                                        xs={10}
                                                        style={{ textAlign: "center" }}
                                                        className='bd_up bd_right bd_left '>
                                                        Thẻ đỏ
                                                    </Col>

                                                </Row>
                                                <Row style={{ display: "flex", justifyContent: 'center', marginBottom: '10px' }}>
                                                    <Col
                                                        xs={10}
                                                        style={{ padding: '0' }}
                                                    >
                                                        <Table bordered >
                                                            <thead>
                                                                <tr>
                                                                    <th>Phút</th>
                                                                    <th>Số áo</th>
                                                                    <th>Tên cầu thủ</th>
                                                                    <th>CLB</th>
                                                                    <th>Lý do</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {rowsRedCard.map((_, index) => (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='number' style={{ width: "50px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <input type='text' style={{ width: "200px" }} />
                                                                        </td>
                                                                        <td>
                                                                            <select style={{ width: '100px', height: '30px' }}>
                                                                                <option value="team1">{selectedMatch.team1}</option>
                                                                                <option value="team2">{selectedMatch.team2}</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <input type='text' style={{ width: "300px" }} placeholder='Ghi ngắn gọn lí do' />
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                        <Button onClick={addRowRedCard}>Thêm</Button>
                                                    </Col>



                                                </Row>
                                                <Row>
                                                    <Col>
                                                        Người tạo báo cáo: <input type='text' />
                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                    </>

                                )}


                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                                <Button variant="primary" onClick={handleReportSubmit}>
                                    Gửi Báo Cáo
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>

    );
}
