import React, { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background-color: rgba(18,18,18,0.8);
`
const LayoutBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`

const TitleBox = styled.div`
    width: 100%;
    height: 36px;
    color: rgb(54,54,45);

`
const TitleLabel = styled.span`
    color: #ccc;