import React from 'react';
import styles from "../../../Assets/css/user/lineup/createteam.css"
import classNames from "classnames/bind";
import { Container, Row, Col, Card, Button, Form, DropdownButton, Dropdown, ToggleButton } from 'react-bootstrap';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import images from "../../../Assets/images";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Popup from "../../common/Popup";
import { toast } from "react-toastify";
import FootballField from './FootballField';
import { jwtDecode } from 'jwt-decode';
import { getPlayerByTeamId, getTeamsByUserId } from '../../../services/TeamSevice';
import { faDownload } from '@fortawesome/free-solid-svg-icons';




const cx = classNames.bind(styles);


const downloadImage = (canvas, filename) => {
    // Chắc chắn canvas đã được vẽ xong
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = filename;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    }, 'image/jpeg', 0.95); // Sử dụng chất lượng 95% cho jpg
};


const CreateSquad = () => {

    const [teamName, setTeamName] = useState('');
    const [formationName, setFormationName] = useState('');
    const [playerCount, setPlayerCount] = useState('11');
    const [matchType, setMatchType] = useState('4-4-2 D');
    const [visibility, setVisibility] = useState('Công Khai');

    const [players, setPlayers] = useState([

        // Add the rest of the players similarly...
    ]);

    const addNewPlayer = () => {
        const newId = players.length + 1;
        const newPlayer = {
            id: newId,
            name: `Cầu thủ ${newId}`,
            position: 'Tiền đạo',
            number: newId.toString(),
            active: false,
            x: 10,
            y: 90
        };
        setPlayers([...players, newPlayer]); // Cập nhật danh sách cầu thủ
    };
    const onPlayersChange = (newPlayersCallback) => {
        setPlayers(newPlayersCallback);
    };

    const handleNameChange = (id, newName) => {
        setPlayers(players.map(player => {
            if (player.id === id) {
                return { ...player, name: newName };
            }
            return player;
        }));
    };

    const handlePositionChange = (id, newPosition) => {
        setPlayers(players.map(player => {
            if (player.id === id) {
                return { ...player, position: newPosition };
            }
            return player;
        }));
    };

    const toggleActive = (id) => {
        setPlayers(players.map(player => {
            if (player.id === id) {
                return { ...player, active: !player.active };
            }
            return player;
        }));
    };
    const handleNumberChange = (id, newNumber) => {
        setPlayers(players.map(player => {
            if (player.id === id) {
                return { ...player, number: newNumber.toString() };
            }
            return player;
        }));
    };

    const updatePlayerList = (playerCount) => {
        const newPlayerCount = parseInt(playerCount, 10); // Chuyển đổi sang số nguyên
        let updatedPlayers = players.map((player, index) => {
            // Kích hoạt N cầu thủ đầu tiên và vô hiệu hóa những người còn lại nếu vượt quá số lượng mới
            if (index < newPlayerCount) {
                return { ...player, active: true };
            } else {
                return { ...player, active: false };
            }
        });
        setPlayers(updatedPlayers);
    };

    // xử lý việc tải về
    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            downloadImage(canvas, 'team-setup.jpg');
        } else {
            toast.error('Không thể tải về hình ảnh.');
        }
    };

    //call api
    const currentToken = localStorage.getItem('token');
    //Mã hoá token
    const dataDecoded = jwtDecode(currentToken);
    const currentId = dataDecoded.id;

    const [teamInfo, setTeamInfo] = useState([]);
    useEffect(() => {
        getTeamsByUserId(currentId)
            .then(data => {
                setTeamInfo(data);
            })
            .catch(error => {
                console.error("Failed to fetch teams:", error);
            });
    }, [currentId]);

    const [selectedTeamId, setSelectedTeamId] = useState(0);
    console.log(selectedTeamId);
    useEffect(() => {
        const teamId = parseInt(selectedTeamId, 10);
        if (teamId === 0) {
            // Đặt lại danh sách cầu thủ với danh sách mặc định
            setPlayers([
                { id: 1, name: 'Cầu thủ 1', position: 'Thủ Môn', number: '1', active: false, x: 50, y: 90 }, // Gần phía dưới cùng
                { id: 2, name: 'Cầu thủ 2', position: 'Hậu Vệ', number: '2', active: false, x: 15, y: 70 },
                { id: 3, name: 'Cầu thủ 3', position: 'Hậu Vệ', number: '3', active: false, x: 85, y: 70 },
                { id: 4, name: 'Cầu thủ 4', position: 'Hậu Vệ', number: '4', active: false, x: 30, y: 75 },
                { id: 5, name: 'Cầu thủ 5', position: 'Hậu Vệ', number: '5', active: false, x: 70, y: 75 },
                { id: 6, name: 'Cầu thủ 6', position: 'Tiền Vệ', number: '6', active: false, x: 20, y: 50 },
                { id: 7, name: 'Cầu thủ 7', position: 'Tiền Vệ', number: '7', active: false, x: 50, y: 65 },
                { id: 8, name: 'Cầu thủ 8', position: 'Tiền Vệ', number: '8', active: false, x: 80, y: 50 },
                { id: 9, name: 'Cầu thủ 9', position: 'Tiền Vệ', number: '9', active: false, x: 50, y: 35 },
                { id: 10, name: 'Cầu thủ 10', position: 'Tiền Đạo', number: '10', active: false, x: 30, y: 10 },
                { id: 11, name: 'Cầu thủ 11', position: 'Tiền Đạo', number: '11', active: false, x: 70, y: 10 }, // Gần phía trên cùng
                { id: 12, name: 'Cầu thủ 12', position: 'Tiền Đạo', number: '11', active: false, x: 10, y: 90 }, // Gần phía trên cùng
            ]);
        } else {
            getPlayerByTeamId(selectedTeamId)
                .then(data => {
                    setPlayers(data);
                })
                .catch(error => {
                    console.error("Failed to fetch players:", error);
                });
        }

    }, [selectedTeamId]);
    return (
        <Container fluid>
            <Header />
            <Container fluid style={{ padding: "0", marginBottom: "50px", backgroundColor: "#ccc", padding: "20px" }}>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Col xs={11} style={{ backgroundColor: "white" }}>
                        <Row>
                            <Col xs={6} style={{ padding: "20px" }}>
                                <Row>
                                    <Col xs={9} >
                                        <div style={{ fontWeight: "550" }}>Chọn đội (nếu có)</div>
                                        <Form.Select aria-label="Default select example" onChange={(e) => setSelectedTeamId(e.target.value)}>
                                            <option value={0}>---Vui lòng chọn---</option>
                                            {teamInfo.map((myTeams, index) => (
                                                <option value={myTeams.id}>{myTeams.name}</option>
                                            ))
                                            }


                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "10px" }}>
                                    <Col >
                                        <Row>
                                            <Col>
                                                <div style={{ fontWeight: "550" }}>Chọn vận động viên</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <Row
                                                            style={{ marginRight: "100px" }}
                                                            className="mb-3 align-items-center">
                                                            <Col xs="2">

                                                            </Col>
                                                            <Col xs={2}>
                                                                <div>Số áo <span style={{ color: "red" }}>*</span> </div>
                                                            </Col>
                                                            <Col >
                                                                <div>Tên cầu thủ <span style={{ color: "red" }}>*</span></div>
                                                            </Col>
                                                            <Col xs={3}>

                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={11} className="vdv_wrapper">
                                                        {players.map(player => (

                                                            <Row key={player.id} className="mb-3 align-items-center ">
                                                                <Col xs="auto">
                                                                    <Button
                                                                        id={`toggle-${player.id}`}
                                                                        variant={player.active ? "success" : "danger"}
                                                                        onClick={() => toggleActive(player.id)}
                                                                        style={{ width: "90px" }}
                                                                    >
                                                                        {player.active ? 'Đá chính' : 'Dự bị'}
                                                                    </Button>
                                                                </Col>
                                                                <Col xs={2}>
                                                                    <Form.Control
                                                                        type="number"
                                                                        value={player.number}
                                                                        onChange={(e) => handleNumberChange(player.id, e.target.value)}
                                                                    />
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control
                                                                        type="text"
                                                                        value={player.name}
                                                                        onChange={(e) => handleNameChange(player.id, e.target.value)}
                                                                    />
                                                                </Col>
                                                                <Col xs={3} className="position-dropdown-col">
                                                                    <DropdownButton
                                                                        style={{ width: '125px' }}
                                                                        className="position-dropdown"
                                                                        title={player.position}
                                                                        id={`dropdown-positions-${player.id}`}
                                                                        onSelect={(e) => handlePositionChange(player.id, e)}
                                                                    >
                                                                        <Dropdown.Item eventKey="Thủ Môn">Thủ Môn</Dropdown.Item>
                                                                        <Dropdown.Item eventKey="Hậu Vệ">Hậu Vệ</Dropdown.Item>
                                                                        <Dropdown.Item eventKey="Tiền Vệ">Tiền Vệ</Dropdown.Item>
                                                                        <Dropdown.Item eventKey="Tiền Đạo">Tiền Đạo</Dropdown.Item>
                                                                    </DropdownButton>
                                                                </Col>
                                                            </Row>

                                                        ))}
                                                        <Row>
                                                            <Col>
                                                                <Button onClick={addNewPlayer}>Thêm VĐV</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={2} style={{ padding: "120px 0px 10px 0" }}>


                                {/* <Form.Group className="mb-3">
                                    <Form.Label>Tên đội hình<span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên đội hình"
                                        value={formationName}
                                        onChange={(e) => setFormationName(e.target.value)}
                                        required
                                    />
                                </Form.Group> */}

                                <Form.Group className="mb-3">
                                    <Form.Label>Số lượng người<span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Select
                                        value={playerCount}
                                        onChange={(e) => {
                                            const newCount = e.target.value;
                                            setPlayerCount(newCount);
                                            updatePlayerList(newCount);
                                        }}
                                        required
                                    >
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="9">9</option>
                                        <option value="11">11</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Sơ đồ thi đấu<span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Select value={matchType} onChange={(e) => setMatchType(e.target.value)} required>
                                        <option value="4-4-2 D">4-4-2 D</option>
                                        {/* Add more options if necessary */}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Chế độ<span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Select value={visibility} onChange={(e) => setVisibility(e.target.value)} required>
                                        <option value="Công Khai">Công Khai</option>
                                        <option value="Công Khai">Riêng Tư</option>
                                    </Form.Select>
                                </Form.Group>



                                <Button variant="primary" href='/'>
                                    Tạo mới
                                </Button>

                                <Button variant="secondary" onClick={handleDownload} className="ms-2">
                                    <FontAwesomeIcon icon={faDownload} /> Tải về
                                </Button>
                            </Col>
                            <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FootballField players={players} onPlayersChange={onPlayersChange} />
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container >
            <Footer />
        </Container >
    );
};

export default CreateSquad;