import React from 'react'
import './RightSideMenu.css'
import DataBlock from './DataBlock.js'
import BarGraph from './BarGraph.js'
import Donut from './Donut.js'
import Episode from './Episode.js'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function RightSideMenu() {
    return (
        <div className="right">
     
        <div className="first-top">
            <DataBlock title="New Subscribers" data="5,097" per="+33.45%" icon_status={true} margin_status/>
            <DataBlock title="Streams" data="47,403" per="-112.45%" icon_status={false}  margin_status/>
            <DataBlock title="Engagement Rate" data="25.81" per="+62.52%" icon_status={true} margin_status/>
            <DataBlock title="Avg. watch time" data="45,4 Min" per="+4.46%" icon_status={true} />
        </div>
        <div className="second-left">
            <BarGraph title="Audience"  data="301,097" per="+58.31%"/>
        </div>
        <div className="second-right">
            <Donut />
        </div>
        <div className="third-left">
            <div className="episodes__title"><span className="episodes__heading">Popular Episodes</span><span className="episodes__all">see all</span></div>
            <Episode index="1" main_title="Kuji Podcast 33:Live" sub_title="Guest : Nuarian schedve" time="1.99m" status={true}/>
            <Episode index="2" main_title="Kuji Podcast 20:Live" sub_title="Guest : Nuarian schedve" time="1.54m" status={true}/>
            <Episode index="3" main_title="Kuji Podcast 22:Live" sub_title="Guest : Nuarian schedve" time="1.34m" status={true}/>
            <Episode index="4" main_title="Kuji Podcast 24:Live" sub_title="Guest : Nuarian schedve" time="1.23m" status={true}/>
        </div>

        <div className="third-right">
         <div className="webinars"><span className="webinar__title">Webinars</span><MoreHorizIcon className="webinar__icon" /></div>
        <div className="webinar__heading1">learn how to increse more than 20% each month !</div>
        <div className="webinar__heading2">Join us on webinar and learn how to increse more than 20% your monthly income</div>
        <div className="webinar__more">Learn more</div>
        </div>
     
        </div>
    )
}

export default RightSideMenu
