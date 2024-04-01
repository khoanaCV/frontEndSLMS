import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Modal, Alert, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser, faWarning } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "../../../Assets/images";
import styles from "../../../Assets/css/user/league/createleague.css";
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getProfileById, updateProfile } from '../../../services/UserSevice';
import { jwtDecode } from 'jwt-decode';

const cx = classNames.bind(styles);
export default function Profile() {
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [email, setEmail] = useState('binyeutin@gmail.com');
  const [profileData, setProfileData] = useState({
    fullname: '',
    birthDate: '',
    country: '',
    contactInfo: '',
    bio: '',

  });
  const [avatar, setAvatar] = useState(null);

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  const currentToken = localStorage.getItem('token');
  //Mã hoá token
  const dataDecoded = jwtDecode(currentToken);
  const currentId = dataDecoded.id;
  const currentEmail = dataDecoded.email;

  const handleCloseChangeEmail = () => setShowChangeEmail(false);
  const handleShowChangeEmail = () => setShowChangeEmail(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const { fullname, bio, birthDate, country, contactInfo } = profileData;


      updateProfile(currentId, avatar, fullname, bio, birthDate, country, contactInfo)
        .then((data) => {
          // Xử lý khi cập nhật thành công
          console.log("Profile updated successfully:", data);
          setAlertContent('Profile updated successfully!');
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        })
        .catch((error) => {
          // Xử lý khi có lỗi xảy ra
          console.error("Failed to update profile:", error);
          setAlertContent('Failed to update profile!');
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        });
    }
    setValidated(true);
  };

  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const handleShowDeleteAccountModal = () => setShowDeleteAccount(true);
  const handleCloseDeleteAccount = () => setShowDeleteAccount(false);
  const handleDeleteAccount = () => {
    // Implement the delete account functionality here
    setShowDeleteAccount(false);
  };


  const [leagueImage, setLeagueImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file)
      const reader = new FileReader();
      reader.onload = (e) => {

        setLeagueImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    // Truy cập input khi hình ảnh được click
    document.getElementById('leagueImageInput').click();
  };

  //call api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileById(currentId);
        setProfileData(response.data);

      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, [currentId]); // fetch data when `currentId` changes


  // console.log("info " + profileData);
  console.log(currentEmail);
  const formattedDate = profileData.birthDate?.split("T")[0] ?? "";
  return (
    <Container style={{ padding: "20px 0", marginBottom: "30px" }}>
      <Header />
      {showAlert && <Alert variant="success">{alertContent}</Alert>}
      <Row className="mb-4">
        <Col>
          <h3>
            <FontAwesomeIcon icon={faUser} /> Thông tin tài khoản
          </h3>
        </Col>
      </Row>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xl={4} md={4} sm={12} className="text-center">
            <Row style={{ padding: "10px 0" }}>
              <Col xs="4" className={cx("form_avt")} onClick={handleImageClick}>

                <div className={cx("image-container")}>
                  {leagueImage === null && (
                    <>
                      <img src={images.logoteam1} alt="Default League Image" className={cx("default-league-image")} />
                      <input style={{ display: "none" }} type='file' id="leagueImageInput" onChange={handleImageUpload} />
                    </>
                  )}
                  {leagueImage !== null && (
                    <>
                      <img onClick={handleImageClick} src={leagueImage} alt="Ảnh đại diện" className={cx("league-image-preview")} />
                      <input style={{ display: "none" }} type='file' id="leagueImageInput" onChange={handleImageUpload} />
                    </>

                  )}
                </div>
              </Col>

            </Row>
            <Row>
              <Col xl={6} md={4} sm={12}>
                <h2 style={{ color: "#FD1E50", fontWeight: "550", fontSize: "20px", cursor: "pointer" }} className="panel-title text-center pointer" onClick={handleShowChangeEmail}>
                  {currentEmail}
                </h2>
                <Button href='/account/resetpassword' variant="link" style={{ color: "#FD1E50", textDecoration: "none" }}>Nhấn để đổi mật khẩu</Button>
                <div>
                  <FontAwesomeIcon icon={faWarning} style={{ color: '#fcc05b' }} />
                  <span> Chưa kích hoạt email</span>
                  <Button variant="warning">Gửi lại Email</Button>
                </div>
              </Col>
            </Row>

          </Col>

          <Col md={7} sm={12}>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="fullname">
                  <Form.Label>Họ & Tên</Form.Label>
                  <Form.Control type="text" value={profileData.fullname} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="country">
                  <Form.Label>Quốc tịch</Form.Label>
                  <Form.Control type="text" value={profileData.country} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="contactInfo">
                  <Form.Label>Điện Thoại</Form.Label>
                  <Form.Control type="text" value={profileData.contactInfo} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="birthDate">
                  <Form.Label>Ngày sinh</Form.Label>
                  <Form.Control type="date" value={formattedDate} placeholder="dd/mm/yyyy" onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="bio">
                  <Form.Label>Giới thiệu</Form.Label>
                  <Form.Control value={profileData.bio} as="textarea" rows={3} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col style={{ textAlign: "center" }}>
                <Button style={{ marginTop: "10px", width: "80px", backgroundColor: "#FD1E50", border: "none" }} type="submit">Lưu</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>

      <Modal show={showChangeEmail} onHide={handleCloseChangeEmail}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newEmail">
            <Form.Label>New Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter new email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChangeEmail}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleCloseChangeEmail}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mb-4 mt-4 tab-content">
        <Col xs={12}>
          <Row className="title">
            <h3>
              <FontAwesomeIcon icon={faTrash} /> Xóa tài khoản
            </h3>
          </Row>
          <Row>
            <Col md={9} sm={8} xs={12} className="personal-avatar">
              <p style={{ fontSize: "18px" }}>Hãy nhớ rằng khi xóa tài khoản thì tất cả thông tin về tài khoản, giải đấu và đội thi đấu của bạn sẽ bị xóa mà không thể khôi phục lại được.</p>
            </Col>
            <Col md={3} sm={4} xs={12} className="personal-info">
              <Button variant="danger" onClick={handleShowDeleteAccountModal}>
                Xóa tài khoản
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={showDeleteAccount} onHide={handleCloseDeleteAccount}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa tài khoản của mình? Hành động này không thể được hoàn tác.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteAccount}>
            Đóng
          </Button>
          <Button variant="danger" onClick={handleDeleteAccount}>
            Xóa tài khoản
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </Container>
  );
}
