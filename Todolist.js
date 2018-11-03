import React,{Component,Fragment} from 'react';
import './todolist.css';
import TodoItem from './TodoItem';
import axios from 'axios';

export default class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:['学习英文','学习数学'],
            show:true
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.deleteMe=this.deleteMe.bind(this);
        this.addList=this.addList.bind(this);
        this.showItem=this.showItem.bind(this);
    }

    render(){
        console.log("render")
        return (
            <Fragment>
            <div>
                {//這個是一個輸出框
                }
                <label htmlFor="input">輸入內容</label>
                <input id="input" className="input" value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.addList}>提交</button></div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {this.getToListItem()}
                </ul>

                <p className={this.state.show ? "show-item":"hide-item"}>Hello world</p>
                <button onClick={this.showItem}>toggle</button>
            </Fragment>
        );
    };

    componentDidMount(){
        console.log("componentDidMount");
        axios.get('nicehomeweb/api/getTodoList').then((resp)=>{
            console.log("you");
        }).catch((ex)=>{
            console.log(ex.toString());
        });
    }

    showItem(){
        console.log(this.state.show)
        this.setState({
            show:this.state.show ? false:true
        });
    }

    getToListItem(){
        return (this.state.list.map((item,  key) => {return <TodoItem key={key} item={item} index={key} handleItem={this.deleteMe}/>}));
    }

    handleInputChange(e){
        const values=e.target.value;
        this.setState(()=>({
            inputValue:values
        }));
    }

    addList(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{
            console.log(this.ul.querySelectorAll("div").length);
        });
    }

    deleteMe(index){
        this.setState((preState)=>{
            const list=[...preState.list];
            list.splice(index,1);
            return {list}
        },()=>{
            console.log(this.ul.querySelectorAll("div").length);
        });
    }
}