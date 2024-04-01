import styles from "../../../Assets/css/user/account/mycompetitor.css"
import classNames from "classnames/bind";
import { Container, Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import images from "../../../Assets/images";
import { faCalendar, faCircleXmark, faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { getTeamsByUserId } from "../../../services/TeamSevice";

const cx = classNames.bind(styles);

const TeamCard = ({ logo, name, description, memberCount, players, handleMenuClick }) => {


    return (
        <Col xs={4}>
            <Card style={{ cursor: "pointer" }} className="team-card" onClick={handleMenuClick}>
                <Card.Img variant="top" src={logo} className="team-logo1" />
                <Card.Body>
                    <Card.Title className="team-title" style={{ color: 'black' }}>{name}</Card.Title>
                    <Card.Text style={{ fontWeight: "300", fontSize: "16px", color: "#8d8d8d", textAlign: "center" }}>{description}</Card.Text>

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Thành viên</ListGroup.Item>
                    <ListGroup.Item>
                        <div className="member-list">
                            {players.slice(0, 3).map((member, index) => (
                                <div class="card_img1">
                                    {member.avatar === null && <img className="card_img-ex" src={images.avtplayerdf} alt="" />}
                                    {member.avatar !== null && <img className="card_img-ex" src={member.avt} alt="" />}

                                </div>
                            ))}
                            {memberCount > 3 && (
                                <div class="card_img1">
                                    <p className="card_img_quantity1" >+{memberCount - 3}</p>
                                </div>
                            )}



                        </div>
                    </ListGroup.Item>
                </ListGroup>

            </Card>
        </Col>
    );
};



export default function MyCompetitor() {



    //     {
    //         id: 1,
    //         logo: images.logodefault, // Thay thế với đường dẫn hình ảnh của bạn
    //         name: 'Tên đội',
    //         description: 'Mô tả',
    //         memberCount: 5, // Số lượng thành viên
    //         members: [
    //             {
    //                 id: 1,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 2,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 3,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 3,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 3,
    //                 avt: images.aovang,
    //             },
    //         ]
    //     },
    //     {
    //         id: 2,
    //         logo: images.logodefault, // Thay thế với đường dẫn hình ảnh của bạn
    //         name: 'Tên đội 1',
    //         description: 'Mô tả 1',
    //         memberCount: 5, // Số lượng thành viên
    //         members: [
    //             {
    //                 id: 1,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 2,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 3,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 3,
    //                 avt: images.aovang,
    //             },
    //             {
    //                 id: 3,
    //                 avt: images.aovang,
    //             },
    //         ]
    //     },
    // ];


    const [teamInfo, setTeamInfo] = useState([]);
    const navigate = useNavigate();


    const currentToken = localStorage.getItem('token');
    //Mã hoá token
    const dataDecoded = jwtDecode(currentToken);
    const currentId = dataDecoded.id;

    const handleMenuClick = (id) => {
        navigate(`/competitor/${currentId}/${id}/profile`);
    };

    //call api
    useEffect(() => {
        getTeamsByUserId(currentId)
            .then(data => {
                setTeamInfo(data);
            })
            .catch(error => {
                console.error("Failed to fetch teams:", error);
            });
    }, [currentId]);


    return (
        <div>
            <Header />
            <Container fluid style={{ padding: "0" }}>
                <Row >
                    <Col style={{ padding: "0" }}>
                        <Row className={cx("infomation-myleague_header")}>
                            <Col style={{ padding: "0" }}>
                                <Row >
                                    <Col style={{ display: "flex", justifyContent: "center", padding: "0" }}>
                                        <div>
                                            <img src={images.logoteam1} alt="Hình ảnh giải đấu" className={cx("user-image-preview")} />
                                        </div>
                                        <div className={cx('user_info-inner')}>
                                            <h4 className={cx('user_info-name')}>Nguyễn Rin</h4>
                                            <div className={cx('user_info-item')}>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                                <p className="user_info">vanrin112002@gmail.com</p>
                                            </div>
                                            <div className={cx('user_info-item')}>
                                                <FontAwesomeIcon icon={faPhone} />
                                                <p className="user_info">0362001404</p>
                                            </div>
                                            <div className={cx('user_info-item')}>
                                                <FontAwesomeIcon icon={faCalendar} />
                                                <p className="user_info">01-01-2001</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ padding: "0" }}>
                                        <div className={cx("menu_header-inner")}>
                                            <Link to={'/account/myleague'} className={cx("menu_header-item active-color-xam")}>Quản lý giải đấu</Link>
                                            <Link to={'/account/mycompetitor'} className={cx("menu_header-item  active-color-white")}>Quản lý đội</Link>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row className={cx("infomation-myleague-body")}>
                            <Col className={cx('myleague_body_left')} xs={2}>
                                <ul className={cx('menu_left_inner')}>
                                    <li className={cx('menu_left_item active-menu-body')}>
                                        Đội đã tạo
                                    </li>
                                    <li className={cx('menu_left_item inactive-menu-body')}>
                                        Được phân công
                                    </li>
                                    <li className={cx('menu_left_item inactive-menu-body')}>
                                        Đang tham gia
                                    </li>
                                </ul>
                            </Col>
                            <Col className={cx('myleague_body_right')} xs={7}>
                                <Row className={cx('body-right-header')}>
                                    <Col>Đội đã tạo</Col>
                                    <Col style={{ textAlign: "right" }}>
                                        <Button href="/mycompetitor/create" style={{ backgroundColor: "#FD1E50" }}>Tạo đội</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={cx('body-right_wrapper')}>
                                        {/* Các item ở đây */}
                                        <Row>
                                            {teamInfo.map((myTeams, index) => (
                                                <TeamCard key={index} {...myTeams} handleMenuClick={() => handleMenuClick(myTeams.id)} />
                                            ))
                                            }
                                        </Row>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>

    );
}
