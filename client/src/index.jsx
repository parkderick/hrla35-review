import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      type: [],
      inputTagIndex: -1
    };
    this.hdlDrop = this.hdlDrop.bind(this);
    this.hdlNameClick = this.hdlNameClick.bind(this);
    this.hdlSubmit = this.hdlSubmit.bind(this);
  }
  hdlDrop(e) {
    var endPoint = "/get/" + e.target.value;
    if (e.target.value === "Sort by Type") endPoint = "/getall";
    axios.get(endPoint).then(data => this.setState({ deck: data.data }));
  }
  hdlNameClick(index) {
    this.setState({ inputTagIndex: index });
  }
  hdlSubmit(e, index) {
    e.preventDefault();
    if (e.target.newname.value === "") return;
    axios
      .put("/changename/" + this.state.deck[index].id, {
        data: e.target.newname.value
      })
      .catch(err => console.log(err));
    var temp = this.state.deck.slice();
    temp[index].name = e.target.newname.value;
    // this is not recommended. please send a new request to database to update it
    this.setState({ inputTagIndex: -1 ,deck: temp});
  }
  componentDidMount() {
    axios.get("/getall").then(data => {
      this.setState({ deck: data.data });
      var obj = {};
      data.data.forEach(item => {
        if (!obj[item.type]) obj[item.type] = 1;
      });
      this.setState({ type: Object.keys(obj) });
    });
  }
  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button>Show All</button>
        <select onChange={this.hdlDrop}>
          <option>Sort by Type</option>
          {this.state.type.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <button>INSERT</button>
        {this.state.deck.map((item, index) => (
          <div key={index}>
            {this.state.inputTagIndex === index ? (
              <form onSubmit={e => this.hdlSubmit(e, index)}>
                <input name="newname" placeholder={item.name} />
                <button>submit</button>
              </form>
            ) : (
              <h3 onClick={() => this.hdlNameClick(index)}>{item.name}</h3>
            )}
            <img src={item.img} />
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("poke"));
