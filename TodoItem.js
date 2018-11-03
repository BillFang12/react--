import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleItem=this.handleClick.bind(this);
    }

    render(){
        const {item,test} =this.props;
        return (
            <div onClick={this.handleItem}>
                {item}
            </div>
        );
    }

    handleClick(){
        const {handleItem,index} =this.props;
        handleItem(index);
    }
}

TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    item:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    handleItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps={
    test:'hello'
}

export default TodoItem;