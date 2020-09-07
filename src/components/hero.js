import React from 'react';

import { Link } from 'gatsby';
import { Container, Button } from 'react-bootstrap';

import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import theme from '../theme';
import media from '../media';

const TITLE_SIZE = '72px';

const StyledSection = styled.section`

    border-top: .3rem solid ${theme.colors.primary};
    display: inherit;
    width: 100%;
    align-items: center;
    min-height: 100vh;
    ${media.tablet`padding-top: 100px;`};
`;


const StyledTitle = styled.h1`
    font-size: ${TITLE_SIZE};
    line-height: 1.1;
    color: ${theme.colors.primary};
    font-weight: 700;
    font-family: 'LEMON MILK';

    ${media.desktop`font-size: 60px;`};
    ${media.tablet`font-size: 50px;`};
    ${media.phablet`font-size: 40px;`};
    ${media.phone`font-size: 30px;`};
`

const StyledSubtitle = styled.h2`
    font-weight: 300;
    text-transform: uppercase;

    font-size: 32px;

    ${media.desktop`font-size: ${theme.fontSizes.lg};`};
    ${media.tablet`font-size: ${theme.fontSizes.lg};`};
    ${media.phablet`font-size: ${theme.fontSizes.lg};`};
    ${media.phone`font-size: ${theme.fontSizes.lg};`};
`;
const StyledDescription = styled.p`
    width: 75%;
    font-size: ${theme.fontSizes.lg};

    ${media.tablet`font-size: ${theme.fontSizes.md}`} ;
`;

const StyledButton = styled(Button)`
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover { background-color: ${theme.colors.primary}; border-color: ${theme.colors.primary};}
`;

class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: false };
        this.toggleHover = this.toggleHover.bind(this);
    }
    componentDidMount() {
        this.toggleHover();

        setTimeout(() => { this.toggleHover() }, 2500);
    }
    toggleHover() {
        this.setState({ hovered: !this.state.hovered });
    }
    render() {
        return (
            <StyledSection id="hero" style={{ background: 'inherit' }} >
                <Container>
                    <p style={{ fontWeight: 300 }} className='mb-0'>Mijn naam is</p>
                    <StyledTitle>
                        Bas van Driel&nbsp;
                            <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                            <span className={this.state.hovered ? 'wave' : ''}
                                role='img' aria-label='wave'>
                                👋
                                </span>
                        </a>
                    </StyledTitle>

                    <StyledSubtitle className='mb-4'>
                        Full-stack developer en ICT-beheerder <span role='img' aria-label='wave'></span>
                    </StyledSubtitle>

                    <StyledDescription className='mb-1'>
                        Gespecialiseerd in maatwerk oplossingen omtrent het ontwerpen en realiseren van websites, applicaties en alles daar tussen in.</StyledDescription>
                    <div className='mt-4'>
                        <Link to='/#about'>
                            <StyledButton variant='outline-primary' size='lg' className='mr-2'>
                                Meer weten?
                                </StyledButton>
                        </Link>

                    </div>
                </Container>
            </StyledSection >
        );
    }
}

export default Hero;