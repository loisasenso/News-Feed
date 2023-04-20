import React from "react";
import ReactDOM from "react-dom";

//Styles
const containerStyle = {
    border: "2px solid black"
}
const headerStyle = {
   textAlign: "center"
    
}

//API endpoint URL
const url = "https://jsonplaceholder.typicode.com/posts";

//Define a React component named "App"
class App extends React.Component {
    //constructor that initializes component's state
    constructor(props) {
        super(props);
        this.state = {
            articles: []

        };
    }

    //Lifecycle method called after the component has been mounted to the DOM
    componentDidMount(items){
        fetch(url)
            .then((response) => response.json()) //Converts response to JSON
            .then((json) => {
                let first10 = json.filter ((i, index) => index < 10);
                this.setState({articles: first10 });
            })
               
    }

    render(){
        return (
           <div style={containerStyle}>
                {this.state.articles.map((article) => (
                    <div key={article.id}>
                        <h3 style={headerStyle}>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))}
           </div>
        );
    }
  


   

    //Set the state of the component with the processed data
}

ReactDOM.render(<App/>, document.getElementById("root"))


