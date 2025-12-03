import React, { useEffect, useState } from 'react'
import Navbar from "../Components_07/Navbar"
import { useNavigate, useParams } from 'react-router'
import { PROBLEMS } from '../data/problems'
import {Panel,PanelGroup,PanelResizeHandle} from "react-resizable-panels"
import CodeEditor from '../Components_07/CodeEditor'
import ProblemDescription from '../Components_07/ProblemDescription'
import OutputPanel from '../Components_07/OutputPanel'
import toast from "react-hot-toast"
import confetti from "canvas-confetti";
import { executeCode } from "../lib/piston";


function Problempage() {

  const {id} = useParams()
  const navigate =useNavigate()

  const[currentProblemId,setcurrentProblemId] = useState("two-sum")
  const[selectedLanguage,setselectedLanguage] = useState("javascript")
  const[code,setcode] = useState(PROBLEMS[currentProblemId]?.starterCode.javascript)
  const[output,setoutput] = useState(null)
  const[isRunning,setisRunning]=useState(false)

  const currentProblem = PROBLEMS[currentProblemId]

  useEffect(()=>{
    if(id && PROBLEMS[id]){
      setcurrentProblemId(id)
      setcode(PROBLEMS[currentProblemId].starterCode[selectedLanguage])
      setoutput(null)
    }
  },[id,selectedLanguage])
 
  const handleLanguageChange = (e)=>{
    const newLang = e.target.value;
    setselectedLanguage(newLang);
    setcode(currentProblem.starterCode[newLang]);
    setoutput(null);
  }
  const handleProblemChange = (newProblemId)=> navigate(`/problem/${newProblemId}`)
  
   const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };
  const triggerErrorConfetti = () => {
  confetti({
    particleCount: 120,
    spread: 180,
    origin: { x: 0.5, y: 0.3 },
    colors: ["#ff0000", "#ff4d4d", "#ff8080"], // red shades
    scalar: 1.2,
    ticks: 200,
  });

  confetti({
    particleCount: 80,
    spread: 260,
    origin: { x: 0.2, y: 0.7 },
    colors: ["#ff0000", "#ff4d4d"],
    scalar: 1,
  });

  confetti({
    particleCount: 80,
    spread: 260,
    origin: { x: 0.8, y: 0.7 },
    colors: ["#ff4d4d", "#ff0000"],
    scalar: 1,
  });
};


const normalizedOutput = (output) => {
    
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
        
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkifTestsPassed=(actualOutput,expectedOutput)=>{
    const normalizedActual = normalizedOutput(actualOutput);
    const normalizedExpected = normalizedOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  }
  const handleRunCode = async()=>{
    setisRunning(true);
    setoutput(null);

    const result = await executeCode(selectedLanguage,code);
    setoutput(result);
    setisRunning(false);

    if(result.success){
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage]
      const testsPassed = checkifTestsPassed(result.output,expectedOutput)
    
    if(testsPassed){
      toast.success("Haha You Cracked it")
      triggerConfetti();
    }else{
      toast.error("Not Bad Try-Again")
      triggerErrorConfetti();
    }}
    else{
      toast.error("Code execution Failed (Typo-gg)")
            triggerErrorConfetti();

    }
  }
    return (
    <div className='h-screen  bg-base-100 flex flex-col'>
      <Navbar />
      <PanelGroup direction="horizontal">
        <Panel defaultSize={40} minSize={30}>
         <ProblemDescription 
         problem={currentProblem}
         currentProblemId={currentProblemId}
         onProblemChange={handleProblemChange}
         allProblems={Object.values(PROBLEMS)}/>
        </Panel>
        <PanelResizeHandle className='w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize'/>
        <Panel defaultSize={60} minSize={30}>
        
      
      <PanelGroup direction="vertical">
        <Panel defaultSize={70} minSize={30}>
          <CodeEditor
          selectedLanguage={selectedLanguage}
          code={code}
          isRunning={isRunning}
          onLanguageChange={handleLanguageChange}
          onCodeChange={setcode}
          onRunCode={handleRunCode}
          />
        </Panel>
        <PanelResizeHandle className='h-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize'/>
        <Panel defaultSize={30} minSize={30}>
          <OutputPanel/>
        </Panel>
        
      </PanelGroup>
      </Panel>
      </PanelGroup>
    </div>
  )
}

export default Problempage
