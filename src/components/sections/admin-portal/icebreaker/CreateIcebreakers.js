import React, { useState } from "react";
import styled from "styled-components";
import ReusableButton from "../../../buttons/ReusableButton";
import { BodyMain, H2, H3 } from "../../../styles/TextStyles";
import ReusableTextField from "../../../textfield/ReusableTextField";

export default function CreateIcebreakers() {
  const [fileName, setFileName] = useState("No File Selected");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [question, setQuestion] = useState("");

  const handleFileSelect = () => {
    console.log("select");
  };
  const handleFileSubmit = () => {
    console.log("submit");
  };
  return (
    <Wrapper>
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
              onClick={(e) => handleFileSelect()}
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
            <FileName>{fileName}</FileName>
            <ReusableButton
              title="Select File"
              onClick={(e) => handleFileSelect()}
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
  grid-template-rows: 45% 10% 45%;
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
  gap: 10px;
  justify-self: center;
  grid-template-columns: auto auto auto;
`;
const Separator = styled.div`
  display: grid;
  gap: 20px;
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
