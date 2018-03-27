import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: shuffle(friends),
    score: 0,
    gameActive: true,
    message: "Try not to click the same image twice"
  };

  removeFriend = id => {
    var friends = this.state.friends;
    var score = this.state.score;
    var gameActive = this.state.gameActive;
    var message = this.state.message;

    if (this.state.gameActive) {
      friends = friends.map(friend => {
        if (friend.id === id) {
          if (friend.clicked) {
            gameActive = false;
            message = "You clicked the same cat twice. Game over";
            
          } else {
            friend.clicked = true;
            score++;
          }
        }
        return friend;
      });

      if (score === friends.length) {
        message = "You win!";
        gameActive = false;

      }
      
      if (gameActive) {
        friends = shuffle(friends);
      }

      this.setState({ friends, score, gameActive, message });
    }
  };

  reset = () => {
    friends.forEach(friend => {
      friend.clicked = false;
    });

    this.setState({
      friends: shuffle(friends),
      score: 0,
      gameActive: true,
      message: "Try not to click the same image twice"
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          title="Clickity-Click-a the Blep Cats"
          message={this.state.message}
          score={this.state.score}
          reset={this.reset}
         />
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

// Fisher-Yates shuffle function
function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;  
}

export default App;
