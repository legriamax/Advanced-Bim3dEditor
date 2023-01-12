import BIM from '@/editor/BIM';
import { toggleTheme } from '@/views/store/user';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const MenuButton = styled.button`
    border: 0;
    background: none;
    text-transform: uppercase;
    color: white;
    /* font-weight: bold; */
    position: relative;
    outline: none;
    padding: 10px 20px;
    box-sizing: border-box;

    &:hover{
        color: rgb(242, 112, 19);
    }
    &::before, &::after{
        box-sizing: inherit;
        position: absolute;
        content: '';
        border: 2px solid transparent;
        width: 0;
        height: 0;  
    }
    &::after{
        bottom: 0;
        right: 0;
    }
    &::before {
        top: 0;
        left: 0;
    }
    &:hover::before, &:hover::after {
        width: 100%;
        height: 100%;
    }
    &:hover::before{
        border-top-color: rgb(242, 112, 19);
        border-right-color: rgb(242, 112, 19);
        transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
    }
    &:hover::after {
        border-bottom-color: rgb(242, 112, 19);
        