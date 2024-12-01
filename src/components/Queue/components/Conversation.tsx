import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProgressStepper from "./ProgressStepper";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { PiPaperPlaneRight } from "react-icons/pi";
import { FiPaperclip } from "react-icons/fi";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Conversation: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [innerValue, setInnerValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleInnerChange = (event: React.SyntheticEvent, newValue: number) => {
    setInnerValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          <Tab label="Conversation" {...a11yProps(0)} />
          <Tab label="Address Update" {...a11yProps(1)} />
          <Tab label="Fee Reversal" {...a11yProps(2)} />
          <Tab label="Retail Onboarding" {...a11yProps(3)} />
          <button className="bg-[#D74848] rounded-lg p-4 ml-4 text-white">
            Escalate
          </button>
        </Tabs>
      </Box>
      <div className="bg-white mt-2">
        <CustomTabPanel value={value} index={0}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mt: 2,
            }}
          >
            <Tabs
              value={innerValue}
              onChange={handleInnerChange}
              aria-label="nested tabs example"
            >
              <Tab label="Conversation" {...a11yProps(4)} />
              <Tab label="Attachments" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <div className="bg-white ">
            <CustomTabPanel value={innerValue} index={0}>
              <ProgressStepper />
              <div className=" w-full border-t border-slate-300 pt-4 flex items-center space-x-3 mt-5">
                <div className="flex items-center text-[#0F8BFD] text-xs">
                  <FaCheckSquare size={20} color="#0F8BFD" className="mr-1" />
                  SMS
                </div>
                <div className="flex items-center text-[#676B89] text-xs">
                  <MdCheckBoxOutlineBlank
                    size={20}
                    color="#676B89"
                    className="mr-1"
                  />
                  Whatsapp
                </div>
                <div className="flex items-center text-[#0F8BFD] text-xs">
                  <FaCheckSquare size={20} color="#0F8BFD" className="mr-1" />
                  Email
                </div>
              </div>
              <div className="flex items-center mt-5">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full p-4 border border-slate-200 rounded-lg bg-slate-50 outline-none"
                />
                <button className="border border-[#676B89] rounded-lg p-4 ml-2 text-[#676B89] flex items-center">
                  <FiPaperclip />
                </button>
                <button className="bg-[#0F8BFD] rounded-lg p-4 ml-2 text-white flex items-center">
                  <PiPaperPlaneRight />
                </button>
              </div>
            </CustomTabPanel>
          </div>

          <CustomTabPanel value={innerValue} index={1}>
            <div>
              <h1>Attachments</h1>
            </div>
          </CustomTabPanel>
        </CustomTabPanel>
      </div>

      <CustomTabPanel value={value} index={1}>
        <div>
          <h1>Address Update</h1>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div>
          <h1>Fee Reversal</h1>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div>
          <h1>Retail Onboarding</h1>
        </div>
      </CustomTabPanel>
    </Box>
  );
};

export default Conversation;
