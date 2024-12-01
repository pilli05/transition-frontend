import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import "./ProgressStepper.css";
import Tick from "../../../assets/tick.png";

const steps = [
  {
    label: "Rachel Adams",
    date: "27Jul, 2024 9:08 PM Sent By WhatsApp",
    description: `Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.`,
  },
  {
    label: "You",
    date: "30Jul, 2023 11:00 PM Received By WhatsApp",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.",
  },
];

const ProgressStepper: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" nonLinear>
        {steps.map((step) => (
          <Step key={step.label} active>
            <StepLabel
              icon={
                <span
                  style={{
                    fontWeight: "bold",
                    borderRadius: "50%",
                    backgroundColor: `${
                      step.label === "You" ? "#4C6292" : "#EEF0F5"
                    }`,
                    width: "40px",
                    height: "40px",
                    color: `${step.label === "You" ? "#fff" : "#4C6292"}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {`${step.label.split(" ")[0].toString()[0]} `}
                </span>
              }
            >
              {step.label}
              <br />
              <span className="text-[#8A8EA6] mt-2 text-xs font-normal flex items-center">
                {step.date} <img src={Tick} alt="message" className="ml-1" />
              </span>
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid #8A8EA6",
                  color: "#0F1729",
                  fontSize: "14px",
                }}
              >
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProgressStepper;
