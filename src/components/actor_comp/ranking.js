import React, { Component } from "react";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: ["김려원", "김이후", "유리아"],
      pic_link: [
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjRfMjUg%2FMDAxNjM3NjgyMzk1MDY0.DcIcwlDj12r0Sq0Op6M2t-e137xTTndbMB1QwzXsS4Ig.K_zqsR6E67wm2AI8fFRq-69wSLCo7C0L9lnou8YWZyIg.JPEG.gg1988%2FKakaoTalk_20211124_003224586_14.jpg&type=sc960_832",
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MjhfMjg0%2FMDAxNTkzMzUxNjM5NTIw.yTUfoV-TfQu2bEjw1Ndx0K92XsCTfy3S23yY32ON1YYg.lOwIakaE0pZJ3YH5Bd9EccNACvpetRo3vfjOjgOc69kg.JPEG.kt3939%2F200627-3532.jpg&type=sc960_832",
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5401%2F2018%2F02%2F08%2F0000125049_001_20180208162113927.jpg&type=sc960_832",
      ],
      number: [0, 0, 0],
    };
  }
  addRankName(newName, newLink) {
    var _rank = this.state.rank.concat(newName);
    var _pic_link = this.state.pic_link.concat(newLink);
    var _number = this.state.number.concat(0);
    this.setState({ rank: _rank, pic_link: _pic_link, number: _number });
  }

  render() {
    return (
      <article class="act">
        {this.state.rank.map((name, index) => (
          <div key={index}>
            <p>{name}</p>
            <button
              onClick={function () {
                var _number = this.state.number;
                _number[index] += 1;
                this.setState({ number: _number });
              }.bind(this)}
            >
              +
            </button>
            <button
              onClick={function () {
                var _number = this.state.number;
                _number[index] -= 1;
                if (_number[index] < 0) {
                  _number[index] = 0;
                }
                this.setState({ number: _number });
              }.bind(this)}
            >
              -
            </button>
            <img src={this.state.pic_link[index]} alt={name} />
            <p>{this.state.number[index]} 번 봄</p>
          </div>
        ))}
        <p class="new_button1">
          <button
            onClick={function () {
              this.addRankName(
                prompt("새로운 배우의 이름을 입력하세요."),
                prompt("사진 링크를 입력해주세요.")
              );
            }.bind(this)}
          >
            배우 등록
          </button>
        </p>
      </article>
    );
  }
}

export default Ranking;
