import React, {Component} from 'react'
import {render} from 'react-dom'
/*
- 리엑트가 컴포넌트를 다루는 방법을 준수한다. 상태가 인터페이스 바깥의 자바스크립트 코드에서 완전히 관리된다
- 이 패턴은 사용자 상호작용에 반응하거나 유효성을 검사하는 인터페이스를 구현하는데 유리 하다
 */
class Search extends Component{
  constructor(){
    super();
    this.state ={
      searchTerm : "React"
    }
  }

  handleChange(e){
    this.setState({searchTerm: e.target.value.substr(0,10)})
  }

  render(){
    return(
      <div>
        {/*
         bundle.js:8636 Warning: Failed form propType:
         You provided a `value` prop to a form field without an `onChange` handler.
          This will render a read-only field. If the field should be mutable use `defaultValue`.
           Otherwise, set either `onChange` or `readOnly`. Check the render method of `Search`.
         */}
        Search Term : <input type="search" onChange={this.handleChange.bind(this)} defaultValue={this.state.searchTerm} />
      </div>
    )
  }
}
export default Search;
