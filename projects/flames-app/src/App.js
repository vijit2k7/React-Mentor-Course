import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';

const flamesArr=["Siblings","Friends","Love","Affection","Marriage","Enemy"];
function App(){
    
    let firstName='';
    let secondName='';
    const [output,setOutput]=useState('No Relationship');
    function handleChange1(e)
    {
        console.log('event1 is',e.target.value);
        firstName=e.target.value;
    }
    function handleChange2(e)
    {
        console.log('event1 is',e.target.value);
        secondName=e.target.value;
    }

    function mergeStrings(f,l)
    {   
        //soumya anshss => {s:1,o:1,u:1,m:1,y:1,a:1}=26 {a:1,n:1,s:3,h:1}=26*26
        let map1={}
        let map2={}
        for(let i=0;i<f.length;i++)
        {
            if(!map1[f[i]])
                map1[f[i]]=0;
            map1[f[i]]+=1;
        }
        for(let i=0;i<l.length;i++)
        {
            if(!map2[l[i]])
                map2[l[i]]=0;
            map2[l[i]]+=1;
        }
        let count=0;
        for(let first in map1)  
        {
            for(let second in map2)
            {
                if(map1[first]!=0&&map2[first]!=0)
                    if(map2[first])
                    {
                        map1[first]--;
                        map2[first]--;
                    }
            }
        } 
        for(let key in map1)
        {
            count+=map1[key];
        }
        for(let key in map2)
        {
            count+=map2[key];
        }
        return count%6;
        
    }
    function calculate()
    {
        const finalOutput=mergeStrings(firstName.toLowerCase(),secondName.toLowerCase());
        setOutput(flamesArr[finalOutput]);
    }
        return(
            <div id="main">
                <h3 data-testid="answer">{output}</h3>
                <div id='inputs'>
                    <input type="text" data-testid="input1" onChange={handleChange1}/>First Name
                    <input type="text" data-testid="input2" onChange={handleChange2}/>Second Name
                </div>
                <div id="buttons">
                    <button data-testid="calculate_relationship" onClick={calculate}>Calculate Relationship Future</button>
                    <button data-testid="clear">Clear</button>
                </div>
            </div>
        )
    }


export default App;

//map1={}
//soumyaas

// for(let i=0;i<s.length;i++)
// {
//     if(!map[s[i]])
//         map[s[i]]=1
//     else
//         map[s[i]]++;
// }