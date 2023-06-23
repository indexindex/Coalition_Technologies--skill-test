import { Fragment } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import './scss/App.scss';
import '@splidejs/react-splide/css';

import HeaderBG from './assets/img/header-bg.jpg';
import Logo from './assets/img/logo.png';
import LogoBig from './assets/img/logo-big.png';
import HistoryBG from './assets/img/history-bg.jpg';
import Thumbnail1 from './assets/img/thumbnail-1.jpg';
import Thumbnail2 from './assets/img/thumbnail-2.jpg';
import TeamBGTab1 from './assets/img/team-bg-tab-1.jpg';
import TeamBGTab2 from './assets/img/team-bg-tab-2.jpg';
import LogoFooter from './assets/img/logo-footer.png';

const App = () => {

    const checkForTabs = ({ target }) => {
        const tabs = target.closest('.mountains').querySelectorAll('[class*="--tab"]');
        const tabsContent = document.querySelectorAll('.tab-content');
        let tabIndex;

        // ? making sure that clicked element is indeed a tab
        if (target.classList.value.indexOf('--tab') !== -1) {
            // ? pick a second class from tab element, split from '-' and select the right leftover
            // ? also subtract -1 from that outcome, as indexing starts from 0, not from 1
            // ? finally converting string value to actual number
            tabIndex = Number(target.classList[1].split('-')[1] - 1);

            // ? remove all active classes
            tabs.forEach(tab => { tab.classList.remove('active-tab'); })
            tabsContent.forEach(tabContent => { tabContent.classList.remove('active-tab-content'); })

            target.classList.add('active-tab');
            tabsContent[tabIndex].classList.add('active-tab-content');
        }
    }

    return (
        <Fragment>
            <header>
                <img src={Logo} alt="logo"/>
                <div className='page-links'>
                    <a href="#history">01. HISTORY</a>
                    <a href="#team">02. TEAM</a>
                </div>
                <img src={HeaderBG} alt='header-bg'/>
            </header>
            <section className='navigation-bar'>
                <img src={LogoBig} alt="logo-big"/>
                <div className='navigation-bar__links'>
                    <a href="#history">01. HISTORY</a>
                    <a href="#team">02. TEAM</a>
                </div>
            </section>
            <section id='history'>
                <div className='history-intro'>
                    <h2>01.<span>HISTORY</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
                </div>
                <div className='carousel-container'>
                    <Splide options={
                        {
                            rewind: true,
                            snap: true,
                            gap: '10px',
                            perPage: 4,
                            perMove: 4,
                            arrows: false,
                            lazyLoad: true,
                            breakpoints: {
                                640: { perPage: 2 },
                                400: { perPage: 1 }
                            }
                        }
                    }>
                        <SplideSlide>
                            <img src={Thumbnail1} alt='thumbnail-1'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail2} alt='thumbnail-2'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail1} alt='thumbnail-1'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail2} alt='thumbnail-2'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail1} alt='thumbnail-1'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail2} alt='thumbnail-2'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail1} alt='thumbnail-1'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail2} alt='thumbnail-2'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail1} alt='thumbnail-1'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail2} alt='thumbnail-2'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail1} alt='thumbnail-1'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Thumbnail2} alt='thumbnail-2'/>
                        </SplideSlide>
                    </Splide>
                </div>
                <img src={HistoryBG} alt='history-bg'/>
            </section>
            <section id='team'>
                <div className='team-intro'>
                    <h2>02.<span>CLIMB</span></h2>
                    <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
                </div>
            </section>
            <section className='mountains' onClick={checkForTabs}>
                <div className='mountains__tabs'>
                    <h3 className='mountains__tabs--tab tab-1 active-tab'>MOUNTAIN 1</h3>
                    <h3 className='mountains__tabs--tab tab-2'>MOUNTAIN 2</h3>
                </div>

                <div className='mountains__tab tab-1 active-tab'>
                    <h3 className='mountains__tabs--tab tab-1 active-tab'>MOUNTAIN 1</h3>
                    <div className='tab-content tab-content-1 active-tab-content'>
                        <div className='schedule'>
                            <h3 className='schedule--title'>SCHEDULE</h3>
                            <div className='dates'>
                                <p>25 Nov 2016</p>
                                <p>28 Nov 2016</p>
                                <br/>
                                <p>18 Dec 2016</p>
                                <br/>
                                <p>7 Jan 2017</p>
                            </div>
                            <div className='events'>
                                <p>Vestibulum viverra</p>
                                <p>Vestibulum viverra</p>
                                <br/>
                                <p>Vestibulum viverra</p>
                                <br/>
                                <p>Vestibulum viverra</p>
                            </div>
                        </div>
                        <img src={TeamBGTab1} alt='team-bg-tab-1'/>
                    </div>
                </div>

                <div className='mountains__tab tab-2'>
                    <h3 className='mountains__tabs--tab tab-2'>MOUNTAIN 2</h3>
                    <div className='tab-content tab-content-2'>
                        <div className='schedule'>
                            <h3 className='schedule--title'>SCHEDULE</h3>
                            <div className='dates'>
                                <p>17 Nov 2016</p>
                                <br/>
                                <p>13 Dec 2016</p>
                                <p>28 Dec 2016</p>
                                <br/>
                                <p>9 Feb 2017</p>
                            </div>
                            <div className='events'>
                                <p>Vestibulum viverra</p>
                                <p>Vestibulum viverra</p>
                                <br/>
                                <p>Vestibulum viverra</p>
                                <br/>
                                <p>Vestibulum viverra</p>
                            </div>
                        </div>
                        <img src={TeamBGTab2} alt='team-bg-tab-2'/>
                    </div>
                </div>
            </section>
            <footer>
                <img src={LogoFooter} alt='logo-footer'/>
                <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
            </footer>
        </Fragment>
    )
}

export default App;