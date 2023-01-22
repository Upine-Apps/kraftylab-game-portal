import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReusableButton from "../../../buttons/ReusableButton";
import { BodyMain, H2, H3 } from "../../../styles/TextStyles";
import ReusableTextField from "../../../textfield/ReusableTextField";
import IcebreakerService from "../../../../service/IcebreakerService";
import { BiPencil, BiSave, BiTrash } from "react-icons/bi";
import { TiCancel } from "react-icons/ti";
import DefaultSpinner from "../../../spinners/DefaultSpinner";
import StatusAlert from "../../../alerts/StatusAlert";

export default function ViewUsers() {
  const [fileName, setFileName] = useState("No File Selected");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [question, setQuestion] = useState("");
  const [allIcebreakers, setAllIcebreakers] = useState();
  const [editCategory, setEditCategory] = useState();
  const [editSubcategory, setEditSubcategory] = useState();
  const [editQuestion, setEditQuestion] = useState();
  const [openEditForm, setOpenEditForm] = useState();
  const [editItem, setEditItem] = useState();

  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [alert, setAlert] = useState(emptyAlert);

  const handleEditCategory = (newCategory) => {
    console.log("editCategory");
    setEditCategory(newCategory);
  };

  const handleEditSubcategory = (newSubcategory) => {
    console.log("editSubcategory");
    setEditSubcategory(newSubcategory);
  };

  const handleEditQuestion = (newQuestion) => {
    console.log("editQuestion");
    setEditQuestion(newQuestion);
  };

  const handleEditClick = (item, index) => {
    console.log("handleEditClick");
    setEditItem(item);
    setEditCategory(item.category);
    setEditSubcategory(item.subcategory);
    setEditQuestion(item.question);
    setOpenEditForm(true);
    openEdit();
  };

  const openEdit = () => {
    console.log("openEditForm", openEditForm);
    if (openEditForm == true) {
      console.log("inside if statement");
      return (
        <EditRow>
          <ReusableTextField
            title="Category"
            onChange={(e) => handleEditCategory(e.target.value)}
            value={editCategory}
          />
          <ReusableTextField
            title="Subcategory"
            onChange={(e) => handleEditSubcategory(e.target.value)}
            value={editSubcategory}
          />
          <ReusableTextField
            title="Question"
            onChange={(e) => handleEditQuestion(e.target.value)}
            value={editQuestion}
          />
          <ButtonWrapper onClick={(e) => submitEdit()} color="#18c07a">
            <BiSave color="white" />
          </ButtonWrapper>
          <ButtonWrapper
            onClick={(e) => setOpenEditForm(false)}
            color="#F06E6E"
          >
            <TiCancel color="white" />
          </ButtonWrapper>
        </EditRow>
      );
    } else {
      console.log("inside else statement");
      return <></>;
    }
  };
  const handleDelete = async (item, index) => {
    console.log("delete");

    // Delete from database
    const res = await IcebreakerService.deleteIcebreaker(item);
    if (res.status === 200) {
      // remove icebreaker from allIcebreaker
      delete allIcebreakers[index];
      setAllIcebreakers(allIcebreakers);

      // display success alert
      setAlert({
        visible: true,
        status: "Success",
        title: "Success",
        subtitle: "Successfully deleted icebreaker",
        key: Math.random(),
      });
    } else {
      setAlert({
        visible: true,
        status: "Error",
        title: "Failed",
        subtitle: "Could not delete icebreaker, please try again",
        key: Math.random(),
      });
    }
  };

  const submitEdit = async () => {
    console.log("submit edit");
    let cleanedIcebreaker = {
      id: editItem.id,
      category: editCategory,
      subcategory: editSubcategory,
      question: editQuestion,
    };
    const res = await IcebreakerService.updateIcebreaker(cleanedIcebreaker);
    if (res.status === 200) {
      // update allIcebreakers with updated icebreaker
      const index = allIcebreakers.findIndex(
        (x) => x.id === cleanedIcebreaker.id
      );
      allIcebreakers[index].category = editCategory;
      allIcebreakers[index].subcategory = editSubcategory;
      allIcebreakers[index].question = editQuestion;
      setAllIcebreakers(allIcebreakers);

      // Reset all field values
      setEditCategory();
      setEditSubcategory();
      setEditQuestion();
      setEditItem();

      // display success alert
      setAlert({
        visible: true,
        status: "Success",
        title: "Success",
        subtitle: "Successfully updated icebreaker",
        key: Math.random(),
      });

      setOpenEditForm(false);
    } else {
      setAlert({
        visible: true,
        status: "Error",
        title: "Failed",
        subtitle: "Could not update icebreaker, plese try again",
        key: Math.random(),
      });
    }
    // add alert (done)
    // update allIcebreakers (done)
    // reset field values (done)
    // fix styling for edit form
    // add cancel button
  };

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

  useEffect(() => {
    let isMounted = true;
    IcebreakerService.getAllIcebreakers().then((response) => {
      if (isMounted) {
        let data = response;
        console.log(data);
        setAllIcebreakers(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const row = ["Sports", "Baseball", "What's your favorite baseball team?"];
  const exampleData = [
    {
      category: "Sports",
      subcategory: "Baseball",
      question: "What's your favorite baseball team?",
    },
  ];

  const displayIcebreakerTable = () => {
    if (allIcebreakers && allIcebreakers.length > 0) {
      return allIcebreakers.map((item, index) => (
        <TableRow>
          <Text>{item.category}</Text>
          <Text>{item.subcategory}</Text>
          <Text>{item.question}</Text>
          <IconWrapper onClick={(e) => handleEditClick(item, index)}>
            <BiPencil className="react-icons" color="grey" />
          </IconWrapper>
          <IconWrapper onClick={(e) => handleDelete(item, index)}>
            <BiTrash className="react-icons" color="grey" />
          </IconWrapper>
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
        <Title>Edit Icebreakers</Title>
        <TableHeader>
          <Text>Category</Text>
          <Text>Subcategory</Text>
          <Text>Question</Text>
          <Text>Edit</Text>
          <Text>Delete</Text>
        </TableHeader>
        <Table count={exampleData.length}>{displayIcebreakerTable()}</Table>
      </TableWrapper>
      {openEdit()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  padding: 40px;
  max-width: 850px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-self: center;
  display: grid;
  grid-template-rows: auto auto;
`;

const TableWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-rows: 10% 5% 85%;
`;

const Table = styled.div`
  display: grid;
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-rows: auto;
  gap: 7.5px;
  overflow: auto;
  max-height: 200px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 60% 7% 8%;
  font-weight: bold;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 60% 7% 8%;
`;

const IconWrapper = styled.div`
  display: grid;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled(H2)``;

const Text = styled.div``;

const EditRow = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 12px;
  margin-bottom: -12px;
  grid-template-columns: 20% 20% auto 5% 5%;
`;

const ButtonWrapper = styled.div`
  display: grid;
  margin-top: 5px;
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
`;
