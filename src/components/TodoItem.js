import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <button>edit</button>
                    <button>remove</button>
                    <button>done</button>
                </div>
                <div>
                    <p>Todo Text</p>
                </div>
            </div>
         );
    }
}
 
export default TodoItem;