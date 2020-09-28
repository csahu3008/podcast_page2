import React from 'react'
import './LeftSideMenu.css'
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import  ListItem  from './ListItem';

import WeekendIcon from '@material-ui/icons/Weekend';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import MicIcon from '@material-ui/icons/Mic';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import PeopleIcon from '@material-ui/icons/People'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WavesIcon from '@material-ui/icons/Waves';


function LeftSideMenu() {
    return (
        <div className="left">
            
        <div className="left__profile__main"><Avatar className="left__avatar" /> <div className="left__title"> <span className="upper">Nick Schadev </span><br /> <span className="lower">Kuji Podcast </span></div><AddIcon className="left__add"/></div>
        <ListItem title="Inbox" Icon={WeekendIcon} ></ListItem>
        <ListItem title="Alerts" Icon={FlashOnIcon} ></ListItem>
        <ListItem title="Overview" selected Icon={ViewModuleIcon} ></ListItem>
        
        <div className="sep">Podcasts</div>
        <ListItem title="Episodes" Icon={MicIcon} ></ListItem>
        <ListItem title="Media" Icon={SubscriptionsIcon} ></ListItem>
        <ListItem title="Materials" Icon={ViewHeadlineIcon} ></ListItem>
        <ListItem title="Contacts"  Icon={PeopleIcon} ></ListItem>
        
        <div className="sep">Podcasts</div>
        <ListItem title="Subscribers" Icon={SentimentSatisfiedIcon} ></ListItem>
        <ListItem title="Channels" Icon={VoicemailIcon} ></ListItem>
        <ListItem title="Integrations" Icon={LocalLibraryIcon} ></ListItem>
        <ListItem title="Reports"  Icon={WavesIcon} ></ListItem>
        
        <div className="left__profile__main bottom"><MicIcon className="left__avatar" /> <div className="left__title"> <span className="upper">Podcaster </span><br /> <span className="lower">ver 0.2.3.4 </span></div><AddIcon className="left__add"/></div>

        </div>
    )
}

export default LeftSideMenu
