import React, { useState,useEffect } from 'react'
const PaginationButtonsList = (props) => {
    const noOfPages = 20;
    function createButtons()
    {
        let buttonsArr=[]
        for(let i=0;i<noOfPages;i++)
        {
            buttonsArr.push(<button id={'button-'+(i+1)} value={i+1} onClick={buttonClick}>{i+1}</button>);
        }
        console.log('buttons arr',buttonsArr);
        return buttonsArr;
    }
    function buttonClick(e)
    {
        console.log('button click',e.target.value);
        const redButtons = document.querySelectorAll('.active-btn');
        redButtons.forEach((button)=>{
            button.classList.remove('active-btn');
        })
        console.log('red buttons',redButtons);
        const button = document.getElementById('button-'+e.target.value);
        button.classList.add('active-btn');
        props.handleChange(e);
    }
    return (
        <div className="pagination-buttons-list">
            {createButtons()}
        </div>
    )
}

export { PaginationButtonsList }