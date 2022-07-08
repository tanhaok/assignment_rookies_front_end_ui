import { useEffect, useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllCategory } from "../../service/CategoryService.js";
import { ViewAllProduct } from "../ViewAllProduct/";

const Home = (props) => {
  const [cate, setCate] = useState([]);

  let { type } = useParams();
  if (!type) {
    type = "None";
  }

  const getData = () => {
    getAllCategory()
      .then((res) => {
        setCate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="home"
      style={{ margin: "3rem 0", textAlign: " -webkit-center", width: "100%" }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="All">
        <Row style={{ width: "80%" }}>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item key={"all"}>
                <Nav.Link eventKey={"All"}>{"All Category"}</Nav.Link>
              </Nav.Item>
              {cate.map((item) => (
                <Nav.Item key={item.id}>
                  <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey={"All"}>
                <ViewAllProduct cateId={"all"} />
              </Tab.Pane>
              {cate.map((item) => (
                <Tab.Pane eventKey={item.name}>
                  <ViewAllProduct cateId={item.id} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Home;
