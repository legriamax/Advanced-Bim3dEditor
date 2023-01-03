
import BIM from '@/editor/BIM'
import ComboBox from '@/views/component/ComboBox'
import PopPanel from '@/views/component/PopPanel'
import { Export } from '@styled-icons/boxicons-regular/Export'
import { Import } from '@styled-icons/boxicons-regular/Import'
import { New } from '@styled-icons/fluentui-system-regular/New'
import { Clear } from '@styled-icons/material-rounded/Clear'
import { Ruler } from '@styled-icons/remix-line/Ruler'
import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

const MenuBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const MenuItem = styled.div<{ menuh?: string }>`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 24px;
    height: 100%;
    color: #ccc;
    font-size: 10px;
    /* text-align: center; */
    /* line-height: 48px; */
    cursor: pointer;
    &:hover{
        color: #fff;