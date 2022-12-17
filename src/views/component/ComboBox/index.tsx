import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{pleft?:string}>`
    overflow: hidden;
    position: absolute;
    top: 48px;
    /* left: 0px; */
    margin-left: ${props=>props.pleft};
    width: 140px;
    height: 0px;
    background-color: rgb(38, 38, 38);
    box-shadow: 0 0 3px rgb(102, 102, 102);
    text-align: left;
    line