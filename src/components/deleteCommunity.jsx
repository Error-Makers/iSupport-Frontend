import styled from "styled-components";
import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { LoginContext } from "../context/auth/main";

const Section = styled.section`
  position: fixed;
  top: 20vh;
  left: 30vw;
  min-width: 60vw;
  background-color: var(--Default-Light);
  border-radius: 20px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndexList = styled.div`
  height: 5vh;
  width: 40vw;
  display: flex;
  justify-content: flex-start;
  margin-top: 2vh;
  position: fixed;
  top: 75vh;
  left: 45vw;
`;

const Index = styled.div`
  height: 5vh;
  width: 3vw;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  font-size: 1.2rem;
  color: var(--Accent-Main);
  background-color: #fefefe;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &.active {
    background: #e9e9e9;
  }
`;
const CommunityContainer = styled.div`
  margin: 0 auto 1vh auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--Paper-Main);
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 90%;
  height: 10vh;
  border-radius: 7.5px;
`;

const Button = styled.button`
  background-color: var(--Accent-Main);
  border-radius: 20px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  padding: 0.45rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  &:active,
  &:hover {
    opacity: 0.7;
  }
`;

const Td = styled.td`
  text-align: center;
`;
const Th = styled.td`
  text-align: center;
  font-weight: 600;
`;

const DeleteCommunities = () => {
  const context = useContext(LoginContext);
  const API = process.env.REACT_APP_SERVER;
  const token = context.user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const indexRef = useRef();
  const [data, setData] = useState([]);
  const [raw, setRaw] = useState([]);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const fetchData = async () => {
    let response = await axios.get(`${API}communities`, config);
    setRaw(response.data);
    setData(response.data.slice(0, 5));
    setPaginationIndex(Math.floor(response.data.length / 5));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const classesHandler = (e) => {
    const children = [].slice.call(indexRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  const handlePagination = (e) => {
    let raw1 = ["", ...raw];
    let page = parseInt(e.target.innerHTML);
    let renderedData = [];
    for (let i = 1; i <= 5 * page; i++) {
      if (i >= 5 * page - 5 + 1 && i <= 5 * page) {
        renderedData.push(raw1[i]);
      }
    }
    setData(renderedData);
  };

  const handleDelete = async (id) => {
    console.log(id);
    let response = await axios.delete(`${API}community/${id}`, config);
    console.log(response);
    if (response.status == 201) fetchData();
  };

  let indices = Array.from({ length: paginationIndex }, (_, i) => i + 1).map(
    (ele, idx) => {
      if (idx === 0) {
        return (
          <Index className={"active"} onClick={handlePagination}>
            {ele}
          </Index>
        );
      }
      return <Index onClick={handlePagination}>{ele}</Index>;
    }
  );
  let communities = data.map((ele) => {
    return (
      <tr>
        <Td>{ele.community_id}</Td>
        <Td>{ele.community_name}</Td>
        <Td>{new Date(ele.createdAt).toLocaleDateString()}</Td>
        <Td>
          <Button
            onClick={() => {
              handleDelete(ele.community_id);
            }}
          >
            Delete
          </Button>
        </Td>
      </tr>
    );
  });
  return (
    <Section>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Community</Th>
            <Th>Created At:</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>{communities}</tbody>
      </Table>
      <IndexList ref={indexRef} onClick={classesHandler}>
        {indices}
      </IndexList>
    </Section>
  );
};

export default DeleteCommunities;
