class GradesGraph extends HTMLElement {
  constructor() {
    super();

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'css/main.css');


    this.data = [
      {
        courseShortName: "COMP307",
        courseFullName: "Introduction to Artificial Intelligence",
        currentGradeTotal: 40.52369008,
        maximumPossibleGrade: 70,
      },
      {
        courseShortName: "STAT292",
        courseFullName: "Applied Statistics 2A",
        currentGradeTotal: 86.99095588,
        maximumPossibleGrade: 101.75,
      },
      {
        courseShortName: "SWEN301",
        courseFullName: "Structured Methods",
        currentGradeTotal: 90.13,
        maximumPossibleGrade: 100,
      },
      {
        courseShortName: "SWEN326",
        courseFullName: "Safety-Critical Systems",
        currentGradeTotal: 88.78287179,
        maximumPossibleGrade: 100,
      },
    ];
  }


  connectedCallback() {
    this.innerHTML = `
    <style>
      .grades-graph {
        grid-area: "grades-graph";
      }

      .grades-graph-container {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 15px 10px;
        grid-template-areas: ". grades-graph .";
        justify-items: center;
      }
    </style>
    
    <div id="grades-graph-container" class="grades-graph-container">
      <div></div>
      <div>
        <div id="grades-graph" class="grades-graph"></div>
    
        <br />
        <b>a beautiful graph</b>
      </div>
      <div></div>
    </div>;
  
        `;
    const target = d3.select(".grades-graph"); // select the elements that have the class 'target'

    this.draw(target, this.data);
  }

  draw = (target, data) => {
    console.log( 
      "draw has been called with target: ",
      target,
      "\n and data: ",
      data
    );
    const labels = data.map((course) => {
      return course.courseShortName;
    });

    const graphTheme = {
      total: {
        fill: "#1E90FF",
        stroke: "#0E80EF",
        offset: 5
      },
      impact: {
        fill: "#87CEEB",
        stroke: "#77BEDB",
        offset: 0
      }
    }

    const svgConfig = {
      height: 120,
      width: 500,
      margins: {
        left: 30,
        top: 30,
        bottom: 30
      },
      bar: {
        height: 100,
        width: 120,
        margins: {
          left: 20,
          top: 0,
          right: 0,
          bottom: 0
        }
      },
    };

    // Make the SVG container
    const svg = target
      .append("svg")
      .style("height", svgConfig.margins.top + svgConfig.height + svgConfig.margins.bottom)
      .style("width", svgConfig.width);

    // -- Add the bars --
    // maximum potential grade grade
    svg
      .selectAll(".bar.field1")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar field1")
      .attr("x", (d, i) => {
        return this.getBarDrawingX(svgConfig, i, graphTheme.total.offset, this.data);
      })
      .attr("y", (d) => {
        return this.getBarDrawingHeight(svgConfig) - d.maximumPossibleGrade;
      })
      .style("width", (d) => {
        return this.getBarWidth(svgConfig, data) - svgConfig.margins.left + "px";
      })
      .style("height", (d) => {
        return d.maximumPossibleGrade;
      })
      .style("fill", graphTheme.total.fill)
      .style("stroke", graphTheme.total.stroke)
      .append("title")
      .text((d) => {
        return d.courseFullName;
      });

    // actual grade
    svg
      .selectAll(".bar.field2")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar field2")
      .attr("x", (d, i) => {
        return this.getBarDrawingX(svgConfig, i, graphTheme.impact.offset, this.data);
      })
      .attr("y", (d) => {
        return this.getBarDrawingHeight(svgConfig) - d.currentGradeTotal;
      })
      .style("width", () => {
        return this.getBarWidth(svgConfig, data) - svgConfig.margins.left + "px";
      })
      .style("height", (d) => {
        return d.currentGradeTotal;
      })
      .style("fill", graphTheme.impact.fill)
      .style("stroke", graphTheme.impact.stroke)
      .append("title")
      .text((d) => {
        return d.courseFullName;
      });

    // Add labels
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => {
        return this.getBarDrawingX(svgConfig, i, 0, this.data);
      })
      .attr("y", (d, i) => {
        return this.getBarDrawingHeight(svgConfig) + svgConfig.margins.bottom - 5;
      })
      .text((d) => {
        return d.courseShortName;
      });

    // Add y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.maximumPossibleGrade)])
      .range(this.getRange(svgConfig, data));
    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
      .attr("transform", `translate(${svgConfig.margins.left}, ${-1 * svgConfig.margins.bottom})`)
      .call(yAxis);

    // Add Top and bottom box lines
    // this.drawTopLine(svg, svgConfig, data);
    this.drawBottomLine(svg, svgConfig, data);

  };

  getBarWidth = (svgConfig, data) => {
    const barWidth = `${this.getBarSpacing(svgConfig, data) - svgConfig.bar.margins.left}`;
    return barWidth;
  }

  getBarSpacing = (svgConfig, data) => {
    const barSpacing = `${(svgConfig.width) / data.length}`;
    return barSpacing;
  }

  getBarDrawingHeight = (svgConfig) => {
    return svgConfig.height + svgConfig.margins.top;
  }

  getBarDrawingX = (svgConfig, i, additionalOffset, data) => {
    const barDrawingX = svgConfig.margins.left + additionalOffset + (i * (this.getBarSpacing(svgConfig, data)  )  );
    return barDrawingX;
  }

  getRange = (svgConfig, data) => {
    return [this.getBarDrawingHeight(svgConfig) + svgConfig.margins.bottom, this.getBarDrawingHeight(svgConfig) - (d3.max(data, (d) => d.maximumPossibleGrade) - svgConfig.margins.bottom)];
  }

  drawTopLine = (svg, svgConfig, data) => {
    svg.append("line")
      .style("stroke", "black")
      .style("stroke-width", 1)
      .attr("x1", 0)
      .attr("y1", this.getRange(svgConfig, data)[1])
      .attr("x2", svgConfig.width)
      .attr("y2", this.getRange(svgConfig, data)[1])
      .attr("transform", `translate(${svgConfig.margins.left}, ${-1 * svgConfig.margins.bottom})`)
  }

  drawBottomLine = (svg, svgConfig, data) => {
    svg.append("line")
      .style("stroke", "black")
      .style("stroke-width", 1)
      .attr("x1", 0)
      .attr("y1", this.getRange(svgConfig, data)[0])
      .attr("x2", svgConfig.width)
      .attr("y2", this.getRange(svgConfig, data)[0])
      .attr("transform", `translate(${svgConfig.margins.left}, ${-1 * svgConfig.margins.bottom})`)
  }

}

customElements.define("grades-graph", GradesGraph);
