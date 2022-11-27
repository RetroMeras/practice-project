<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from "vue";

const data = [
  { id: "1", value: 10, label: "носки" },
  { id: "2", value: 20, label: "шорты" },
  { id: "3", value: 40, label: "штаны" },
  { id: "4", value: 90, label: "куртка" },
];
const links = [
  { id: "1", target: "1", source: "2" },
  { id: "2", target: "2", source: "1" },
  { id: "3", target: "1", source: "3" },
  { id: "4", target: "3", source: "4" },
];

const WIDTH = 500;
const HEIGHT = 500;
const LINK_DISTANCE = 200;
const RADIUS = 20;

onMounted(() => {
  const simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody())
    .force(
      "link",
      d3
        .forceLink()
        .distance(LINK_DISTANCE)
        .id((d) => d.id)
    )
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", ticked);
  const container = d3
    .select("#canvas")
    .classed("canvas", true)
    .attr("viewBox", [-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT]);

  const link = container
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-width", 1.5)
    .selectAll("line")
    .data(links, (link) => [link.source, link.target])
    .join("line");

  const node = container
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(data, (node) => node.id)
    .join((enter) => enter.append("circle"))
    .attr("r", RADIUS)
    .attr("fill", "red");
  // .text((node) => node.label);
  // .call((node) => node.append("title").text((node) => node.label));

  function ticked() {
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }
  simulation.nodes(data);
  simulation.force("link").links(links);
  simulation.alpha(1).restart().tick();
  ticked();
});
</script>

<template>
  <div>
    <svg id="canvas"></svg>
  </div>
</template>

<style>
.canvas {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

.bar {
  fill: #3f4f5f;
}
</style>
