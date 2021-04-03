import React from 'react';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isDropdownOn : false,
            textInstrument : "Instrument",
            isBtnDisplay : false
        }

        this.displaySearchInstrumentBtn = this.displaySearchInstrumentBtn.bind(this)
    }

    displaySearchInstrumentBtn(e){   
        let inputValue = e.target.value;
        inputValue.length > 0 ? this.setState({isBtnDisplay: true}) : this.setState({isBtnDisplay: false});
    }

    render(){
        return (
            <nav className = "ctn-navbar">
            <div className = "ctn-home">
                <div className = "ctn-burger-menu">
                    <span className = "line"></span>
                    <span className = "line"></span>
                    <span className = "line"></span>
                </div>
                <div className = "ctn-logo">
                    <a href="index.html"><h3><span>Chor</span>deus</h3></a>
                </div>
                <div className = "ctn-social-media">
                    <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} className="facebook" alt="Facebook Page"/></a>
                    <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="instagram" alt="Instagram Page"/></a>
                    <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} className="twitter" alt="Twitter Page"/></a>
                    <a href="https://www.tiktok.com/fr/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTiktok} className="tiktok" alt="TikTok Page"/></a>
                </div>
            </div>
            <div className = "ctn-searchbar">
                <div className = "ctn-button-dropdown">
                    <button className = {this.state.textInstrument === "Piano" ? "activePiano" : "" || this.state.textInstrument === "Guitare" ? "activeGuitare" : "" 
                    || this.state.textInstrument === "Batterie" ? "activeBatterie" : "" || this.state.textInstrument === "Saxophone" ? "activeSaxophone" : ""} 
                    onClick = {() => this.setState({isDropdownOn:!this.state.isDropdownOn})}>{this.state.textInstrument}<FontAwesomeIcon icon={this.state.isDropdownOn ? faChevronUp : faChevronDown} className="chevron"/></button>
                    <div className = {this.state.isDropdownOn ? "dropdown-menu-instrument activeDropdown" : "dropdown-menu-instrument"}>
                        <ul>
                            <li onClick = {() => {
                                this.setState({isDropdownOn:!this.state.isDropdownOn,textInstrument: "Piano"})
                                this.input.focus()
                            }}>Piano 🎹</li>
                            <li onClick = {() => {
                                this.setState({isDropdownOn:!this.state.isDropdownOn,textInstrument: "Guitare"})
                                this.input.focus()
                            }}>Guitare 🎸</li>
                            <li onClick = {() => {
                                this.setState({isDropdownOn:!this.state.isDropdownOn, textInstrument: "Batterie"})
                                this.input.focus()
                            }}>Batterie 🥁</li>
                            <li onClick = {() => {
                                this.setState({isDropdownOn:!this.state.isDropdownOn, textInstrument:"Saxophone"})
                                this.input.focus()
                            }
                            }>Saxophone 🎷</li>
                        </ul>
                    </div>
                </div>
                <div className = "relative-input">
                    <input type="text" ref={(el) => this.input = el} onKeyUp={this.displaySearchInstrumentBtn}></input>
                    <button onClick={()=>{
                        this.input.value = ""
                        this.input.focus()
                    }} className={this.state.isBtnDisplay ? "searchInstrument activeBtnInstrument" : "searchInstrument" }>
                        <FontAwesomeIcon icon={faTimes} className=""/>
                    </button>
                    <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                </div>
            </div>
        </nav>
        )
    }
}

