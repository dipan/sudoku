import React, { Component } from "react";

// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      tableHeader: [],
      sudoku: [
        [
          { isEditable: false, isValid: true, value: "1" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "7" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "2" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "1" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "2" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "8" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "9" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: 1 },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "9" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "4" },
          { isEditable: true, isValid: true, value: "0" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" }
        ],
        [
          { isEditable: false, isValid: true, value: "5" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "8" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "6" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "3" },
          { isEditable: true, isValid: true, value: "0" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "5" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "4" }
        ],
        [
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "4" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "1" },
          { isEditable: true, isValid: true, value: "0" },
          { isEditable: false, isValid: true, value: "9" }
        ]
      ]
    };
  }

  componentWillMount() {
    // let arr = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

      }
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <table border="1">
            <caption>Sudoku</caption>
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
              </tr>

              {this.state.sudoku.map((element, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <b>{i + 1}</b>
                    </td>
                    {element.map((key, j) => {
                      return this.getCell(key, i, j);
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getCell(value, i, j) {
    if (!value.isEditable) {
      return (
        <td
          key={j}
          id={i + "-" + j}
          border="5px"
          bgcolor="grey"
          height="15px"
          width="15px"
          style={{
            borderRight: (j+1)%3===0?"5px solid black": "unset",
            borderBottom: (i+1)%3===0?"5px solid black": "unset",
            borderLeft: j===0?"5px solid black": "unset",
            borderTop: i===0?"5px solid black": "unset",
          }}
        >
          <font color="white">{value.value}</font>
        </td>
      );
    } else {
      return (
        <td 
          key={j}
          style={{
            borderRight: (j+1)%3===0?"5px solid black": "unset",
            borderBottom: (i+1)%3===0?"5px solid black": "unset",
            borderLeft: j===0?"5px solid black": "unset",
            borderTop: i===0?"5px solid black": "unset",
          }}
        >
          <input
            id={"input:" + i + "-" + j}
            type="text"
            style={{
              height: "15px",
              width: "15px",
              backgroundColor: value.isValid ? "white" : "red",
              color: value.isValid ? "black" : "white"
            }}
            value={this.state.sudoku[i][j].value}
            onChange={e => this.verifySudoku(i, j, e.target.value)}
          />
        </td>
      );
    }
  }

  verifySudoku(i, j, newValue) {
    console.log(i, j, newValue);
    let arr = this.state.sudoku;
    arr[i][j]["value"] = newValue;
    if (
      !this.verifyRow(i, j, arr[i][j].value) ||
      !this.verifyColumn(i, j, arr[i][j].value) ||
      !this.verifySmallCube(i - (i % 3), j - (j % 3), i, j, arr[i][j].value)
    ) {
      // change colour of table
      console.log("invalid - [" + i + "][" + j + "]");
      arr[i][j]["value"] = newValue;
      arr[i][j]["isValid"] = false;
    } else {
      arr[i][j]["isValid"] = true;
      console.log("change- [" + i + "][" + j + "]");
    }
    this.setState({ ...this.state, sudoku: arr });
  }

  verifyRow(i, col, value) {
    console.log("checking row[" + i + "] for value = " + value);
    for (let j = 0; j < 9; j++) {
      if (
        col === j ||
        this.state.sudoku[i][j].value === 0 ||
        this.state.sudoku[i][j].value.trim() === ""
      ) {
        continue;
      }
      if (this.state.sudoku[i][j].value === value) {
        return false;
      }
    }
    return true;
  }

  verifyColumn(row, j, value) {
    console.log("checking column[" + j + "] for value = " + value);
    for (let i = 0; i < 9; i++) {
      if (
        i === row ||
        this.state.sudoku[i][j].value === 0 ||
        this.state.sudoku[i][j].value.trim() === ""
      ) {
        continue;
      }
      if (this.state.sudoku[i][j].value === value) {
        return false;
      }
    }
    return true;
  }

  verifySmallCube(i, j, row, col, value) {
    console.log("checking smallBox[" + i + "][" + j + "] for value = " + value);
    let x = i + 3;
    let y = j + 3;
    console.log("till[" + x + "][" + y + "]");
    while (i < x) {
      j = col - (col % 3);
      while (j < y) {
        console.log("checking[" + i + "][" + j + "]");
        if (
          (i === row && j === col) ||
          this.state.sudoku[i][j].value === 0 ||
          this.state.sudoku[i][j].value.trim() === ""
        ) {
          // i++;
          j++;
          continue;
        }
        if (this.state.sudoku[i][j].value === value) {
          return false;
        }
        j++;
      }
      i++;
    }
    return true;
  }
}

export default App;
