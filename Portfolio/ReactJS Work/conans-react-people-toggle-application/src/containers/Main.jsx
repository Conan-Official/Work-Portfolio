import React, {Component} from 'react'; 
import Header from '../components/Header'; 
import PersonCard from '../components/PersonCard'; 


class Main extends Component {
    state = {
        title: `Conan's People Application`,
        people: [
            {
                name: 'Conan', age: 22, 
            },
            {
                name: 'Jake', age: 22, 
            },

            {
                name: 'Clay', age: 22, 
            }
        ], 
        visible: false,
    }; 

    componentDidMount = () => {
        this.setState({
            title: `Conan's People Toggle Button Application`,
            people: [
                {
                    name: 'Conan', age: 22, 
                },

                {
                    name: 'Jake', age: 22, 
                },

                {
                    name: 'Clay', age: 22, 
                }
        ],
        visible: false,
        })
    }; 

    togglePeople = () => {
        const {visible} = this.state; 
        const isVisible = !visible; 
        this.setState({
            visible: isVisible, 
        })
    }

    render = () => {
        const {title, people, visible} = this.state;
        
        return (
            <React.Fragment>
                <Header title={title}/>
                <button className='button' onClick={this.togglePeople}>{visible ? 'Hide Person Cards' : 'Display Person Cards'}</button>
                {
                 visible ?  <div>
                    <PersonCard name={people[0].name} age={people[0].age}/>
                    <PersonCard name={people[1].name} age={people[1].age}/>
                    <PersonCard name={people[2].name} age={people[2].age}/>
                </div> : null
                }
               
               
            </React.Fragment>
        );
    }
}

export default Main; 