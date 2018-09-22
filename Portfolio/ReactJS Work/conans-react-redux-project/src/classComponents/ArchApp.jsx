import React, {Component} from "react";
import {connect} from 'react-redux';
import ModuleList from '../components/ModuleList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from './ErrorBoundery'; 
import {info} from "../json/info"; 
import { setSearchField } from "../actions.js";


const mapStateToProps = (state) => {
    return {
        searchField: state.searchField,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
    }
    
}

class ArchApp extends Component {
    constructor() {
        super();
        this.state = {
            info: [], 
            
        }; 
    }

    checkValue = (e) => {
        this.setState({
            searchInput: e.target.value,
        }) 
    }


    componentDidMount() {
        this.setState({
            info: info, 
        });
    }


    render() {
        const {searchField, onSearchChange} = this.props; 
        const filterContent = this.state.info.filter(info => {
            return (info.title.toLowerCase().includes(searchField)); 
        })

        if (!info.length) {
            return <h1>Loading</h1>
        } else {
            return(
                <React.Fragment>
                    <SearchBox searchContent={onSearchChange} />
                    <ErrorBoundry>
                        <ModuleList info={filterContent}/>
                    </ErrorBoundry>
                   
                </React.Fragment>)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchApp); 