import * as d3 from "d3";

export interface INode{
  id: string;
  label: string;
}

export interface ILink{
  id: string;
  source: string;
  target: string;
}

export const forceGraph = ({nodes, links}: {nodes: INode[], links: ILink[]}, {
  WIDTH = 1000,
  HEIGHT = 1000,
  LINK_DISTANCE = 400,
  RADIUS = 40,
}) => {
  return () => {
  const simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody().strength(5))
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
    .attr("viewBox", [-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT])  

  const link = container
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-width", 1.5)
    .selectAll("line")
    .data(links, (link: ILink) => [link.source, link.target])
    .join("line");

  const nodeWrapper = container
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("g")
    .data(nodes, (node) => node.id)
    .enter()
    .append("g")
    .call(drag(simulation));

    const node = nodeWrapper
    .append("circle")
    .attr("r", RADIUS)
    .attr("fill", "red");

  const text = nodeWrapper
    .append("text")
    .text((node) => node.label)
    .attr("stroke", "black")
    .attr("stroke-width", 0.5)
    .attr("dx", RADIUS);

  function ticked() {
    nodeWrapper.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }

  simulation.nodes(nodes);
  simulation.force("link").links(links);
  simulation.alpha(1).restart().tick();
  ticked();
}}

const drag = (simulation: any) => {
  const dragstarted = (event: any, d: any) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x
    event.subject.fy = event.subject.y
  }

  const dragged = (event: any, d: any) => {
    event.subject.fx = event.x
    event.subject.fy = event.y
  }

  const dragended = (event: any, d: any) => {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  const dragsubject = (event: any) => {
    return simulation.find(event.sourceEvent.offsetX, event.sourceEvent.offsetY)
  }

  return d3.drag()
    .subject(dragsubject)
    .on("start", dragstarted)
    .on("drag",  dragged)
    .on("end", dragended)
}