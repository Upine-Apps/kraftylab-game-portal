import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { BodyMain, H2, H3 } from "../../../styles/TextStyles";
import { BiDownload, BiRefresh, BiReset, BiSearchAlt } from "react-icons/bi";
import DefaultSpinner from "../../../spinners/DefaultSpinner";
import StatusAlert from "../../../alerts/StatusAlert";
import UserService from "../../../../service/UserService";
import "react-datepicker/dist/react-datepicker.css";
import { CSVLink } from "react-csv";

export default function ViewUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const toLocal = (date) => {
    console.log("Date: ", date);
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const tempdate = new Date(
      (typeof date === "string" ? new Date(date) : date) - tzoffset
    )
      .toISOString()
      .slice(0, 10);
    console.log(tempdate);
    return tempdate;
  };

  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [alert, setAlert] = useState(emptyAlert);

  const csvHeaders = [
    { label: "Id", key: "id" },
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email" },
    { label: "Validated", key: "validated" },
    { label: "Created At", key: "createdAt" },
  ];

  function displayAlert() {
    return (
      <StatusAlert
        status={alert.status}
        title={alert.title}
        subtitle={alert.subtitle}
        key={alert.key}
      />
    );
  }

  const cleanUsers = (data) => {
    for (let user of data) {
      user.createdAt = toLocal(user.createdAt);
    }
    setAllUsers(data);
  };

  const noFilterUsers = async () => {
    UserService.getAllUsers().then((response) => {
      cleanUsers(response.data);
    });
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const filterUser = async () => {
    const result = await UserService.getAllUsers(
      toLocal(startDate),
      toLocal(endDate)
    );
    console.log("result", result);
    if (result.status === 200) {
      cleanUsers(result.data);
    } else {
      setAlert({
        visible: true,
        status: "Error",
        title: "Failed",
        subtitle: "Failed to filter user data",
        key: Math.random(),
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    noFilterUsers();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayUserTable = () => {
    if (allUsers && allUsers.length > 0) {
      return allUsers.map((item, index) => (
        <TableRow>
          <Text>{item.id}</Text>
          <Text>{item.first_name}</Text>
          <Text>{item.last_name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.validated.toString()}</Text>
          <Text>{item.createdAt}</Text>
        </TableRow>
      ));
    } else {
      return <DefaultSpinner isDark={true} />;
    }
  };

  return (
    <Wrapper>
      {alert.visible ? displayAlert() : ""}
      <TableWrapper>
        <Title>View Users</Title>

        <TableHeader>
          <Text>Id</Text>
          <Text>First Name</Text>
          <Text>Last Name</Text>
          <Text>Email</Text>
          <Text>Validated</Text>
          <Text>Sign Up Date</Text>
        </TableHeader>
        <Table count={allUsers.length}>{displayUserTable()}</Table>
        <FilterRow>
          <Text>Start Date:</Text>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Text>End Date:</Text>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <ButtonWrapper onClick={(e) => filterUser()} color="#18c07a">
            <BiSearchAlt color="white" />
          </ButtonWrapper>
          <ButtonWrapper onClick={(e) => noFilterUsers()} color="#F06E6E">
            <BiRefresh color="white" />
          </ButtonWrapper>
          <CSVLink
            data={allUsers}
            filename={`kraftylab_signup_${toLocal(startDate)}_${toLocal(
              endDate
            )}`}
            headers={csvHeaders}
          >
            <ButtonWrapper onClick={(e) => {}} color="#0067ff">
              <BiDownload color="white" />
            </ButtonWrapper>
          </CSVLink>
        </FilterRow>
      </TableWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  padding: 40px;
  width: 1050px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-self: center;
  display: grid;
  grid-template-rows: auto;
  max-height: 500px;
`;

const FilterRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
`;

const TableWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-rows: 8% 5% auto 12%;
`;

const Table = styled.div`
  display: grid;
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-rows: auto;
  gap: 7.5px;
  overflow: auto;
  max-height: 300px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 5% 15% 14% 35% 10% 21%;
  font-weight: bold;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 5% 15% 15% 35% 10% 20%;
`;
const Title = styled(H2)``;

const Text = styled.div``;

const ButtonWrapper = styled.div`
  display: grid;
  cursor: pointer;
  background-color: ${(props) => props.color};
  width: 40px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
`;
