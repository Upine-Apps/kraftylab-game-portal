import React, { useState } from "react";
import { useFilePicker } from "use-file-picker";
import styled from "styled-components";
import ReusableButton from "../../../buttons/ReusableButton";
import { BodyMain, H2, H3 } from "../../../styles/TextStyles";
import ReusableTextField from "../../../textfield/ReusableTextField";
import IcebreakerService from "../../../../service/IcebreakerService";
import StatusAlert from "../../../alerts/StatusAlert";
import Papa from "papaparse";

export default function CreateIcebreakers() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [question, setQuestion] = useState("");
  const [uploading, setUploading] = useState(false);
  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [alert, setAlert] = useState(emptyAlert);
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".csv",
    multiple: false,
    limitFilesConfig: {
      min: 1,
      max: 1,
    },
  });

  const handleFileSubmit = async () => {
    let csvContent = Papa.parse(filesContent[0].content, {
      header: true,
    });
    setUploading(true);

    for (let i = 0; i < csvContent.data.length; i++) {
      const res = await IcebreakerService.createIcebreaker(csvContent.data[i]);
      if (res.status !== 200) {
        setAlert({
          visible: true,
          status: "Error",
          title: "Failed",
          subtitle: `Could not create icebreaker, row: ${i}`,
          key: Math.random(),
        });
        break;
      }
    }
    setAlert({
      visible: true,
      status: "Success",
      title: "Success",
      subtitle: "Successfully added icebreakers",
      key: Math.random(),
    });
    setUploading(false);
  };

  const handleCreateIcebreaker = async () => {
    const body = {
      category: category,
      subcategory: subcategory,
      question: question,
      points: 0,
      holiday: "",
    };
    const res = await IcebreakerService.createIcebreaker(body);

    if (res.status === 200) {
      // clear field values
      setCategory("");
      setSubcategory("");
      setQuestion("");

      setAlert({
        visible: true,
        status: "Success",
        title: "Success",
        subtitle: "Successfully added icebreaker",
        key: Math.random(),
      });
    } else {
      setAlert({
        visible: true,
        status: "Error",
        title: "Failed",
        subtitle: "Could not create icebreaker, please try again",
        key: Math.random(),
      });
    }
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

  return (
    <Wrapper>
      {alert.visible ? displayAlert() : ""}
      <ContentWrapper>
        <ManualWrapper>
          <Title>Enter a New Icebreaker</Title>
          <InputWrapper>
            <ReusableTextField
              title="Category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              label="Choose a category"
            />

            <ReusableTextField
              title="Subcategory"
              onChange={(e) => setSubcategory(e.target.value)}
              value={subcategory}
              label="Choose a subcategory"
            />

            <ReusableTextField
              title="Question"
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              label="Enter a question"
            />
          </InputWrapper>
          <ButtonWrapper>
            <ReusableButton
              title="Submit"
              onClick={(e) => handleCreateIcebreaker()}
              borderRadius="10px"
              color="#18C07A"
              width="200px"
            />
          </ButtonWrapper>
        </ManualWrapper>
        <Separator>
          <Line />
          <Title>Or</Title>
          <Line />
        </Separator>
        <BulkWrapper>
          <Title>Upload in Bulk</Title>
          <FileWrapper>
            {filesContent.length > 0 ? (
              filesContent.map((file, index) => (
                <FileName>{file.name}</FileName>
              ))
            ) : (
              <FileName>No File Selected</FileName>
            )}
            <ReusableButton
              title="Select File"
              onClick={() => openFileSelector()}
              borderRadius="10px"
            />
            <ReusableButton
              title="Submit"
              onClick={(e) => handleFileSubmit()}
              color="#18C07A"
              borderRadius="10px"
            />
          </FileWrapper>
        </BulkWrapper>
        {uploading === true ? <Uploading>Uploading...</Uploading> : ""}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  padding: 40px;
  min-width: 1000px;
  /* border: 1px solid rgba(0, 0, 0, 1); */
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-self: center;
`;
const ContentWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  gap: 30px;
  grid-template-rows: 40% 10% 40% 10%;
`;
const ManualWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: auto auto auto;
`;
const InputWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: auto auto auto;
`;
const ButtonWrapper = styled.div`
  display: grid;
  justify-self: center;
`;
const BulkWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: auto auto;
`;

const FileWrapper = styled.div`
  display: grid;
  width: 450px;
  height: 50px;
  gap: 10px;
  justify-self: center;
  grid-template-columns: auto auto auto;
`;
const Separator = styled.div`
  display: grid;
  gap: 20px;
  padding-top: 20px;
  align-items: center;
  justify-self: center;
  grid-template-columns: auto auto auto;
`;
const Line = styled.div`
  width: 50px;
  margin-top: 10px;
  height: 2px;
  background: #000000;
`;
const Title = styled(H2)``;
const FileName = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;
const Uploading = styled(H2)`
  text-align: center;
`;
