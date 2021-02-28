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
        finalGradeImpactPercent: 40.52369008,
        sumTotalFinalGrade: 70,
      },
      {
        courseShortName: "STAT292",
        courseFullName: "Applied Statistics 2A",
        finalGradeImpactPercent: 86.99095588,
        sumTotalFinalGrade: 101.75,
      },
      {
        courseShortName: "SWEN301",
        courseFullName: "Structured Methods",
        finalGradeImpactPercent: 90.13,
        sumTotalFinalGrade: 100,
      },
      {
        courseShortName: "SWEN326",
        courseFullName: "Safety-Critical Systems",
        finalGradeImpactPercent: 88.78287179,
        sumTotalFinalGrade: 100,
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
        grid-template-columns: 1fr 500px 1fr;
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

    console.log("Labels: ", labels);
    
    const graphTheme = {
      total:{
        fill: "#1E90FF"
      },
      impact:{
        fill: "#87CEEB"
      }
    }

    const svgConfig = {
      height: 120,
      width: 500,
      margins: {
        left: 0,
        top: 30,
        bottom: 30
      },
      bar: {
        height: 100,
        width: 120,
        margins: {
          left:20,
          top: 0,
          right: 0, 
          bottom: 0
        }
      },
    };

    // Make the SVG container
    const svg = target
      .append("svg")
      .style("height",  svgConfig.margins.top + svgConfig.height + svgConfig.margins.bottom)
      .style("width", svgConfig.width);

    //Add the bars
    const bars = svg
      .selectAll(".bar.field1")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar field1")
      .attr("x", (d, i) => {
        return i * svgConfig.bar.width;
      })
      .attr("y", (d) => {
        return this.getBarDrawingHeight(svgConfig) - d.sumTotalFinalGrade;
      })
      .style("width", svgConfig.bar.width - svgConfig.bar.margins.left)
      .style("height", (d) => {
        return d.sumTotalFinalGrade;
      })
      .style("fill", graphTheme.total.fill)
      .append("title")
      .text((d)=>{
        return d.courseFullName;
      });

    svg
      .selectAll(".bar.field2")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar field2")
      .attr("x", (d, i) => {
        return i * svgConfig.bar.width;
      })
      .attr("y", (d) => {
        return this.getBarDrawingHeight(svgConfig) - d.finalGradeImpactPercent;
      })
      .style("width", svgConfig.bar.width - svgConfig.bar.margins.left)
      .style("height", (d) => {
        return d.finalGradeImpactPercent;
      })
      .style("fill", graphTheme.impact.fill)
      .append("title")
      .text((d)=>{
        return d.courseFullName;
      });

    // // Add labels
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => {
        return i * svgConfig.bar.width;
      })
      .attr("y", (d, i) => {
        const labelHeight = this.getBarDrawingHeight(svgConfig) + svgConfig.margins.bottom;
        if (labelHeight > 0) {
          return labelHeight;
        }
        return labelHeight + 3;
      })
      .text((d) => {
        return d.courseShortName;
      });


  };

  getBarDrawingHeight = (svgConfig)=>{
    return svgConfig.height + svgConfig.margins.top;
  }
}

customElements.define("grades-graph", GradesGraph);
