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
      height: 120,
      width: 1000,
      bar: {
        height: 100,
        width: 120,
        margin: 20,
      },
    };

    // Make the SVG container
    const svg = target
      .append("svg")
      .style("height", svgConfig.height)
      .style("width", svgConfig.width);

    //Add the bars
    const bars = svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return i * svgConfig.bar.width;
      })
      .attr("y", (d) => {
        return svgConfig.bar.height - d.sumTotalFinalGrade;
      })
      .style("width", svgConfig.bar.width - svgConfig.bar.margin)
      .style("height", (d) => {
        return d.sumTotalFinalGrade;
      })
      .style("fill", "orange")
      .append("title")
      .text((d)=>{
        return d.courseFullName;
      });

    // svg
    //   .selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => {
    //     return i * svgConfig.bar.width;
    //   })
    //   .attr("y", (d) => {
    //     return svgConfig.bar.height - d.finalGradeImpactPercent;
    //   })
    //   .style("width", svgConfig.bar.width - svgConfig.bar.margin)
    //   .style("height", (d) => {
    //     return d.finalGradeImpactPercent;
    //   })
    //   .style("fill", "red")
      
    //   // .append("title")
    //   // .text((d)=>{
    //   //   return d.courseFullName;
    //   // });

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
        const labelHeight = svgConfig.height;
        if (labelHeight > 0) {
          return labelHeight;
        }
        return labelHeight + 3;
      })
      .text((d) => {
        return d.courseShortName;
      });


  };
}

customElements.define("grades-graph", GradesGraph);
