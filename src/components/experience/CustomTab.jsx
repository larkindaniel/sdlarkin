import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import "./experience.css";

function CustomTab() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <React.Fragment>
      <div className="customTab" style={{ display: "flex" }}>
        <Tabs
          value={currentTabIndex}
          orientation="vertical"
          onChange={handleTabChange}
          textColor={"#459ff4"}
          TabIndicatorProps={{
            sx: {
              left: 0,
            },
          }}
        >
          <Tab label="BlackBerry" className="side__nav"/>
          {/* <Tab label="Coop 2" className="side__nav" /> */} 
          {/* remember to change */}
        </Tabs>

        <div style={{ width: "65%" }}>
          {/* TAB 1 Contents */}
          {currentTabIndex === 0 && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" className="cardHeader">
                Software Developer <strong>@BlackBerry</strong>{" "}
              </Typography>
              <Typography variant="h4" className="cardDate">
                May 2023 - Present
              </Typography>
              <div className="cardBody">
                <Typography variant="p" className="cardBody">
                  Worked on the Cylance Guard team to provide advanced cybersecurity protection to clients.
                  <p>Implemented a serverless architecture using AWS SQS and Lambda to parse, filter, and process over 22M daily
events for efficient and scalable real-time threat detection. </p>
                
          
                </Typography>
                
              </div>
            </Box>
          )}

          {/* TAB 2 Contents */}
          {currentTabIndex === 1 && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" className="cardHeader">
                Coop 2 Content
              </Typography>
              <Typography variant="h4" className="cardDate">
                May 2023 - Present
              </Typography>
              <div className="cardBody">
                <Typography variant="p" className="cardBody">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  English versions from the 1914 traasdfa sde standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </Typography>
              </div>
            </Box>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomTab;
