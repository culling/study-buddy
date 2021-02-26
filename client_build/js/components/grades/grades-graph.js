class GradesGraph extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Add a svg shape. Note that the 'target' class is attributed to the circle -->
    <div>
    <div id="grades-graph" class="grades-graph"></div>
    </div>
    <br/>
        <b>a beautiful graph</b>
        ${JSON.stringify(this.grades)}
        `;
    const target = d3.select(".grades-graph"); // select the elements that have the class 'target'

    const data = [
      {
        courseShortName: "COMP307",
        finalGradeImpactPercent: 92.52369008,
        sumTotalFinalGrade: 100,
      },
      {
        courseShortName: "STAT292",
        finalGradeImpactPercent: 86.99095588,
        sumTotalFinalGrade: 101.75,
      },
      {
        courseShortName: "SWEN301",
        finalGradeImpactPercent: 90.13,
        sumTotalFinalGrade: 100,
      },
      {
        courseShortName: "SWEN326",
        finalGradeImpactPercent: 88.78287179,
        sumTotalFinalGrade: 100,
      },
    ];
    this.draw(target, data);
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
    // target
    //   .selectAll("div")
    //   .data(data)
    //   .enter()
    //   .append("h1")
    //   .text((element)=>{return element.courseShortName})
    //   ;
    const svgConfig = {
      height: 100,
      width: 100,
    };

    // Make the SVG container
    const svg = target
      .append("svg")
      .style("height", svgConfig.height)
      .style("width", svgConfig.width);

      //Add the bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return i * 10;
      })
      .attr("y", (d) =>{
        return svgConfig.height - d.finalGradeImpactPercent;
      })
      .style("width", 8)
      .style("height", (d) => {
        return  d.finalGradeImpactPercent;
      })
      .style("color", "red");
  };
}

customElements.define("grades-graph", GradesGraph);
