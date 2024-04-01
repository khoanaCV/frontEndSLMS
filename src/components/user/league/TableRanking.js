import styles from "../../../Assets/css/user/league/tableranking.css"
import classNames from "classnames/bind";
import "../../../Assets/css/user/league/leaguedashboard.css"
import { Container, Row, Col, Card, Button, Image, Modal, Badge, ListGroup, Table } from 'react-bootstrap';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import images from "../../../Assets/images";
import {
    faCalendarDays, faCaretRight, faChartBar, faLocationArrow, faStar, faCircleXmark, faDownload, faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { startTransition, useState, useRef, useEffect } from "react";
import HeaderBodyLeague from "../../common/HeaderBodyLeague";
import { toast } from "react-toastify";
import ListTeamRegister from "./ListTeamRegister";

const cx = classNames.bind(styles);


export default function TableRanking() {
    const [activeStarIndex, setActiveStarIndex] = useState(-1);
    const [typeLeague, setTypeLeague] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const idLeague = useParams()
    const [selectedLeagueId, setSelectedLeagueId] = useState(null);
    // const fileInputRef = useRef(null);

    const handleBtnCircleClick = (idLeague) => {
        setShowPopup(true);
        setSelectedLeagueId(idLeague);
    };

    const closePopup = () => {
        setShowPopup(false);
        setActiveStarIndex(-1)
    };
    const handleStarClick = (index) => {
        setActiveStarIndex(index);
    };
    const handleVoteButtonClick = () => {

        setShowPopup(false);
        setActiveStarIndex(-1);
        toast.success("Bình chọn thành công");
    };

    const teams = [
        { id: '1', name: 'Bethlehem', matches: 0, wins: 0, draws: 0, loses: 0, lostGoals: 0, goals: 0, yellowcard: 0, redcard: 0, points: 0, table: 'A' },
        { id: '1', name: 'Bethlehem', matches: 0, wins: 0, draws: 0, loses: 0, lostGoals: 0, goals: 0, yellowcard: 0, redcard: 0, points: 0, table: 'B' },
        { id: '1', name: 'Bethlehem', matches: 0, wins: 0, draws: 0, loses: 0, lostGoals: 0, goals: 0, yellowcard: 0, redcard: 0, points: 0, table: 'C' },

    ];

    const [showAdditionalComponent, setShowAdditionalComponent] = useState(true);
    const [showAdditionalComponent1, setShowAdditionalComponent1] = useState(false);
    const [showAdditionalComponent2, setShowAdditionalComponent2] = useState(false);

    useEffect(() => {
        if (typeLeague === 1) {
            setShowAdditionalComponent(true);
        } else {
            setShowAdditionalComponent(false);
        }
        if (typeLeague === 2) {
            setShowAdditionalComponent1(true);
        } else {
            setShowAdditionalComponent1(false);
        }
        if (typeLeague === 3) {
            setShowAdditionalComponent2(true);
        } else {
            setShowAdditionalComponent2(false);
        }
    })
    return (
        <div>
            <Header />
            <Container fluid style={{ padding: "0", marginBottom: "100px" }}>
                <Row >
                    <Col style={{ padding: "0" }}>
                        <HeaderBodyLeague idLeague={idLeague} onBtnCircleClick={() => handleBtnCircleClick(idLeague)} />
                        <Row className="team-bg_inner">
                            <Col xs={12} className="table_ranking-img">
                            </Col>
                        </Row>
                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            <Col xs={10} style={{ padding: "10px 0px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button style={{ backgroundColor: "#FD1E50" }}>
                                    <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faDownload} />
                                    Tải BXH
                                </Button>
                                <div>
                                    <div>T-H-B = Thắng - Hoà - Bại</div>
                                </div>
                            </Col>
                        </Row>
                        {/* đội thi đấu */}
                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            {showAdditionalComponent && (
                                <Col xs={11}>
                                    <div className="table-container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>TÊN ĐỘI</th>
                                                    <th>SỐ TRẬN</th>
                                                    <th>T - H - B</th>
                                                    <th>HIỆU SỐ</th>
                                                    <th style={{ display: "flex", justifyContent: "center" }}>
                                                        <img style={{ width: "20px", height: "30px" }} src={images.yellowcard} alt="Thẻ vàng" />
                                                        <div style={{ fontSize: "20px" }}>/</div>
                                                        <img style={{ width: "20px", height: "30px" }} src={images.redcard} alt="Thẻ đỏ" />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {teams.map((team, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{team.name}</td>
                                                        <td>{team.matches}</td>
                                                        <td>{team.wins}-{team.draws}-{team.loses}</td>
                                                        <td>{team.lostGoals}/{team.goals}</td>
                                                        <td>{team.yellowcard}/{team.redcard}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            )}
                            {showAdditionalComponent1 && (
                                <Col xs={11}>
                                    <Row style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                                        <Col xs={6} style={{ display: "flex", justifyContent: "center" }}>
                                            <div

                                                style={{ width: "100%", display: "flex", borderBottom: "1px solid #8d8d8d", justifyContent: "center" }}
                                            >
                                                <div className={cx("primary_active")} style={{ marginRight: "80px" }}>Vòng đấu bảng</div>
                                                <div>Vòng loại trực tiếp</div>
                                            </div>
                                        </Col>
                                    </Row>
                                    {teams.map((team, index) => (
                                        <Row key={index}>
                                            <Col>
                                                <Row style={{ padding: "10px 10px 10px 0" }}>
                                                    <Col>
                                                        <div
                                                            style={{ backgroundColor: "#000", color: "white", width: "80px", height: "40px", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center" }}
                                                        >
                                                            Bảng {team.table}
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div className="table-container">
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>#abc</th>
                                                                        <th>TÊN ĐỘI</th>
                                                                        <th>SỐ TRẬN</th>
                                                                        <th>T - H - B</th>
                                                                        <th>HIỆU SỐ</th>
                                                                        <th style={{ display: "flex", justifyContent: "center" }}>
                                                                            <img style={{ width: "20px", height: "30px" }} src={images.yellowcard} alt="Thẻ vàng" />
                                                                            <div style={{ fontSize: "20px" }}>/</div>
                                                                            <img style={{ width: "20px", height: "30px" }} src={images.redcard} alt="Thẻ đỏ" />
                                                                        </th>
                                                                        <th>ĐIỂM</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr >
                                                                        <td>{index + 1}</td>
                                                                        <td>{team.name}</td>
                                                                        <td>{team.matches}</td>
                                                                        <td>{team.wins}-{team.draws}-{team.loses}</td>
                                                                        <td>{team.lostGoals}/{team.goals}</td>
                                                                        <td>{team.yellowcard}/{team.redcard}</td>
                                                                        <td>{team.points}</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    ))}

                                </Col>
                            )}
                            {showAdditionalComponent2 && (
                                <Col xs={11}>
                                    <div className="table-container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>TÊN ĐỘI</th>
                                                    <th>SỐ TRẬN</th>
                                                    <th>T - H - B</th>
                                                    <th>HIỆU SỐ</th>
                                                    <th style={{ display: "flex", justifyContent: "center" }}>
                                                        <img style={{ width: "20px", height: "30px" }} src={images.yellowcard} alt="Thẻ vàng" />
                                                        <div style={{ fontSize: "20px" }}>/</div>
                                                        <img style={{ width: "20px", height: "30px" }} src={images.redcard} alt="Thẻ đỏ" />
                                                    </th>
                                                    <th>ĐIỂM</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {teams.map((team, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{team.name}</td>
                                                        <td>{team.matches}</td>
                                                        <td>{team.wins}-{team.draws}-{team.loses}</td>
                                                        <td>{team.lostGoals}/{team.goals}</td>
                                                        <td>{team.yellowcard}/{team.redcard}</td>
                                                        <td>{team.points}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Col>
                </Row>
                {showPopup && (
                    <div className="popup_wrapper">
                        <div className="popup_inner">
                            <div className="popup_header">
                                <h3 className="popup_header-text">Bình chọn giải đấu</h3>
                                <FontAwesomeIcon onClick={closePopup} className="icon_close" icon={faCircleXmark} />
                            </div>
                            <div className="popup_body">
                                <div className="list_star">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon
                                            key={index}
                                            className={index <= activeStarIndex ? 'star_item active_star' : 'star_item'}
                                            icon={faStar}
                                            onClick={() => handleStarClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="popup_footer">
                                <Button onClick={handleVoteButtonClick} style={{ backgroundColor: "#fd1e50" }} className="popup_footer_btn">Bình chọn</Button>
                            </div>
                        </div>
                    </div>

                )}


            </Container>
            <Footer />
        </div>

    );
}
