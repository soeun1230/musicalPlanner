import React, { Component } from "react";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: ["해적", "트레이스유", "멤피스"],
      pic_link: [
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5339%2F2021%2F11%2F03%2F0000244868_001_20211103091202050.png&type=sc960_832",
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDRfMjMy%2FMDAxNjQ5MDY0Nzg2NzM1.S-qSxwiST9sZMxxZIu-nvst_9xwcJ_nCSgoqPRWFHNIg.UkAIbICbf6adO8n0MpE3HRYmHB2mfCD7mjJBVFcsq6sg.JPEG.ippog0510%2FIMG_6455.jpg&type=sc960_832",
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5401%2F2023%2F05%2F24%2F0000279165_001_20230524101202743.jpg&type=sc960_832",
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
      <article class="mus">
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
        <p class="new_button">
          <button
            onClick={function () {
              this.addRankName(
                prompt("새로운 작품의 이름을 입력하세요."),
                prompt("사진 링크를 입력해주세요.")
              );
            }.bind(this)}
          >
            작품 등록
          </button>
        </p>
      </article>
    );
  }
}

export default Ranking;
