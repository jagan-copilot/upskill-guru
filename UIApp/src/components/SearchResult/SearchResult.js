import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DefaultButton, PrimaryButton, Stack, TextField, IStackTokens } from 'office-ui-fabric-react';
import { IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { ColorClassNames, FontClassNames } from "@uifabric/styling";

import BarChart from "../Charts/BarChart/BarChart";


import BubbleChart from "../Charts/BubbleChart/BubbleChart";
import { bubbleChartData } from "../BubbleChartData";
import { barChartDataMapping } from "../../helper/barChartDataMapping";

function SearchResult(props) {
  const { disabled, checked } = props;
  let calculatedBarChartData = barChartDataMapping(bubbleChartData)
  const [barGraphData,setBarGraphData] = useState(calculatedBarChartData)

  const [bubbleGraphData,setBubbleGraphData] = useState(bubbleChartData)
  const [pythonChecked,setPythonChecked] = useState(true)
  const [mysqlChecked,setMysqlChecked] = useState(true)
  const [javascriptChecked,setJavascriptChecked] = useState(true)
  const bubbleChartRef = useRef();
  return (
    <div className="account-main">
      <HeadingStyles>Search result</HeadingStyles>

      <div className="ms-Grid main-id" dir="ltr">
      <div style={{marginTop:'20px'}} className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg4" style={{display:"inline-block",marginLeft:'10px'}}>
          <TextField style={{width:"500px"}} value="Enter job title" />
        </div>
        <div className="ms-Grid-col ms-lg4" style={{display:"inline-block"}}>
          <TextField style={{width:"500px"}} value="Enter location" />
        </div>
        <div className="ms-Grid-col ms-lg2" style={{display:"inline-block"}}>
        <PrimaryButton text="Search" onClick={_searchAction} allowDisabledFocus disabled={disabled} checked={checked} className={[ColorClassNames.blueBackground, ColorClassNames.white].join(" ")}/>
        
        </div>
      </div>

      <div style={{marginTop:'30px',marginRight:'120px'}} className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg12" style={{display:"block"}}>
        <Label style={{textAlign: "center"}}>The most popular skills for the job title: </Label>
        
        <BarChart style={{fill: "#3268a8"}} 
                  id="barChart" 
                  data={barGraphData}
                  onPressBar={(skill_name)=>bubbleChartRef.current.updateChart(skill_name)} />
        <Label></Label>
        </div>

        <div className="ms-Grid-col ms-lg12" style={{display:"block",marginTop:'30px'}}>
          <Label style={{textAlign: "center"}}>Locations with job offers, based on skills: </Label>
          <BubbleChart ref={bubbleChartRef} style={{width: "100%", float: "left"}} 
                       id="bubbleChart" 
                       data={bubbleGraphData} />
            {/* <div style={{width: "20%",  height: "500px", float: "right"}}>
              <input type="checkbox" className="checkbox" value="Python" checked={pythonChecked} onChange={(e)=>setPythonChecked(!pythonChecked)} /><label>Python</label><br />
              <input type="checkbox" className="checkbox" value="MySQL" checked={mysqlChecked} onChange={(e)=>{setMysqlChecked(!mysqlChecked)}} /><label>MySQL</label><br />
              <input type="checkbox" className="checkbox" value="Javascript" checked={javascriptChecked} onChange={(e)=>{setJavascriptChecked(!javascriptChecked)}} /><label>Javascript</label>
            </div> */}
            
        </div>
      </div>


      <div style={{marginTop:'30px',marginRight:'120px',marginBottom:'100px'}} className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg12" style={{textAlign: "center"}}>
        <PrimaryButton text="Save search result" onClick={_saveAction} allowDisabledFocus disabled={disabled} checked={checked} className={[ColorClassNames.blueBackground, ColorClassNames.white].join(" ")}/>
        </div>
      </div>

      </div>

    </div>

  );
}

function _saveAction() {
  alert('Search has been saved');  
}
function _searchAction() {
  alert('Search for skills!');  
}

const HeadingStyles = styled.span`
  
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-left: 1px;
  margin-top: 9px;
  margin-bottom: 12px;
`;

export default SearchResult;


