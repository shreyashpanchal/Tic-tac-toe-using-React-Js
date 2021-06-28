import React,{useState,useRef} from 'react'
import './App.css'
const obj=
  {
    display:"flex",
    width:"300px",
    flexWrap:"wrap",
    alignItem:"center",
    
    
  }
 
  const obj1={
    height:"100px",
    width:"100px",
    fontSize:"28px",
    border:"none",
    background:"white"
  }

const App=()=>{
 
  const [click,setClick]=useState(0);
 const [message,setM]=useState("");
 const [det,setDet]=useState([]);
  const i1=useRef();
  const i2=useRef();
  const [s1,sets1]=useState(0)
  const [s2,sets2]=useState(0)
  const i3=useRef();
  const i4=useRef();
  const i5=useRef();
  const i6=useRef();
  const i7=useRef();
  const i8=useRef();
  const i9=useRef();
 
  const  check=()=>{
    const array=[];
    
    
      array.push(i1.current.innerHTML)
      array.push(i2.current.innerHTML)
      array.push(i3.current.innerHTML)
      array.push(i4.current.innerHTML)
      array.push(i5.current.innerHTML)
      array.push(i6.current.innerHTML)
      array.push(i7.current.innerHTML)
      array.push(i8.current.innerHTML)
      array.push(i9.current.innerHTML)
    
      if(
      (array[0]==="X" && array[1]==="X" && array[2]==="X")   || 
      (array[4]==="X" && array[3]==="X" && array[5]==="X" )  ||
      (array[4]==="X" && array[2]==="X" && array[6]==="X" )  ||
      (array[6]==="X" && array[7]==="X" && array[8]==="X" )  ||
      (array[6]==="X" && array[3]==="X" && array[0]==="X" )  ||
      (array[4]==="X" && array[1]==="X" && array[7]==="X" )  ||
      (array[8]==="X" && array[2]==="X" && array[5]==="X" )  ||
      (array[4]==="X" && array[0]==="X" && array[8]==="X" )
      )

      
      {
        if(click%2===0){
          setM(()=>"Player 1 Wins")
          let d = new Date();
          let n = d.getHours();
          let n1 = d.getMinutes();
          let n2 = d.getSeconds();
          let str=`${n}:${n1}:${n2}`
                const op={
                  winner:"Player 1 Wins",
                  times:str
                }
                setDet((p)=>[...p,op])
                sets1((p)=>p+1)
        }
        else 
        {setM(()=>"Player 2 Wins")
        let d = new Date();
        let n = d.getHours();
        let n1 = d.getMinutes();
        let n2 = d.getSeconds();
        let str=`${n}:${n1}:${n2}`
              const op={
                winner:"Player 2 Wins",
                times:str
              }
              setDet((p)=>[...p,op])
              sets2((p)=>p+1)
        i1.current.disabled=true;
        i2.current.disabled=true;
        i3.current.disabled=true;
        i4.current.disabled=true;
        i5.current.disabled=true;
        i6.current.disabled=true;
        i7.current.disabled=true;
        i9.current.disabled=true;
        i8.current.disabled=true;
      }
     setTimeout(()=>{
      i1.current.innerHTML="";
      i2.current.innerHTML="";
      i3.current.innerHTML="";
      i4.current.innerHTML="";
      i5.current.innerHTML="";
      i6.current.innerHTML="";
      i7.current.innerHTML="";
      i8.current.innerHTML="";
      i9.current.innerHTML="";
      i1.current.disabled=false;
       i2.current.disabled=false;
       i3.current.disabled=false;
       i4.current.disabled=false;
       i5.current.disabled=false;
       i6.current.disabled=false;
       i7.current.disabled=false;
       i9.current.disabled=false;
       i8.current.disabled=false;
      setM(()=>"")
     },1200)
      }
   else if(
    (array[0]==="O" && array[1]==="O" && array[2]==="O")   || 
    (array[4]==="O" && array[3]==="O" && array[5]==="O" )  ||
    (array[4]==="O" && array[2]==="O" && array[6]==="O" )  ||
    (array[6]==="O" && array[7]==="O" && array[8]==="O" )  ||
    (array[6]==="O" && array[3]==="O" && array[0]==="O" )  ||
    (array[4]==="O" && array[1]==="O" && array[7]==="O" )  ||
    (array[8]==="O" && array[2]==="O" && array[5]==="O" )  ||
    (array[4]==="O" && array[0]==="O" && array[8]==="O" )
   ) 
   {
    if(click%2===0){
      setM(()=>"Player 1 Wins")
      let d = new Date();
      let n = d.getHours();
      let n1 = d.getMinutes();
      let n2 = d.getSeconds();
      let str=`${n}:${n1}:${n2}`
            const op={
              winner:"player 1 Wins",
              times:str
            }
            setDet((p)=>[...p,op])
            sets1((p)=>p+1)

    }
 else{
  setM(()=>"Player 2 Wins")
  let d = new Date();
     let n = d.getHours();
     let n1 = d.getMinutes();
     let n2 = d.getSeconds();
     let str=`${n}:${n1}:${n2}`
           const op={
             winner:"Player 2 Wins",
             times:str
           }
           setDet((p)=>[...p,op])
           sets2((p)=>p+1)
  i1.current.disabled=true;
  i2.current.disabled=true;
  i3.current.disabled=true;
  i4.current.disabled=true;
  i5.current.disabled=true;
  i6.current.disabled=true;
  i7.current.disabled=true;
  i9.current.disabled=true;
  i8.current.disabled=true;
 }

 setTimeout(()=>{
  i1.current.innerHTML="";
  i2.current.innerHTML="";
  i3.current.innerHTML="";
  i4.current.innerHTML="";
  i5.current.innerHTML="";
  i6.current.innerHTML="";
  i7.current.innerHTML="";
  i8.current.innerHTML="";
  i9.current.innerHTML="";
  i1.current.disabled=false;
  i2.current.disabled=false;
  i3.current.disabled=false;
  i4.current.disabled=false;
  i5.current.disabled=false;
  i6.current.disabled=false;
  i7.current.disabled=false;
  i9.current.disabled=false;
  i8.current.disabled=false;
  setM(()=>"")
 },1200)
      
   }
  else{
  // console.log(array)
   let u,j;
   j=0;
   for(u=0;u<9;u++)
   {
     if(array[u]==="")
     {
       ++j;
       //console.log(j)
     }
   }
   //console.log(j);
    if(j===0)
    {
     setM(()=>"Draw")
     let d = new Date();
     let n = d.getHours();
     let n1 = d.getMinutes();
     let n2 = d.getSeconds();
     let str=`${n}:${n1}:${n2}`
           const op={
             winner:"Match Draw",
             times:str
           }
           setDet((p)=>[...p,op])
     setTimeout(()=>{
      i1.current.innerHTML="";
      i2.current.innerHTML="";
      i3.current.innerHTML="";
      i4.current.innerHTML="";
      i5.current.innerHTML="";
      i6.current.innerHTML="";
      i7.current.innerHTML="";
      i8.current.innerHTML="";
      i9.current.innerHTML="";
      i1.current.disabled=false;
      i2.current.disabled=false;
      i3.current.disabled=false;
      i4.current.disabled=false;
      i5.current.disabled=false;
      i6.current.disabled=false;
      i7.current.disabled=false;
      i9.current.disabled=false;
      i8.current.disabled=false;
      setM(()=>"")
     },1200)
   
    }
  }
  }
  const handler=(e)=>{
    e.preventDefault();
    if(click%2===0) i1.current.innerHTML="X";
    else i1.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i1.current.disabled=true;
  }
  const handler1=(e)=>{
    e.preventDefault();
    if(click%2===0) i2.current.innerHTML="X";
    else i2.current.innerHTML="O";
     setClick((c)=>c+1)
    check();
    i2.current.disabled=true;
    
  }
  const handler2=(e)=>{
    e.preventDefault();
    if(click%2===0) i3.current.innerHTML="X";
    else i3.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i3.current.disabled=true;
  }
  const handler3=(e)=>{
    e.preventDefault();
    if(click%2===0) i4.current.innerHTML="X";
    else i4.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i4.current.disabled=true;
  }
  const handler4=(e)=>{
    e.preventDefault();
    if(click%2===0) i5.current.innerHTML="X";
    else i5.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i5.current.disabled=true;
  }
  const handler5=(e)=>{
    e.preventDefault();
    if(click%2===0) i6.current.innerHTML="X";
    else i6.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i6.current.disabled=true;
  }
  const handler6=(e)=>{
    e.preventDefault();
    if(click%2===0) i7.current.innerHTML="X";
    else i7.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i7.current.disabled=true;
  }
  const handler7=(e)=>{
    e.preventDefault();
    if(click%2===0) i8.current.innerHTML="X";
    else i8.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i8.current.disabled=true;
  }
  const handler8=(e)=>{
    e.preventDefault();
    if(click%2===0) i9.current.innerHTML="X";
    else i9.current.innerHTML="O";
     setClick((c)=>c+1)
     check();
     i9.current.disabled=true;
  }
  
  return (
    <>
      <h1 style={{textAlign:"center",color:"white",marginTop:"10px"}}>Tic Tac Toe</h1>
      <div className="wrapper">
      <div className="history">
        <h2  >History</h2>
       
         {det.map((data,index)=>{
           return(
           
             <div className="row" key={index}>
                   <div id="o1" >{data.times}</div>
                   <div id="o2" >{data.winner}</div>
             </div>
             
           )
         })}
      </div>
      <div className="wrap">
        <div className="score">
          <div className="p1">
            <h4>Player 1 </h4>
            <p>{s1}</p>
          </div>
          <div className="p2">
          <h4>Player 2 </h4>
            <p>{s2}</p>
          </div>
        </div>
      <div style={obj}>
        <button style={obj1} onClick={handler} ref={i1}></button>
        <button style={obj1} onClick={handler1} ref={i2}></button>
        <button style={obj1}onClick={handler2} ref={i3}></button>
        <button style={obj1}onClick={handler3} ref={i4}></button>
        <button style={obj1}onClick={handler4} ref={i5}></button>
        <button style={obj1}onClick={handler5} ref={i6}></button>
        <button style={obj1}onClick={handler6} ref={i7}></button>
        <button style={obj1}onClick={handler7} ref={i8}></button>
        <button style={obj1}onClick={handler8} ref={i9}></button>
       
      </div>
      <h1 id="pok">{message}</h1>
      </div>
     
      <div className="empty">

      </div>
      </div>
    </>
  )
}

export default App
