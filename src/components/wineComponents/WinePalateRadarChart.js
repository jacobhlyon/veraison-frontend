import React from 'react'
import { VictoryGroup, VictoryChart, VictoryTheme, VictoryArea, VictoryLabel, VictoryPolarAxis} from 'victory'
import { connect } from 'react-redux'


class WinePalateRadarChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)


    const palateScoreData = [
      { acid: this.props.wine.currentPalateScore.acid, alcohol: this.props.wine.currentPalateScore.alcohol, complexity: this.props.wine.currentPalateScore.complexity, length: this.props.wine.currentPalateScore.length, tannin: this.props.wine.currentPalateScore.tannin },
      { acid: this.props.wine.avgPalateScores.acid, alcohol: this.props.wine.avgPalateScores.alcohol, complexity: this.props.wine.avgPalateScores.complexity, length: this.props.wine.avgPalateScores.length,  tannin: this.props.wine.avgPalateScores.tannin}
    ];

    this.state = {
      data: this.processData(palateScoreData),
      maxima: this.getMaxima(palateScoreData)
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = 5;
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {
    console.log(this.state.data)
    return (
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup colorScale={["blue", "red"]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />

      </VictoryChart>
    );
  }
}

function mapStateToProps(state){
  return {
    wine: state.wine
  }
}

export default connect(mapStateToProps)(WinePalateRadarChart)


