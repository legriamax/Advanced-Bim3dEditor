import React from 'react'
import styled from 'styled-components'
import { Building2 } from '@styled-icons/remix-line/Building2'
import { ImageEdit } from '@styled-icons/fluentui-system-regular/ImageEdit'
import { Molecule } from '@styled-icons/fluentui-system-regular/Molecule'
import { TextParagraph } from '@styled-icons/fluentui-system-regular/TextParagraph'

const SideBarBox = styled.div`
    width: 48px;
    height: 100%;
    background-color: rgb(18,18,18);
`
const LeftMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    color: white;
    font-size: 12px;
    &:hover{
        background-color:rgb(242, 112, 19);
    }
`

const Building2Icon = styled(Building2)`
    color: white;

`
const ImageEditIcon = st