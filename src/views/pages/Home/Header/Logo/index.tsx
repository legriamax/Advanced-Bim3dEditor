import React from 'react'
import { Sketch } from '@styled-icons/boxicons-logos/Sketch'
import styled from 'styled-components'

interface LogoClor {
  primary:boolean;
}

const LogoBox = styled.div<LogoClor>`
    display: flex;
    align-items: center;
    height: 