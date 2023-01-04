import BIM from '@/editor/BIM';
import React from 'react'
import styled from 'styled-components';
import Container from './Container';

const EditorDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    /* width: 100vh; */
    /* height: 100vh; */
    &::-webkit-scrollbar{
        display: none;
    }
`

class Editor extends React.Component {

    container = React.createRef<HTMLDivEl