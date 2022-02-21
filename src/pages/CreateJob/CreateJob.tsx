import React, { useState } from "react";
import { Select } from "antd";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

import {
  CreateJobContainer,
  CreateJobContent,
  Heading,
  ButtonContainer,
  SelectOption,
  Label,
} from "./CreateJob.styled";

const CreateJob = () => {
  const { Option } = Select;

  const [status, setStatus] =
    useState<"success" | "tick" | "error" | "disable" | null>(null);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (value.length < 6) setStatus("error");
    if (value.length >= 6) setStatus("success");
  };

  return (
    <CreateJobContainer>
      <Heading>Create Job</Heading>
      <CreateJobContent>
        <TextField
          isShowTitle
          title="Title"
          require
          placeholder="Enter Title"
          isSuccess={status === "success"}
          isTick={status === "tick"}
          isDisabled={status === "disable"}
          isError={status === "error"}
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
        />
        <SelectOption>
          <Label>
            Category<span style={{ color: "red" }}>*</span>
          </Label>
          <Select style={{ width: "100%" }} onChange={handleChange}>
            <Option value="all">All</Option>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </SelectOption>
        <SelectOption>
          <Label>Sub Category</Label>
          <Select
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              height: "40px",
            }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </SelectOption>
        <TextField
          isShowTitle
          title="Budget"
          require
          placeholder="0 USD"
          isSuccess={status === "success"}
          isTick={status === "tick"}
          isDisabled={status === "disable"}
          isError={status === "error"}
          // onChange={handleChange}
          // value={value}
          onBlur={handleBlur}
        />
        <TextField
          isShowTitle
          title="Delivery Time"
          placeholder="0 Days"
          isSuccess={status === "success"}
          isTick={status === "tick"}
          isDisabled={status === "disable"}
          isError={status === "error"}
          // onChange={handleChange}
          // value={value}
          onBlur={handleBlur}
        />
        <input type="file" />
        <TextField
          isShowTitle
          title="Skill"
          placeholder="Enter Skill"
          isSuccess={status === "success"}
          isTick={status === "tick"}
          isDisabled={status === "disable"}
          isError={status === "error"}
          // onChange={handleChange}
          // value={value}
          onBlur={handleBlur}
        />
        <TextField
          isShowTitle
          title="Description"
          require
          placeholder="Enter description"
          isSuccess={status === "success"}
          isTick={status === "tick"}
          isDisabled={status === "disable"}
          isError={status === "error"}
          // onChange={handleChange}
          // value={value}
          onBlur={handleBlur}
        />
        <TextField
          isShowTitle
          title="Requirement"
          require
          placeholder="Enter requirement"
          isSuccess={status === "success"}
          isTick={status === "tick"}
          isDisabled={status === "disable"}
          isError={status === "error"}
          // onChange={handleChange}
          // value={value}
          onBlur={handleBlur}
        />
        <ButtonContainer>
          <Button text="Create Job" isPrimary width={200} />
        </ButtonContainer>
      </CreateJobContent>
    </CreateJobContainer>
  );
};

export default CreateJob;
